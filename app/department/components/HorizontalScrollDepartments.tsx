"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import type { StaticImageData } from "next/image";

type Department = {
  href: string;
  label: string;
  desc: string;
  image: string | StaticImageData;
};

interface HorizontalScrollDepartmentsProps {
  items: Department[];
}

export default function HorizontalScrollDepartments({
  items,
}: HorizontalScrollDepartmentsProps): JSX.Element {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const duplicatedItems = [...items, ...items];
  const [measuredItemWidth, setMeasuredItemWidth] = useState<number | null>(null);
  const [totalWidth, setTotalWidth] = useState<number>(0);

  // compute duplicatedItems length remains same

  // Preload images and measure card width
  const preloadAndMeasure = async () => {
    // preload images
    const srcs = items.map((it) => (typeof it.image === "string" ? it.image : (it.image as any).src));
    await Promise.all(
      srcs.map(
        (s) =>
          new Promise<void>((resolve) => {
            const img = new window.Image();
            img.src = s;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      )
    );

    // measure card width and gap
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector(".flex-none") as HTMLElement | null;
      if (firstCard) {
        const rect = firstCard.getBoundingClientRect();
        // measure gap using next sibling margin-left (space-x utility)
        const second = firstCard.nextElementSibling as HTMLElement | null;
        let gap = 0;
        if (second) {
          const style = window.getComputedStyle(second);
          gap = parseFloat(style.marginLeft || "0") || 0;
        }
        const itemW = rect.width + gap;
        setMeasuredItemWidth(itemW);
        setTotalWidth(items.length * itemW);
        return itemW;
      }
    }
    // fallback
    const fallback = 320;
    setMeasuredItemWidth(fallback);
    setTotalWidth(items.length * fallback);
    return fallback;
  };

  // Helper that starts the loop animation from the current x position
  const startLoopAnimation = (startX = 0) => {
    // set the motion value to the desired start position first
    x.set(startX);

    // Start looping animation to -totalWidth (half-width) then repeat
    // Use requestAnimationFrame so the animation starts after layout/paint
    requestAnimationFrame(() => {
      controls.start({
        x: -totalWidth,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: Math.max(4, items.length * 2.5),
            ease: "linear",
          },
        },
      });
    });
  };

  useEffect(() => {
    let rafId: number | null = null;
    let mounted = true;
    setHasMounted(true);

    // preload images and measure, then start animation using measured widths
    (async () => {
      const itemW = await preloadAndMeasure();
      if (!mounted) return;
      // start after paint
      rafId = requestAnimationFrame(() => startLoopAnimation(0));
    })();

    return () => {
      mounted = false;
      if (rafId) cancelAnimationFrame(rafId);
      controls.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  // Handler to stop the loop when the user hovers
  const handleHoverStart = () => {
    setIsHovered(true);
    controls.stop();
  };

  // Handler to resume the loop when the user's mouse leaves
  const handleHoverEnd = () => {
    setIsHovered(false);
    // normalize current position to the [0, totalWidth) range to avoid large numbers
    const current = x.get();
    const normalized = ((current % totalWidth) + totalWidth) % totalWidth;
    // start from the normalized negative position so the loop looks seamless
    startLoopAnimation(-normalized);
  };

  // When dragging ends, normalize the position and resume animation
  const handleDragEnd = () => {
    // stop any current animation
    controls.stop();
    const current = x.get();
    const normalized = ((current % totalWidth) + totalWidth) % totalWidth;
    // set motion value to -normalized so layout aligns with duplicated items
    x.set(-normalized);
    // resume loop
    startLoopAnimation(-normalized);
  };

  return (
    <div className="w-full overflow-hidden py-10" ref={containerRef}>
      <motion.div
        className="flex space-x-8 pb-4 cursor-grab active:cursor-grabbing"
        drag="x"
        // only enable dragConstraints once totalWidth is measured
        dragConstraints={{ left: -(totalWidth || 0), right: 0 }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onDragEnd={handleDragEnd}
        animate={controls}
        style={{ x }}
      >
        {duplicatedItems.map((department, index) => (
          <DepartmentCard key={index} department={department} />
        ))}
      </motion.div>
    </div>
  );
}

// Reusable Department Card Component (kept in the same file for simplicity)
function DepartmentCard({ department }: { department: Department }): JSX.Element {
  const { href, label, desc, image } = department;

  return (
    <div className="flex-none w-72 h-[400px]">
      <div className="group relative overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/50 p-8 shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col justify-between">
        <div className="relative flex flex-col items-center p-4 text-center">
          <div className="h-28 w-28 relative mb-6">
            <Image
              src={image}
              alt={`${label} logo`}
              layout="fill"
              objectFit="contain"
              className="transition-all duration-500 group-hover:scale-110"
            />
          </div>
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-500 to-purple-400">
            {label}
          </h3>
          <p className="mt-2 text-zinc-400 text-lg">{desc}</p>
        </div>
        <div className="mt-auto pt-6 flex justify-center">
          <Link href={href}>
            <button className="inline-flex items-center rounded-full bg-indigo-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg">
              More Details
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                &rarr;
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}