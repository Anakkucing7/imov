"use client";

import { createContext, useContext, useEffect, useRef, useState, useSyncExternalStore } from "react";

const MotionContext = createContext<{
  running: boolean; reduced: boolean;
  progress: React.RefObject<{ x: number; y: number; scroll: number }>;
} | null>(null);

export function useSculptureMotion() {
  const motion = useContext(MotionContext);
  if (!motion) throw new Error("Sculpture viewport requires SculptureMotion");
  return motion;
}

const subscribe = (callback: () => void) => {
  const query = matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};
const readMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

export function SculptureMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false), [visible, setVisible] = useState(true);
  const reduced = useSyncExternalStore(subscribe, readMotion, () => true);
  const progress = useRef({ x: 0, y: 0, scroll: 0 });

  useEffect(() => {
    const element = root.current!;
    const experience = element.closest<HTMLElement>(".hero-experience")!;
    const hero = experience.querySelector<HTMLElement>(".hero")!;
    const pointer = matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0, inView = true, x = 0, y = 0;
    experience.dataset.motion = reduced ? "static" : "ready";
    function paint() {
      frame = 0;
      const rect = hero.getBoundingClientRect();
      const scroll = reduced ? 0 : Math.max(0, Math.min(1, -rect.top / rect.height));
      experience.style.setProperty("--hero-progress", scroll.toFixed(3));
      Object.assign(progress.current, { x, y, scroll });
    }
    function schedule() { if (!frame && !document.hidden) frame = requestAnimationFrame(paint); }
    function move(event: PointerEvent) {
      if (!pointer.matches || reduced || paused) return;
      const rect = element.getBoundingClientRect();
      x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
      schedule();
    }
    function reset() { x = y = 0; schedule(); }
    function visibility() {
      const resting = document.hidden || !inView;
      element.dataset.resting = String(resting); setVisible(!resting); schedule();
    }
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; visibility(); });
    observer.observe(element);
    element.addEventListener("pointermove", move); element.addEventListener("pointerleave", reset);
    window.addEventListener("scroll", schedule, { passive: true }); window.addEventListener("resize", reset);
    document.addEventListener("visibilitychange", visibility);
    reset();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect();
      element.removeEventListener("pointermove", move); element.removeEventListener("pointerleave", reset);
      window.removeEventListener("scroll", schedule); window.removeEventListener("resize", reset);
      document.removeEventListener("visibilitychange", visibility);
      experience.style.removeProperty("--hero-progress");
    };
  }, [paused, reduced]);

  return <MotionContext value={{ running: !paused && !reduced && visible, reduced, progress }}>
    <div ref={root} className="kinetic-sculpture" data-paused={paused}>
      {children}
      <button className="motion-toggle" type="button" onClick={() => setPaused(!paused)} hidden={reduced}>
        <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>{paused ? "Play motion" : "Pause motion"}
      </button>
    </div>
  </MotionContext>;
}
