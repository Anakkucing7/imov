# M1.7: genuine 3D Orbital Core

2026-10-22. Visual direction pending approval. No separate M1.7 checklist exists in this checkout; the founder confirmed using the existing requirements plus the current request.

## Reference engineering study

Read the supplied complete Ink Orbit source before implementation. Its buildCloud uses a seeded PRNG, 3–4 irregular loops sampled in random orthogonal planes, bowed bridges, arc-length resampling to 2,800 tube samples, 16,000 grains and 16 spikes. Stable array counts enable grain-for-grain interpolation between seeds with a 1.3-second cubic ease. The canvas renderer manually projects yaw/pitch and perspective, bins depth into seven passes, and simulates a refractive sphere by redrawing a canvas crop.

Pointer capture keeps dragging active outside the canvas. Pixel deltas update yaw/pitch and release velocity, then exponential damping returns the sculpture to idle spin. Pointer lean has a separate eased target. The loop caps delta at 50ms, uses mutable refs rather than React state per frame, skips painting when static/offscreen, and disconnects observers/listeners on teardown. However its requestAnimationFrame still schedules while offscreen; IMOV will stop continuous rendering entirely when hidden, paused or offscreen. Cancellation will never activate a satellite.

Adapt those interaction principles independently, not its source component. Do not use its random sculpture, grain, spikes, reforge timer, seed HUD, SaaS copy, font styling, proof row or dialog. Do not morph IMOV into random shapes. Use bounded interpolation for entry, pointer lean, hover emphasis and scroll expansion while keeping topology recognizable.

## Art and interaction specification

Keep midnight #0B1120, iris #6478FF, cyan #8BE4E8, action #8190FF, cloud #F7F9FC, Jakarta display and Inter UI. Preserve left headline/CTAs, domain labels, navigation, truthful planned/future copy and the immediate next section. One chamfered graphite nucleus sits inside three independently rotating, inclined metal rings. Real depth tests, perspective, directional lighting and physically based materials replace simulated SVG clipping in the enhanced view. A small locally generated studio environment supplies metallic reflections, and a local canvas texture renders the existing wordmark. No particles, bloom pipeline, downloaded textures/environments or extra UI. The static SVG uses the same geometric hub concept.

Use React Three Fiber 9.8.2 with Three.js 0.186.1; registry peer ranges support React >=19 <19.4, including this app's 19.3.1. Add only these runtime packages and matching Three type declarations. This explicit request supersedes the earlier no-WebGL/no-dependency preference for this hero.

- Slow orbital periods remain approximately 56/72/92 seconds with distinct inclinations and phases; one turns in reverse. Nucleus illumination breathes gently.
- Fine-pointer dragging rotates the complete system with bounded pitch and release inertia. Pointer lean remains smaller than direct dragging. Arrow keys rotate when the 3D viewport has focus; Home resets the view. No random reforge or click-to-morph behavior.
- Three 44px native satellite links track their real 3D positions. Hover/focus emphasizes their corresponding ring and reveals the existing HTML descriptor. Satellites and domain labels navigate to the same existing Explore anchors. Native links provide keyboard and touch equivalents to the visual nodes. No per-frame React state updates.
- Preserve scroll expansion/nucleus recession and the existing next-section seam. No scroll interception or pinning. Mobile retains vertical page scrolling; dragging is optional and restricted to fine pointers.
- Reuse the current motion controller through a small shared context. Pause freezes both CSS and WebGL motion; hidden/offscreen uses demand rendering. Cap DPR at 1.5, use modest fixed geometry, lazy-load the renderer only for the hero, dispose resources on unmount.
- Server-rendered SVG remains visible during loading, without JavaScript, under reduced motion, or after WebGL failure/context loss. Never leave an empty canvas or hide navigation. Live reduced-motion changes remove the enhanced view and reset movement. Keep all descriptors visible in the static experience.

## Files and acceptance

Change core-motion.tsx (shared motion state), imov-core.tsx (progressive-enhancement slot and domain metadata), new orbital-viewport.tsx and orbital-scene.tsx (isolated client renderer), hero.css (scoped viewport/focus/fallback states), package files, reference-independent motion math with tests, this spec and decision log. Preserve all existing routes and server-rendered copy. No backend, deployment or unrelated pages.

Verify lint, standalone types, build, available HTTP/unit tests; production browser checks for desktop/mobile overflow at 360/375/768/1024/1440/1920, genuine rendered 3D, drag/inertia/cancel/reset/keyboard, independent orbit movement, satellite/category/CTA navigation, pause/resume, scroll, hidden/offscreen suspension, live reduced motion, no JavaScript and forced WebGL failure/context loss. Capture desktop/mobile screenshots and stop for visual review.

## Tools

