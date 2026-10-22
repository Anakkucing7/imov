"use client";

import dynamic from "next/dynamic";
import { Component, useCallback, useState } from "react";
import { useSculptureMotion } from "./sculpture-motion";

const SculptureScene = dynamic(() => import("./sculpture-scene"), { ssr: false });

class CanvasBoundary extends Component<{ children: React.ReactNode; onFailure: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onFailure(); }
  render() { return this.state.failed ? null : this.props.children; }
}

export function SculptureViewport({ children }: { children: React.ReactNode }) {
  const motion = useSculptureMotion();
  const [ready, setReady] = useState(false), [failed, setFailed] = useState(false);
  const reveal = useCallback(() => setReady(true), []);
  const fail = useCallback(() => setFailed(true), []);
  const conceal = useCallback(() => setReady(false), []);
  return <div className="sculpture-viewport" data-renderer={ready && !failed ? "webgl" : "svg"} data-failed={failed}
    role="img" aria-label="Intertwined flowing metal ribbons surrounding an open center">
    <div className="sculpture-fallback" aria-hidden="true">{children}</div>
    {!failed && <CanvasBoundary onFailure={fail}>
      <div className="sculpture-webgl" aria-hidden="true">
        <SculptureScene motion={motion} onReady={reveal} onFailure={fail} onDispose={conceal} />
      </div>
    </CanvasBoundary>}
  </div>;
}
