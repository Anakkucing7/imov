"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function SiteHeader({ light = false, current = "home" }: { light?: boolean; current?: "home" | "explore" | "vision" }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className={`site-header ${light ? "header-light" : ""}`}>
      <div className="frame header-inner">
        <Link className="wordmark" href="/" aria-label="IMOV home" onClick={() => setOpen(false)}>imov<span aria-hidden="true">.</span></Link>
        <button className="menu-toggle" type="button" ref={toggle} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span></button>
        <nav id="site-navigation" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          <Link href="/explore" aria-current={current === "explore" ? "page" : undefined} onClick={() => setOpen(false)}>Explore</Link>
          <Link href="/vision" aria-current={current === "vision" ? "page" : undefined} onClick={() => setOpen(false)}>Vision</Link>
          <Link className="button button-small" href="/explore" onClick={() => setOpen(false)}>Explore IMOV <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
