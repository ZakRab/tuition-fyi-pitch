"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SlideEngineProps {
  slides: ReactNode[];
}

export default function SlideEngine({ slides }: SlideEngineProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (delta: number) => {
      setCurrent((prev) => {
        const next = prev + delta;
        if (next < 0 || next >= total) return prev;
        setDirection(delta);
        return next;
      });
    },
    [total]
  );

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const n = parseInt(hash, 10);
      if (!isNaN(n) && n >= 0 && n < total) setCurrent(n);
    }
  }, [total]);

  useEffect(() => {
    window.location.hash = String(current);
  }, [current]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft" || e.key === "Backspace") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Touch/swipe support
  useEffect(() => {
    let startX = 0;
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    };
    window.addEventListener("touchstart", onStart);
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [go]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      {/* Click navigation zones */}
      <div
        className="absolute left-0 top-0 w-1/4 h-full z-20 cursor-pointer"
        onClick={() => go(-1)}
      />
      <div
        className="absolute right-0 top-0 w-1/4 h-full z-20 cursor-pointer"
        onClick={() => go(1)}
      />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {slides[current]}
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 z-30">
        <div
          className="h-full bg-[#cc0000] transition-all duration-300 ease-out"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      {/* Slide number */}
      <div className="absolute bottom-3 right-6 text-xs text-gray-400 z-30 select-none">
        {current + 1} / {total}
      </div>
    </div>
  );
}
