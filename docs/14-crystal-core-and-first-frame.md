# Crystal core and composed first frame

**Status: implementation paused; visual direction rejected for further iteration. See [art-direction audit](15-orbital-core-art-direction-audit.md). Preserve this implementation as a checkpoint; approve a static design before resuming.**

2026-10-22. Pending visual review. Preserve the page, copy, routes, CTA and Adaptive Premium tokens.

Replace the rounded module with an elongated eight-sided faceted energy prism: pointed north/south ends, asymmetric shoulders, a raised front ridge, navy reflective facets, a smaller luminous inner crystal and restrained cyan edges. Keep the wordmark as a quiet surface detail. This is concept artwork, not a new brand logo. Reuse current Three.js, lights and interaction components.

Three rings have separate jobs: a thin larger background oval behind the nucleus, a medium-width dominant diagonal, and a smaller near-horizontal supporting orbit in front. Their planes stay composed; only the open seams and waypoints drift, at approximately 140/180/220 seconds. Eliminate the similar-weight crossing hoops. Tone down floor/environment lines rather than adding more effects.

First-frame contract: the server SVG shows the same prism silhouette and ring hierarchy immediately, with no orbit assembly/rotation/arrival animation. Keep it visible while Three compiles shaders and draws a complete lit frame. Reveal WebGL only after that render, without an overlapping double-artwork crossfade. Start elapsed ambient motion at zero only after preparation; no default pose drifting into position. Preserve static/reduced-motion and failure recovery. Consult Context7 for renderer warmup behavior. No new dependency.

Affected files: core-geometry.ts and its geometry tests, orbital-scene.tsx, imov-core.tsx, hero.css; change viewport readiness only if needed. Keep projection/native links, pause, focus, pointer/touch and scroll handoff. Verify cold/refresh/delayed-WebGL startup captures, desktop/mobile rendering, complete existing browser tests, lint, standalone types, production build and repository tests. Apply Ponytail, Taste and Frontend Design; 21st search was invoked and failed (`catalog search failed`), so no external component adoption. Browser plugin remains unavailable; bundled Playwright is available. No OpenDesign, deployment or unrelated work.