Ponytail, Taste, Frontend Design and React guidance apply; existing Adaptive Premium direction overrides generic photography/flat-colour/extensive-motion prescriptions. 21st.dev catalog search was actually attempted and failed; the supplied source is the engineering reference, with no paid retrieval required. Context7 verified React compatibility, demand rendering and Canvas fallback/error boundaries. Browser plugin absent; bundled Playwright/Chrome is the test fallback. OpenDesign remains prohibited.

## Implementation and verification record

- Original implementation: chamfered ExtrudeGeometry nucleus carrying the existing wordmark, three inclined torus groups, three projected native satellite links, real depth tests and PBR lighting. The supplied component, point cloud, seed generator, seven-pass projection, random morphing, copy and demo UI were not imported. Source ideas adapted independently: pointer capture, separate lean/drag pose, bounded release velocity, time-based damping, and eased transforms instead of identity-changing morphs.
- One client motion context shares pause, visibility, pointer and scroll state with the lazy renderer. Continuous frames stop when paused, offscreen or hidden. A focused satellite remains visible even when geometrically behind the hub. All server-rendered copy/routes/CTAs and Adaptive Premium tokens remain.
- `npm run lint`: exit 0, no warnings. `npm run typecheck`: exit 0. `npm run build`: exit 0; home, Explore and Vision remain statically generated. `TEST_BASE_URL=http://localhost:3005 npm test`: exit 0, 7 passed / 0 failed (5 existing HTTP checks plus 2 independent motion-math tests). Node prints a non-blocking module-type detection warning for the direct TypeScript test import; module configuration was not changed for this warning.
- Bundled Playwright/Chrome production suite: 12 route/viewport layout checks and 7 interaction groups. Tests cover actual WebGL draw calls, all three moving satellite projections, drag/release/cancel, keyboard/reset, focused-link descriptors/navigation, pause/resume, scroll handoff, offscreen suspension, simulated document-hidden event, live reduced-motion recovery, mobile menu/touch satellite navigation, static no-JavaScript/CTA, forced WebGL creation failure/CTA and context-loss fallback. Homepage widths: 360/375/768/1024/1440/1920. The final 13px hint also received a six-width layout recheck.
- Loading check: no large 3D chunk on a fresh Explore or reduced-motion visit. Enhanced home loads a 923,503-byte decoded / 244,401-byte compressed renderer chunk on this local production server. These are transfer measurements, not field performance or Lighthouse results. DPR is capped at 1.5; no external model/texture/environment download is required.
- Taste rendered inspector with documented IMOV exceptions: exit 0, 0 failures and 1 warning for the existing 12-size responsive type system. Its small-text warning was fixed by making the interaction hint 13px. The static Taste source scan exits 1 with 7 flags on retained atmospheric gradients, interaction shadows and category hairlines; these are the same intentional design-system exceptions from the prior milestone, not ESLint failures. Desktop/tablet/mobile screenshots were inspected, including static and failed-WebGL views.
- `npm audit --omit=dev --json`: exit 0, zero production advisories. Full `npm audit --json`: exit 1, five high development-tool findings in the existing eslint-config-next → fast-glob → micromatch → braces chain. No forced major downgrade or unrelated audit fix applied. Installation also reports existing ESLint 10 peer-range warnings.

### Issues found and resolved during QA

- A second dev server could not start because the existing project server already ran on port 3000; reused it and tested a separate production server at port 3005.
- An initial unused import and the graphics scene's React immutability lint diagnostic were resolved. Three.js owns mutable scene state; a narrowly scoped, explained exception permits environment attachment/disposal inside its effect.
- Live reduced-motion recovery initially failed because the WebGL-loss listener survived normal renderer teardown. Moved it into an effect with cleanup; preference changes now recover and genuine context loss restores the SVG.
- The mobile test initially waited for a moving satellite to become stationary. It now scrolls the stable viewport and performs a real tap at the current projected target.
- Exact encoded-PNG equality was not a valid paused-frame check: a decoded probe found compositor differences of at most 2/255 per channel despite zero GPU draw calls. The browser check now verifies frozen GPU draw count, identical satellite positions and decoded pixels with a strict 2/255 tolerance. No application animation was disabled to satisfy the test.
- The first art pass read as a blue wireframe polyhedron; replaced it with the chamfered graphite hub and generated studio reflections. Corrected mobile hint spacing and aligned static SVG cube faces after screenshot review.

### Remaining limitations and review boundary

Fiber 9.8.2 emits Three.js's Clock deprecation warning with Three 0.186.1. Headless software rendering also logs shader precision warnings; the intentional context-loss scenario can log an unsupported lose-context warning during disposal. These are reported, not suppressed. Forced unsupported-WebGL testing intentionally exercises caught renderer errors. Normal production flows have no application console/runtime/resource errors.

Safari/Firefox, physical touch devices, real background-tab lifecycle and field/Lighthouse performance remain unverified; document-hidden behavior was simulated in addition to real offscreen testing. The development audit findings and upstream warnings remain. No backend, deployment, paid tool, plugin installation or OpenDesign use. Stop for founder visual review.
