# XAMI Lab Website — Design Spec (2026-09-02)

## Goal
Official website for XAMI-LAB (eXplainable Analytics for Machine Intelligence), the research
group led by Catarina Moreira at UTS. Public site hosted on GitHub Pages at
`xami-lab.github.io` (GitHub organization `XAMI-LAB`).

## Decisions (approved by Catarina)
- **Stack:** Astro static site; content in Markdown/YAML so students can contribute
  without touching code. Catarina maintains structure/design ("mix of both" maintenance).
- **Hosting:** GitHub org `XAMI-LAB`, repo `xami-lab.github.io`, deployed by a GitHub
  Actions workflow on push to `main`. Developed first in `website/` inside this repo.
- **Sections at launch:** Home, People, Research (4 theme pages), Publications,
  Talks & Videos, Tutorials. News section deferred (easy to add later).
- **Branding:** XAMI Lab @ UTS. Reuse logos and member photos from
  `example-website/public/assets`; update all QUT references to UTS.

## Content model
- `src/content/people/*.md` — one file per member: name, role, photo, email, links,
  short bio; `alumni: true` flag for past members.
- `src/content/publications/*.yaml` — grouped by year: title, authors, venue, links.
- `src/content/projects/*.md` — the four research themes ported from the old site:
  Explainable Predictive Process Analytics, Causal Models, Explainable Medical AI,
  Persuasive Models.
- `src/data/videos.yaml` — YouTube IDs/titles for Talks & Videos.
- `src/content/tutorials/*.md` — tutorials as Markdown articles.

## Pages
Home (hero + mission + theme cards + featured video), People, Research overview →
theme detail pages, Publications (grouped/filterable by year), Talks & Videos,
Tutorials. Shared navbar/footer with contact email and UTS affiliation.

## Verification
Local build + preview before publishing; deploy workflow verified with a real push
once the org repo exists. Old member/publication lists are ~2022 — Catarina to review
currency after port.
