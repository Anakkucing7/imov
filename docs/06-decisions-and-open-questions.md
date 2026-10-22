# 06 — Decisions and open questions

## Agreed

- IMOV will be rebuilt from zero; old PRD and code structure are not constraints.
- First public goal: visually memorable landing, useful platform entry, credible early investor/partner overview.
- Adaptive Premium: cinematic dark landing, light usability-first platform, cohesive design language.
- Codex is the lead implementation agent. ChatGPT/Titi can create requested custom visual assets for Codex to integrate.
- Vision remains: digital products + development services, later AI Assistant and AI Builder.
- Initially prefer free/low-cost tooling; do not consume OpenDesign paid credits.

## Provisional, must be reviewed with founder

- Tagline 'Build what's next.' and English-first messaging.
- Proposed initial audiences and order of feature rollout.
- Palette (`#0B1120`, `#F7F9FC`, `#6478FF`, `#8BE4E8`), fonts (Plus Jakarta Sans + Inter), hero artwork motif.
- Real site navigation and naming: `/explore`, `/vision`.
- Launch stage labels ('In development' vs 'Vision').

## Need answers before later milestones (not blockers for kickoff)

- Formal meaning/story of IMOV name; brand logo decision and uniqueness review.
- Domain and verified email for contact; actual investor/partner contact workflow.
- Initial market region, preferred language(s), currency and legal entity status.
- What specific first products/services will be **genuinely** available at release?
- Seller recruitment process, licensing terms, moderation, payments and legal requirements.
- Actual market validation and differentiated problem statement.
- Analytics/privacy consent plan, costs and operational capacity.

## Update protocol

Codex may add a dated Decision Log entry when a new product/design/architecture choice is made; mark it as **approved** only after the founder accepts it. Don't silently mutate strategic direction.

## 2026-10-21 — M0/M1 reversible implementation assumptions (pending visual review)

- Buyer discovery remains the initial audience; positioning and English-first copy use the proposed foundation verbatim where practical.
- Initialize manually in the existing root to preserve the kickoff kit and avoid CLI conflicts with existing files. Use current stable Next.js 16.4.2, React 19.3.1, Tailwind 4.3.3, strict TypeScript and npm; no backend.
- Retain the proposed fonts, self-hosted through Fontsource under SIL OFL. Dark marketing and light Explore share one root layout. Iris action backgrounds use dark ink for contrast.
- Original code-native modular orbital artwork represents the three planned directions; it is an illustration, not an operational interface. Taste direction `sentence-as-layout`, seed 1117194775, informs type scale. Project requirements override its photography, inline-image, full-landing and extensive-motion prescriptions: no stock images, no fake product, M1 scope, modest motion.
- Explore provides static category anchors and illustrative use-cases, not catalog inventory. Vision stages carry no dates or launch promises.
- No production domain, canonical, sitemap, contact route, analytics or environment template until there is real configuration to supply.
- Available: Ponytail, Taste, React guidance, Context7, 21st.dev tools, bundled Playwright, Chrome and Edge. Browser plugin absent; use bundled Playwright. No 21st.dev code adopted, no paid credits used, no additional plugin installed.
- M1 visual review candidate uses `#8190FF` for filled actions with dark text, retaining iris in the artwork. The text wordmark is provisional; no commissioned brand assets are implied. All body/display fonts now use preloaded local variable-font subsets through `next/font/local`.

## 2026-10-21 — M1.5 art direction (pending visual approval)

- The founder requested a more dimensional, expressive hero. [M1.5 specification](08-m1-5-imov-core.md) replaces the provisional orbital motif with IMOV CORE: three connected graphite frames for products, services and future AI.
- Existing palette, fonts, route destinations and readiness disclosures remain. Local metallic gradients and atmospheric lighting intentionally supersede the earlier flat-only interpretation of Taste.
- Native CSS/SVG handles assembly and ambient motion. One isolated client controller handles fine-pointer parallax, scroll progress, pause, reduced-motion changes and offscreen/hidden-page suspension. No animation dependency is necessary.
- CORE is explicitly concept artwork. It represents planned directions and does not imply that AI or marketplace functionality is released.

## 2026-10-21 — M1.6 orbital direction (pending visual approval)

- The founder requested the orbital system as the defining hero concept. [M1.6 specification](09-m1-6-orbital-core.md) supersedes the suspended-frame design and its no-orbits rule.
- One central nucleus, three dimensional orbital planes and three primary satellites represent Digital Products, Developer Services and Future AI. Original tokens, headline, CTA structure and all routes remain.
- Reuse the existing isolated motion controller; implement orbital movement and hover/focus responses with native SVG/CSS. No new dependency or backend is needed.

## 2026-10-22 — Orbital sculpture refinement (pending visual approval)

- [Refinement specification](10-orbital-sculpture-refinement.md): interpret the supplied Ink Orbit reference through dimensional metallic orbital bands and bounded layer response. Preserve IMOV's palette, copy, CTAs and three-domain concept.
- Reference preview informs composition only; no locked source, paid retrieval, external component or dependency is adopted. This is a reversible visual assumption, not a new logo or a released product claim.

## 2026-10-22 — M1.7 genuine 3D (pending visual approval)

- The founder supplied the Ink Orbit source for engineering study and explicitly requested genuine 3D. [M1.7 specification](11-m1-7-genuine-3d-core.md) supersedes the earlier no-WebGL preference for the hero only.
- Use compatible React Three Fiber/Three.js for an original faceted nucleus, inclined rings and three satellite links. Adapt interaction principles independently; exclude the reference's random reforge identity, particle cloud, SaaS UI and fabricated proof.
- Keep the server-rendered SVG as the static/loading/WebGL-failure experience. Existing product positioning, tokens, navigation and planned/future disclosures remain authoritative.

## 2026-10-22 — Premium energy core (pending visual approval)

- The founder rejected the equal-ring atom silhouette and small cube as visually too literal. [Premium core specification](12-premium-energy-core.md) makes a large layered metallic/glass nucleus the main object, supported by two broad open bands and three capsule guide points.
- Retain Adaptive Premium tokens, left copy, routes and tested interaction/fallback infrastructure. Reuse Three.js/Fiber without another dependency; use a local lighting environment, localized radiance and receiving shadow rather than a new effects stack.

## 2026-10-22 — Orbital scene richness (pending visual approval)

- Preserve the approved direction of the larger nucleus. [Composition refinement](13-orbital-composition-refinement.md) adds one finer third band, assigns each ecosystem waypoint its own orbit and relates the existing domain key through projected leaders. Restrained local guide arcs and a floor cue add depth without changing the left copy or introducing new effects dependencies.

## 2026-10-22 — Crystal nucleus and first-frame composition (pending visual approval)

- [Crystal and first-frame specification](14-crystal-core-and-first-frame.md) replaces the rounded module with an original elongated faceted energy prism. Keep three rings with distinct background, diagonal and lower supporting roles; preserve the existing ecosystem links and IMOV design tokens.
- The server artwork is deliberately static and composed. Warm and render Three.js before revealing it; do not animate an assembly pose or crossfade two different drawings. This supersedes the earlier SVG orbit/arrival animations.

## 2026-10-22 — Visual implementation paused; static approval required

- The founder finds the crystal-and-ring design game-like and structurally undisciplined. Preserve the working implementation in a local Git checkpoint. It is not visually approved.
- [Art-direction audit](15-orbital-core-art-direction-audit.md) records current geometry, crossings, camera, materials, motion, loading behavior and the parameters that must be locked. No further visual implementation until a static design is approved and work is explicitly resumed. No redesign, deployment or push is authorized by this audit.
