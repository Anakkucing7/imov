# First Codex task — paste into Codex

You are lead engineer and frontend design implementation partner for **IMOV Rebuild**, a NEW startup project. We are starting from zero. The old IMOV PRD/repository is NOT a source of truth.

Read `AGENTS.md` and ALL files in `/docs` first. Treat the documents as an evolving project contract. Our direction is **Adaptive Premium**: dark cinematic marketing, clean light product gateway, original branded visual, fast and accessible UX. Do not reproduce a generic AI startup template.

## Before implementing

1. Inspect repository and current app state. Verify which plugins/skills are actually accessible in THIS Codex environment (Ponytail, Frontend Design Skills/Taste, 21st.dev, Playwright/Context7). If unavailable, proceed with repo docs and built-in abilities; do not reinstall without asking.
2. Give me a compact plan: affected files, scope, decisions/assumptions, expected output and tests.
3. Check the current stable Next.js/shadcn documentation as needed, but avoid adding unnecessary dependencies.

## Implement only milestone M0 + first narrow M1 vertical slice

- Configure seed design tokens; optimize typography (Plus Jakarta Sans + Inter or an equally justified pairing).
- Build an impressive, responsive `/` hero with clear positioning: 'Build what's next.' and supporting text from `docs/02-experience-architecture.md`. A genuine, memorable composition with polished spacing, mobile hierarchy, subtle motion and CSS/SVG fallback artwork. No stock photo or fake product UI.
- Build accessible site header/footer and mobile navigation; no dead-end buttons.
- CTA **Explore IMOV** must work and lead to `/explore`; secondary CTA **Our vision** leads to `/vision`.
- Build useful `/explore` categories (Digital Products, Development Services, AI-assisted Building), clearly labeling **In development** versus **Vision**. Avoid fake prices, purchases, registration and search controls.
- Build short `/vision` with planned three-stage roadmap, honest present-state copy and no fabricated market claims.
- Prefer server components; keep client JS minimal; use semantic markup, focus-visible, responsive layout, reduced-motion and proper heading order.
- Do NOT add auth, database, payment, marketplace CRUD, AI endpoints, fake testimonials, paid tools, or deployment in this task.

## Validate

Run lint, `npx tsc --noEmit`, and production build. If browser testing is available, test main CTA, menu, keyboard and viewport sizes 375, 768 and 1440; otherwise report which manual checks are still required. Do not say tests pass without logs.

## When finished

Give me: (a) files changed, (b) what is fully working versus demo/vision, (c) exact test outputs, (d) unresolved blockers, (e) 2–3 screenshot-ready routes, and (f) a short, precise **image asset brief** for Titi to generate later (hero ratio, transparent/opaque, negative-space region, palette, subjects, approximate dimensions). Stop after M1, wait for my visual review. Don't automatically start the next milestone.
