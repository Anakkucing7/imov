# 03 — Adaptive Premium visual system

## Creative premise

**Editorial technology, not generic SaaS.** Marketing should create a memorable first impression while the product UI stays lucid under repeated use.

- Marketing: midnight atmosphere, oversized confident typography, disciplined accents, spacious pacing, modest immersive motion.
- Product: cloud/light surface, clear controls and discoverability; dark mode may be added when the UI is mature.
- Brand mark is **not final**. Use an elegant text wordmark `imov` initially; do not generate an arbitrary complex logo.

## Initial tokens (proposal, subject to visual review)

| Token | Value | Application |
|---|---|---|
| `--imov-ink` | `#0B1120` | Marketing background |
| `--imov-cloud` | `#F7F9FC` | Light application background |
| `--imov-iris` | `#6478FF` | Accent, CTAs (validate text contrast) |
| `--imov-cyan` | `#8BE4E8` | Rare visual highlights |
| `--imov-slate` | `#64748B` | Muted text only on suitable backgrounds |
| `--imov-white` | `#FFFFFF` | Elevated surfaces / light on dark |

This is a seed palette. Adjust pairings for WCAG contrast rather than treating every color as safe for body text or buttons. Avoid cyan-on-white for small text.

## Typography

- Proposed heading/display: **Plus Jakarta Sans**. UI/body: **Inter**. Load responsibly (Next font optimization or self-hosted approved sources).
- Hero: responsive `clamp()` target ≈ 52–92px depending on viewport; optimize for two or three readable lines.
- Body copy: usually 16–18px, generous line-height, manageable measures (~60–70 characters).
- Consistent font weights rather than indiscriminate bold everywhere.

## Spatial and component rules

- Coherent spacing scale and 12-column desktop grid / 4-column mobile layout as useful, not religious constraints.
- Rhythm: deliberate contrast between quiet and dense sections; generous whitespace.
- Buttons: 44px or larger interactive target where possible, distinct keyboard focus and touch-friendly spacing.
- Cards: reserved for genuinely comparable products/choices; use typographic layouts for storytelling.
- Corner radii: purposeful, not everything rounded to the maximum.
- Strong visual hierarchy and accessible color contrasts.

## Hero visual art direction

Primary idea: **an abstract modular 'digital constellation' or structured orbital system**, visually suggesting products + people + future AI becoming one ecosystem. It should be a singular memorable design element with controlled violet/iris and very faint ice-cyan highlights. Not stock photography, unrelated 3D blobs or copied competitor screenshots.

### Asset production workflow

The founder may commission/generate images with Titi (ChatGPT) separately. Codex should first build a good layout with a CSS/SVG fallback. When assets arrive, integrate local optimized files; avoid hotlinking unrelated images.

Asset briefs to request later:

1. Hero key visual — 16:9 or wider, dark-compatible, no embedded slogans/text; reserve left-side negative space for headline when needed.
2. Ecosystem illustration — modular relationship among products, developers and assisted workflows; scalable/panel-friendly 4:3.
3. Optional teaser background — subtle abstract texture, seamless/no visible watermarks; ensure not dominant.
4. Social card/OG image — 1200×630, brand consistent, explicit title applied separately if image generation text quality is insufficient.

Always check generated assets for unwanted logos, fake UI/brand names, and intellectual property conflicts.

## Motion and sensory quality

- Entrance animation: restrained opacity/position reveals, short durations (roughly 180–600ms context-dependent).
- Hover microinteractions: 120–220ms; never require hover to discover functions.
- Avoid continuous expensive parallax and WebGL in v1. Use CSS/SVG or optimized lightweight assets.
- Honor `prefers-reduced-motion`; do not hide essential information behind animation.
- Aim for stable layout and clear input states.

## Responsive design

Design at 360–390px width **first**, then 768px, 1024px, 1440px and 1920px. Test real content: headlines, menu labels, touch targets and long-copy wrapping. No horizontal overflow and no critical artwork obscuring CTA.

## Component acceptance

Any 21st.dev/shadcn component must match IMOV tokens, work on mobile, preserve semantic structure, and avoid unnecessary dependencies. If a component conflicts with accessibility or performance, write a smaller native implementation.

## Don't do

- Dashboard screenshots that falsely represent live product functionality.
- Generic '3 animated cards + 4 glowing orbs' as entire art direction.
- Forced scroll-snapping, gimmicky cursors, autoplay videos with sound, heavy animation libraries for simple fades.
- Inconsistent theme mixing, tiny gray-on-gray text, invisible focus rings.
