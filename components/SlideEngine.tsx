"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BASE_W = 1280;
const BASE_H = 720;

interface SlideEngineProps {
  slides: ReactNode[];
  noClickNav?: number[];
}

export default function SlideEngine({ slides, noClickNav = [] }: SlideEngineProps) {
  const total = slides.length;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      setScale(Math.min(window.innerWidth / BASE_W, window.innerHeight / BASE_H) * 0.9);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

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
      {!noClickNav.includes(current) && (
        <>
          <div
            className="absolute left-0 top-0 w-1/4 h-full z-20 cursor-pointer"
            onClick={() => go(-1)}
          />
          <div
            className="absolute right-0 top-0 w-1/4 h-full z-20 cursor-pointer"
            onClick={() => go(1)}
          />
        </>
      )}

      {/* Fixed-size stage scaled to viewport */}
      <div
        style={{
          position: "absolute",
          width: BASE_W,
          height: BASE_H,
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 z-30">
        <div
          className="h-full bg-[#cc0000] transition-all duration-300 ease-out"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      {/* Slide number + nav controls (hover zone: bottom-right corner) */}
      <div className="absolute bottom-0 right-0 w-56 h-20 z-30 group">
        <div className="absolute bottom-4 right-6 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none">
          <button
            onClick={() => go(-1)}
            disabled={current === 0}
            suppressHydrationWarning
            className="flex items-center justify-center w-8 h-8 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 transition-colors text-xl leading-none"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <span suppressHydrationWarning className="text-sm text-gray-400 px-1">{current + 1} / {total}</span>
          <button
            onClick={() => go(1)}
            disabled={current === total - 1}
            suppressHydrationWarning
            className="flex items-center justify-center w-8 h-8 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 transition-colors text-xl leading-none"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
