"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Component, useCallback, useEffect, useRef, useState } from "react";
import { useCoreMotion } from "./core-motion";
import { createOrbitPose, dragOrbit } from "@/lib/orbital-motion";

const OrbitalScene = dynamic(() => import("./orbital-scene"), { ssr: false });
const domains = [
  { kind: "products", name: "Digital Products", href: "/explore#digital-products" },
  { kind: "developers", name: "Developer Services", href: "/explore#development-services" },
  { kind: "ai", name: "Future AI", href: "/explore#ai-building" },
] as const;

class CanvasBoundary extends Component<{ children: React.ReactNode; onFailure: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onFailure(); }
  render() { return this.state.failed ? null : this.props.children; }
}

export function OrbitalViewport({ children }: { children: React.ReactNode }) {
  const motion = useCoreMotion();
  const pose = useRef(createOrbitPose());
  const drag = useRef({ id: -1, x: 0, y: 0, time: 0 });
  const links = useRef<(HTMLAnchorElement | null)[]>([]);
  const guides = useRef<(SVGPathElement | null)[]>([]);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const enhanced = ready && !failed && !motion.reduced;
  const fail = useCallback(() => setFailed(true), []);
  const reveal = useCallback(() => setReady(true), []);
  const conceal = useCallback(() => setReady(false), []);

  useEffect(() => {
    if (!motion.running) {
      pose.current.dragging = false;
      pose.current.velocityX = pose.current.velocityY = 0;
      drag.current.id = -1;
    }
  }, [motion.running]);

  function release(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerId !== drag.current.id) return;
    pose.current.dragging = false;
    if (event.type !== "pointerup") pose.current.velocityX = pose.current.velocityY = 0;
    if (event.target instanceof Element && event.target.hasPointerCapture(event.pointerId)) event.target.releasePointerCapture(event.pointerId);
    drag.current.id = -1;
  }

  return <div className="orbital-viewport" data-renderer={enhanced ? "webgl" : "svg"} data-failed={failed}>
    <div className="core-fallback" aria-hidden={enhanced || undefined}>{children}</div>
    {!motion.reduced && !failed && <CanvasBoundary onFailure={fail}>
      <div className="core-webgl" role="group" aria-label="Interactive IMOV Orbital Core" aria-describedby="core-input-help"
        tabIndex={enhanced ? 0 : -1} aria-hidden={!enhanced || undefined}
        onPointerDown={event => {
          if (!motion.running || event.button !== 0 || event.pointerType !== "mouse" || !(event.target instanceof HTMLCanvasElement)) return;
          drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY, time: event.timeStamp };
          pose.current.dragging = true;
          pose.current.velocityX = pose.current.velocityY = 0;
          event.target.setPointerCapture(event.pointerId);
        }}
        onPointerMove={event => {
          const input = drag.current;
          if (!motion.running || input.id !== event.pointerId) return;
          dragOrbit(pose.current, event.clientX - input.x, event.clientY - input.y, (event.timeStamp - input.time) / 1000);
          Object.assign(input, { x: event.clientX, y: event.clientY, time: event.timeStamp });
        }}
        onPointerUp={release} onPointerCancel={release} onLostPointerCapture={release}
        onKeyDown={event => {
          if (event.target !== event.currentTarget || !motion.running) return;
          const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home"];
          if (!keys.includes(event.key)) return;
          event.preventDefault();
          if (event.key === "Home") Object.assign(pose.current, createOrbitPose());
          else dragOrbit(pose.current, event.key === "ArrowLeft" ? -24 : event.key === "ArrowRight" ? 24 : 0, event.key === "ArrowUp" ? -20 : event.key === "ArrowDown" ? 20 : 0, .1);
          pose.current.velocityX = pose.current.velocityY = 0;
        }}>
        <OrbitalScene motion={motion} pose={pose} links={links} guides={guides} onReady={reveal} onFailure={fail} onDispose={conceal} />
      </div>
    </CanvasBoundary>}
    {enhanced && <svg className="core-connections" viewBox="0 0 800 700" fill="none" aria-hidden="true">
      {domains.map((domain, index) => <path key={domain.kind} className={`connection-${domain.kind}`} ref={element => { guides.current[index] = element; }} />)}
    </svg>}
    {enhanced && domains.map((domain, index) => <Link key={domain.kind} href={domain.href}
      className="core-satellite-target" data-domain={domain.kind} ref={element => { links.current[index] = element; }}
      aria-label={`Explore ${domain.name} satellite`} />)}
    <p id="core-input-help" className="core-input-help" hidden={!enhanced}>
      <span className="core-drag-hint">Drag to rotate · Arrow keys when focused · Home to reset</span>
      <span className="core-touch-hint">Tap a satellite to explore</span>
    </p>
  </div>;
}
