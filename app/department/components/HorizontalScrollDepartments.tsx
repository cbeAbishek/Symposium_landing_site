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
  const x = useMotionValue(0); // Tracks the current position
  const [isHovered, setIsHovered] = useState(false);

  const duplicatedItems: Department[] = [...items, ...items];
  const itemWidth: number = 320; // Corresponds to w-72 (288px) + space-x-8 (32px)
  const totalWidth: number = items.length * itemWidth;

  // This useEffect handles the continuous animation loop
  useEffect(() => {
    if (!isHovered) {
      // Start the animation from the current position
      controls.start({
        x: x.get() - totalWidth,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: items.length * 5,
            ease: "linear",
          },
        },
      });
    }
    return () => controls.stop();
  }, [items.length, isHovered, controls, totalWidth, x]);

  // Handler to stop the loop and allow dragging when the user hovers
  const handleHoverStart = () => {
    setIsHovered(true);
    controls.stop();
  };

  // Handler to resume the loop when the user's mouse leaves
  const handleHoverEnd = () => {
    // Update the motion value to the current position before resuming the loop
    x.set(x.get() % totalWidth);
    setIsHovered(false);
  };

  return (
    <div className="w-full overflow-hidden py-10">
      <motion.div
        className="flex space-x-8 pb-4 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -totalWidth, right: 0 }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        animate={controls}
        style={{ x }}
      >
        {duplicatedItems.map((department: Department, index: number) => (
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
          <p className="mt-2 text-zinc-400 text-lg">
            {desc}
          </p>
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