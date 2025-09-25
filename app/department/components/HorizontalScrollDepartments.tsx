// app/department/components/HorizontalScrollDepartments.tsx

"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
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
  const x = useMotionValue(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const duplicatedItems = [...items, ...items];
  const [measuredItemWidth, setMeasuredItemWidth] = useState<number>(320);
  const [totalWidth, setTotalWidth] = useState<number>(items.length * 320);
  
  // Controls pause state for Autoplay and Dragging
  const isDraggingRef = useRef(false);
  const lastDirectionRef = useRef<number>(-1); 
  
  // CTA Hover Logic Refs
  const ctaHoverRef = useRef<boolean>(false);
  const ctaResumeTimeoutRef = useRef<number | null>(null);

  // --- Utility Functions ---

  const measureWidths = useCallback(() => {
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector(".card-item") as HTMLElement | null;
      if (firstCard) {
        const rect = firstCard.getBoundingClientRect();
        // Item width is the card width (w-72) plus the total horizontal padding (px-2 = 8px left + 8px right)
        // Note: The main container now uses gap-4 (16px), and each item uses px-2 (4px left + 4px right).
        // Actual item width calculation can be tricky with gap. We rely on measured width + container's gap.
        const itemW = rect.width + 16; // w-72 (288px) + gap-4 (16px) = 304px, or w-72 + px-2 (4+4) + gap-4
        
        // Simpler approach: w-72 (288px) + px-2 (8px total) = 296px. Add gap-4 (16px) to total width calculation
        const itemBaseWidth = rect.width; 
        const itemSpacing = 16; // Based on gap-4 between items
        const finalW = itemBaseWidth + itemSpacing;

        const newTotal = items.length * finalW;

        setMeasuredItemWidth(finalW);
        setTotalWidth(newTotal);
        return newTotal;
      }
    }
    const fallbackW = 320; // w-72 (288) + padding/gap (32)
    const fallbackTotal = items.length * fallbackW;
    setMeasuredItemWidth(fallbackW);
    setTotalWidth(fallbackTotal);
    return fallbackTotal;
  }, [items.length]);


  // RAF-based autoplay loop. directionSign: -1 = left, +1 = right
  const startLoopAnimation = useCallback((startX = 0, width = totalWidth, directionSign = -1) => {
    // 🛑 Immediate check to stop if any pause condition is met
    if (!width || width <= 0 || isDraggingRef.current || ctaHoverRef.current) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    // Stop any existing RAF
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    lastTimeRef.current = null;

    // Calculate the nearest card-aligned position for a smooth restart.
    const itemW = measuredItemWidth;
    let currentNormalizedX = startX % width;
    if (currentNormalizedX > 0) currentNormalizedX -= width;

    const nearestIndex = Math.round(Math.abs(currentNormalizedX) / itemW);
    const startPos = -(nearestIndex % items.length) * itemW;
    x.set(startPos); 

    const duration = Math.max(4, items.length * 2.5);
    const speed = Math.abs(width / duration);

    const loop = (time: number) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      // 🛑 Critical check for pause inside loop
      if (!isDraggingRef.current && !ctaHoverRef.current) {
        let current = x.get();
        let next = current + -directionSign * speed * dt;
        
        // wrap-around
        if (next <= -width) next += width;
        if (next > 0) next -= width;
        
        x.set(next);
      } 

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame((t) => {
      lastTimeRef.current = t;
      loop(t);
    });
  }, [x, totalWidth, items.length, measuredItemWidth]);


  // --- CTA Hover Handlers (Pause Scroll on Hover) ---

  const handleCTAEnter = useCallback(() => {
    ctaHoverRef.current = true;
    if (ctaResumeTimeoutRef.current) {
      clearTimeout(ctaResumeTimeoutRef.current);
      ctaResumeTimeoutRef.current = null;
    }
    // Pause autoplay immediately
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    lastTimeRef.current = null;
  }, []);

  const handleCTALeave = useCallback(() => {
    ctaHoverRef.current = false;
    
    if (ctaResumeTimeoutRef.current) {
      clearTimeout(ctaResumeTimeoutRef.current);
    }
    const resumeDelay = 300; // ms
    ctaResumeTimeoutRef.current = window.setTimeout(() => {
      ctaResumeTimeoutRef.current = null;
      if (!isDraggingRef.current && !ctaHoverRef.current) {
        startLoopAnimation(x.get(), totalWidth, lastDirectionRef.current || -1);
      }
    }, resumeDelay);
  }, [x, totalWidth, startLoopAnimation]);


  // --- Framer Motion Drag Handlers (Smooth Push/Pull) ---

  const handleDragStart = () => {
    isDraggingRef.current = true;
    // Pause RAF-based loop when dragging starts
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    lastTimeRef.current = null;
  };

  const handleDrag = () => {
    // Implement infinite scroll during drag
    const currentX = x.get();
    const width = totalWidth;

    // Wrap around logic
    if (currentX > 0) {
      x.set(currentX - width);
    } else if (currentX < -width) {
      x.set(currentX + width);
    }
    
    // Track current drag direction using velocity
    const velocity = x.getVelocity();
    if (Math.abs(velocity) > 10) { 
        // velocity > 0 (moving right) -> autoplay direction is -1 (left)
        // velocity < 0 (moving left) -> autoplay direction is +1 (right)
        lastDirectionRef.current = velocity > 0 ? -1 : 1; 
    }
  }

  const handleDragEnd = () => {
    isDraggingRef.current = false;
    if (!ctaHoverRef.current) {
        // Resume using the direction set during the drag
        startLoopAnimation(x.get(), totalWidth, lastDirectionRef.current || -1);
    }
  };

  // --- Effects ---

  useEffect(() => {
    setHasMounted(true);
    const computedTotal = measureWidths();
    startLoopAnimation(0, computedTotal);

    const handleResize = () => {
        const newTotal = measureWidths();
        startLoopAnimation(x.get(), newTotal);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (ctaResumeTimeoutRef.current) clearTimeout(ctaResumeTimeoutRef.current);
      lastTimeRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  useEffect(() => {
    if (!hasMounted) return;
    startLoopAnimation(x.get(), totalWidth, lastDirectionRef.current || -1);
  }, [totalWidth, hasMounted, startLoopAnimation]);
  
  useEffect(() => {
    return () => {
      if (ctaResumeTimeoutRef.current) {
        clearTimeout(ctaResumeTimeoutRef.current);
      }
    };
  }, []);


  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex touch-manipulation select-none gap-4" // gap-4 (16px) spacing between cards
        style={{ x, touchAction: "pan-y" }}
        drag="x"
        dragConstraints={{ left: -totalWidth, right: totalWidth }}
        dragElastic={0.01}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        {duplicatedItems.map((item, idx) => (
          // Card item wrapper, using px-2 (8px total) for a small internal buffer
          <div key={idx} className="flex-none px-2 card-item"> 
            <div className="flex flex-col items-center">
              <Link 
                href={item.href} 
                className="block"
                draggable={false} 
              >
                <div
                  // 🎯 CARD CONTAINER: Themed background matching the page gradient
                  className="group relative h-[380px] w-72 overflow-hidden rounded-3xl shadow-2xl transition-all duration-500
                             bg-gradient-to-br from-zinc-900/60 via-indigo-950/30 to-transparent border border-white/10
                             hover:border-indigo-400/40 hover:shadow-indigo-500/30"
                  draggable={false}
                >
                  {/* Themed overlay blends with page colors for consistent look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-indigo-900/20 to-transparent" />

                  {/* content (inside card) - large centered logo that visually fills the card */}
                  <div className="relative z-30 flex h-full flex-col items-center p-6 text-white">
                    {/* large logo area: centered, responsive, with subtle background */}
                    <div className="flex-1 w-full flex items-center justify-center">
                      <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-white/6 flex items-center justify-center overflow-hidden  shadow-inner">
                        {/* Large image inside circular/rounded container to appear 'filled' */}
                        <Image
                          src={item.image as any}
                          alt={item.label}
                          width={192}
                          height={192}
                          className="object-contain"
                          priority
                          draggable={false}
                        />
                      </div>
                    </div>

                    {/* Footer for the CTA (kept at bottom) */}
                    <div className="mt-4 w-full flex items-center justify-between text-sm text-zinc-300 pt-4 border-t border-zinc-700/50">
                      <span className="text-zinc-400">View Events</span>
                      {/* CTA Button: Sleek, white-outlined ghost button */}
                      <span
                        onPointerEnter={handleCTAEnter}
                        onPointerLeave={handleCTALeave}
                        className="inline-flex items-center rounded-full border border-white/40 bg-transparent px-4 py-1 text-white hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        More Details <span className="ml-2">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* LABEL: Prominent title placed beneath the card */}
              <div className="mt-3 text-center w-72">
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-300">
                  {item.label}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}