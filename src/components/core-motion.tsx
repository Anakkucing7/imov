"use client";

import { createContext, useContext, useEffect, useRef, useState, useSyncExternalStore } from "react";

export type CoreDomain = "products" | "developers" | "ai";
export type CoreProgress = { x: number; y: number; scroll: number };
const CoreContext = createContext<{
  running: boolean; reduced: boolean; paused: boolean; activeDomain: CoreDomain | null;
  progress: React.RefObject<CoreProgress>;
} | null>(null);

export function useCoreMotion() {
  const motion = useContext(CoreContext);
  if (!motion) throw new Error("Orbital viewport requires CoreMotion");
  return motion;
}

const subscribeMotion = (callback: () => void) => {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};
const readReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const serverReducedMotion = () => true;

export function CoreMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeDomain, setActiveDomain] = useState<CoreDomain | null>(null);
  const reduced = useSyncExternalStore(subscribeMotion, readReducedMotion, serverReducedMotion);
  const progress = useRef<CoreProgress>({ x: 0, y: 0, scroll: 0 });

  useEffect(() => {
    const element = root.current;
    const experience = element?.closest<HTMLElement>(".hero-experience");
    const hero = experience?.querySelector<HTMLElement>(".hero");
    if (!element || !experience || !hero) return;

    const pointer = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 900px)");
    let cleanup = () => {};

    function configure() {
      cleanup();
      element!.style.setProperty("--pointer-x", "0");
      element!.style.setProperty("--pointer-y", "0");
      experience!.style.setProperty("--hero-progress", "0");
      progress.current = { x: 0, y: 0, scroll: 0 };
      experience!.dataset.motion = reduced ? "static" : "ready";
      if (reduced || paused) return;

      let frame = 0;
      let x = 0;
      let y = 0;
      let visible = true;
      function paint() {
        frame = 0;
        const rect = hero!.getBoundingClientRect();
        const scroll = Math.max(0, Math.min(1, -rect.top / rect.height));
        experience!.style.setProperty("--hero-progress", scroll.toFixed(3));
        element!.style.setProperty("--pointer-x", x.toFixed(3));
        element!.style.setProperty("--pointer-y", y.toFixed(3));
        Object.assign(progress.current, { x, y, scroll });
      }
      function schedule() {
        if (!frame && !document.hidden) frame = requestAnimationFrame(paint);
      }
      function move(event: PointerEvent) {
        if (!pointer.matches) return;
        const rect = element!.getBoundingClientRect();
        x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
        y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
        schedule();
      }
      function resetPointer() { x = 0; y = 0; schedule(); }
      function visibility() {
        element!.dataset.resting = String(document.hidden || !visible);
        setVisible(!document.hidden && visible);
        schedule();
      }
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        visibility();
      });
      observer.observe(element!);
      element!.addEventListener("pointermove", move);
      element!.addEventListener("pointerleave", resetPointer);
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", resetPointer);
      pointer.addEventListener("change", resetPointer);
      document.addEventListener("visibilitychange", visibility);
      cleanup = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        element!.removeEventListener("pointermove", move);
        element!.removeEventListener("pointerleave", resetPointer);
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", resetPointer);
        pointer.removeEventListener("change", resetPointer);
        document.removeEventListener("visibilitychange", visibility);
      };
    }

    configure();
    return () => {
      cleanup();
      experience.style.removeProperty("--hero-progress");
    };
  }, [paused, reduced]);

  function highlight(target: EventTarget | null) {
    const domain = target instanceof Element ? target.closest<HTMLElement>("[data-domain]")?.dataset.domain : null;
    setActiveDomain(domain === "products" || domain === "developers" || domain === "ai" ? domain : null);
  }

  return <CoreContext value={{ running: !paused && !reduced && visible, reduced, paused, activeDomain, progress }}>
  <div className="imov-core" ref={root} data-paused={paused} data-active-domain={activeDomain}
    onFocusCapture={event => highlight(event.target)} onBlurCapture={event => highlight(event.relatedTarget)}
    onPointerOver={event => highlight(event.target)} onPointerLeave={() => highlight(null)}>
    {children}
    <button className="motion-toggle" type="button" onClick={() => setPaused(!paused)}>
      <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>{paused ? "Play motion" : "Pause motion"}
    </button>
  </div>
  </CoreContext>;
}
