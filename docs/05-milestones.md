# 05 — Integrated milestones: product × design × engineering

These are **milestone dependency stages**, not fixed calendar promises. Each stage ends with product/design/engineering review and a tangible output.

| Step | Product decision | Creative deliverable | Engineering deliverable | Exit criteria |
|---|---|---|---|---|
| M0 Foundation | Confirm first audience + positioning hypothesis | Palette, type, hero direction | New repo, Next scaffold, AGENTS/docs, lint/build | Clean build, no legacy imports, decisions documented |
| M1 First vertical slice | Primary `/` → `/explore` journey | Original polished hero + ecosystem composition | `/`, `/explore`, `/vision`, working links | Mobile/desktop usable, truthful copy, lint/type/build/tests pass |
| M2 Full landing | Story arc, audience objections, CTA narrative | Refined scroll composition, responsive art | All home sections and metadata | Consistent design, no fake metrics, tested interactions |
| M3 Explore gateway | Categories and future-state clarity | Usable discovery patterns | Functional content navigation, realistic preview | No dead ends, obvious status labels |
| M4 Public-readiness | Verified brand/contact and accurate roadmap | OG card, brand assets, refined motion | SEO, privacy checks, monitoring/analytics if approved, deployment | Public URL, validated links and disclosures |
| M5 Marketplace MVP (later) | Licensing, catalog model, seller operations | Marketplace UX and transaction states | Real auth, DB, security, payments as agreed | End-to-end business flow validated |

## Immediate first sprint — **M0 + a narrow M1 slice**

Codex should:

1. Inspect a fresh Next.js project and verify current dependencies/scripts.
2. Honor `AGENTS.md`; summarize assumptions and plan.
3. Implement theme tokens, optimized fonts, root metadata, and accessible header/footer.
4. Build one **strong, distinctive** homepage hero with CSS/SVG visual fallback — not stock imagery and not a claim of a live product.
5. Create meaningful `/explore` and `/vision` with clear development-state labeling.
6. Wire CTAs and responsive mobile nav; minimize client JS.
7. Run lint/type/build and browser smoke tests where available; report results.
8. List assets that could be created by Titi, including layout, cropping and intended dimensions.

## Explicitly defer

Auth, payments, real inventory, seller dashboard, notifications, AI integration, Supabase, elaborate CMS, localization implementation, paid plugins, analytics before policy choice, and a full marketplace frontend.

## Acceptance checklist for M1

- [ ] On first screen user knows IMOV's purpose and sees one unambiguous primary CTA.
- [ ] CTA enters `/explore` without forced registration.
- [ ] All visible links resolve to meaningful destinations.
- [ ] 'In development' and 'Vision' states are visibly distinguished from real available features.
- [ ] No invented clients/testimonials/transactions/product counts or misleading AI promises.
- [ ] Mobile nav works by touch + keyboard with visible focus.
- [ ] Responsive views at 375, 768 and 1440 px have no unintended overflow.
- [ ] Screen reader landmarks, alt text, contrast and motion preferences reviewed.
- [ ] Typecheck, lint and production build succeed; failures documented if not.
- [ ] Founder approves visual direction before expanding the whole landing.

## Future measurement, not fake achievements

- CTA clicks `/` → `/explore` and follow-on engagement measured only after analytics and privacy are configured.
- Usability feedback from test participants, not fictional conversion rates.
- Performance and Core Web Vitals field assessment after deployment/traffic.
