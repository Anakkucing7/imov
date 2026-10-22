# 02 — Experience architecture and initial copy

## Core journey

Marketing `/` → click **Explore IMOV** → useful `/explore` → choose **Digital Products**, **Development Services** or **AI Vision** → view an honest preview, and learn what's available vs planned.

Alternative: potential partner on `/` → **Our Vision** → `/vision` → verified contact route when configured. No fake working contact form.

## Sitemap

| Route | Purpose | Milestone |
|---|---|---|
| `/` | Brand story, value proposition and main conversion | Vertical slice 1 |
| `/explore` | Entry to ecosystem; honest category previews | Vertical slice 1 |
| `/vision` | Narrative about direction and roadmap | Vertical slice 1 |
| `/contact` | Contact channel, only when email and handling process are verified | Later |
| `/marketplace` | Real listings/discovery after inventory and data exist | Later |
| `/services` | Real service offerings after supply & process exist | Later |
| `/sell` | Seller onboarding | Later |
| `/app/*` | Accounts / transactions / dashboards | Later |

Do not create clickable `/marketplace` or `/services` routes that imply a working product before one exists. On `/explore`, preview categories can be in-page anchors with explicit planned-state labels.

## Proposed home page sections

1. **Navbar:** small wordmark `imov`; Explore, Vision; primary CTA `Explore IMOV`. Keep sticky behavior understated and accessible.
2. **Hero:** one standout typographic composition with distinct hero artwork/visual system, not a stack of random floating cards. Headline: **Build what's next.** Body: **Discover digital products, connect with developers, and bring your next idea to life.** Main CTA `Explore IMOV` → `/explore`; secondary CTA `Our vision` → `/vision`.
3. **Problem bridge:** Headline **Less searching. More building.** Explain that finding the right software and collaborators shouldn't feel fragmented. Phrase as mission, not proven result.
4. **Ecosystem three-part story:** Digital Products — Planned; Development Services — Planned; AI-assisted Creation — Future vision. Use editorial layouts, no fake storefront stats.
5. **Experience teaser:** A real, clearly labeled *concept interface* (not a functional storefront claim). Can be a lightweight browser-like composition or CSS illustration.
6. **Why we're building IMOV:** clear founder-mission content, specific but transparent.
7. **Closing CTA:** **Explore the idea. See what's next.** → `/explore` and `/vision`.
8. **Footer:** IMOV, short descriptor, navigation, copyright with correct date. Don't invent company registration, social handles, address, or contact email.

## `/explore` — functional gateway

- Header: **Your next project starts here.**
- Subhead: **Explore the directions we're building into the IMOV ecosystem.**
- Present three category cards/areas with honest labels: **Digital Products (In development)**, **Development Services (In development)**, **AI-assisted Building (Vision)**.
- Each area includes what the category will solve, example use-cases explicitly labeled *illustrative*, and a clear CTA to `/vision` or on-page detail section.
- Do not add a search box that cannot search, a cart that cannot buy, price tags that imply products exist, or a nonworking sign-up action.

## `/vision`

Tell the development direction in 3 stages: (1) discovery and digital commerce foundation, (2) services and creator workflows, (3) AI assistance and building capabilities. Describe as aspirations subject to validation. A brief note explaining the product is in early development can improve credibility.

## UI states and interactions

- Header links and CTA must navigate somewhere real.
- Mobile navigation accessible via keyboard with a labeled open/close control and Escape behavior when applicable.
- Clear hover/focus/active, loading or pressed states when necessary.
- Smooth scrolling only for in-page navigation and only when reduced-motion is not requested.
- No confusing intermediate transition page between hero and useful `/explore` content.

## Tone and language

- English-first marketing copy, crisp and human; designed to remain understandable to an Indonesian audience and expand to localization later.
- No hype phrases like 'the world's #1' or 'trusted by thousands'.
- Prefer confident direct statements explaining real intent.
- Sample microcopy: **From an idea to a real project.** / **Products, people, possibility.**

## Later: trustworthy investor inquiry

When a verifiable IMOV email/domain exists, implement `/contact` with clear recipient, privacy notice, and either a real validated form with abuse protection or a tested mailto link. Until then, don't ship an investor-contact CTA that dead-ends.
