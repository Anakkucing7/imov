# 04 — Engineering blueprint

## Technology decisions for initial release

- Next.js App Router + TypeScript + Tailwind CSS (current mutually compatible stable versions at initialization time).
- ESLint, TypeScript strict checks, npm for package management initially.
- `next/font`/optimized fonts where supported, semantic HTML, `next/image` for local raster assets if appropriate.
- shadcn/ui only for actual product controls when justified; 21st.dev for selective inspiration/components.
- Motion library only if CSS animation is insufficient and after assessing bundle impact.
- Deployment target: Vercel when founder approves publishing. GitHub repository after local baseline is validated.
- Supabase reserved for later auth/content/contact workflows; no credentials or database required for first slice.

## Maintainable structure (proposed)

```text
src/
  app/
    layout.tsx
    globals.css
    (marketing)/
      page.tsx               # /
      explore/page.tsx       # /explore
      vision/page.tsx        # /vision
  components/
    brand/
      wordmark.tsx
    marketing/
      site-header.tsx
      hero.tsx
      ecosystem.tsx
      footer.tsx
    ui/                    # only needed shared primitives
  lib/
    site.ts                # navigation, metadata/content only as warranted
public/
  assets/                  # vetted local visuals
```

Route groups are not part of URL paths. Keep one top-level root layout to avoid unnecessary full-page reloads across the marketing/product boundary. Avoid overnesting folders for 3 routes.

## Behavior and content policy

- `/` should render mostly statically, no unnecessary client-side hydration.
- `/explore` must provide useful navigable content with no false storefront functionality.
- `/vision` must separate present capability from planned/vision.
- Content may be in small typed constants or local data objects; no database until required.
- Add app metadata, OG defaults, canonical URLs only when domain is known, sitemap when production host finalized.
- Keep `.env*` secrets out of git; provide `.env.example` for future integrations only.

## Testing / quality gates

For each slice run:

1. `npm run lint` (ESLint configured correctly).
2. `npx tsc --noEmit` (type errors = blocker).
3. `npm run build` (production must compile).
4. Playwright functional tests if tooling available: home renders, primary CTA reaches `/explore`, vision navigation works, mobile menu reachable by keyboard, no dead links.
5. Manual review viewport 375×812, 768×1024 and 1440×900; check focus, overflow, readability, reduced motion, desktop contrast.

Accessibility target: WCAG 2.2 AA practices, without claiming certification from an automated checker alone. Mobile performance target: strong Lighthouse audits; Web Vitals field thresholds after sufficient real traffic: LCP <=2.5s, INP <=200ms, CLS <=0.1 at p75. Lab runs are diagnostic, not field-validation proof.

## Security and operational boundaries

- No passwords or credentials in prompts, screenshots, repos, build artifacts, or code.
- Do not deploy automatically or buy integrations.
- When real contact forms arrive: server validation, rate limiting/anti-spam, privacy and retention approach before collection.
- When marketplace arrives: secure authorization, licensing model, file scanning/download controls, payments/settlement/disputes and seller moderation must be intentionally designed and tested.
- Avoid adding analytics that requires consent decisions until privacy requirements and events are agreed.

## Plugin orchestration

- **Codex:** implementing and testing.
- **Ponytail:** simplicity/YAGNI, not a substitute for security tests.
- **Taste/Frontend Design Skills:** one cohesive creative direction; `docs/03-creative-direction.md` overrides contradictory style output.
- **21st.dev:** vetted reusable pieces, not an assortment of mismatched templates.
- **Playwright:** tests and visual verification, when available.
- **Context7:** latest docs only when available/needed; official docs remain reliable fallback.
- **OpenDesign:** disabled/not required.

Before using, verify which integrations actually exist in the Codex environment; do not claim they are installed based on unrelated app screenshots.
