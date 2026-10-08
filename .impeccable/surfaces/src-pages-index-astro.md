---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# CV page (`/`, also printed from the browser to PDF)

Mode: Read. Audience: recruiters, hiring managers, engineers judging a Korean backend engineer on screen or on A4 paper. Job: find companies, roles, periods in seconds, then read matching achievements. Content: verbatim migration of the old `_config.yml`, owned by `src/data/cv.yaml`. Constraints: Korean only, the browser's print of the page identical to the web page (no separately generated PDF), no photo/icons/decorative fills.

## Direction contract

THESIS: An editorial spread, not a web résumé template. The CV is set like a magazine feature on warm paper: a masthead with a giant serif name and a pull-quote headline, newspaper double rules over each section, and an editorial grid whose margin column carries periods and links. It refuses the sidebar-with-skill-bars and the card grid; ornament stays typographic.

OWN-WORLD: Warm paper (#faf6ee) and a warm ink ladder (ink / secondary / muted) with one brick accent (#9c3b25) for the quote mark, drop cap, timeline dots, list dashes, Skills slashes, and margin-note links. MaruBuri (serif) carries identity: name, pull-quote, section titles, entry names, margin headings, decks. Pretendard (sans) carries the record. In-page cross-references such as [Buzzvil] stay muted so the repeated wayfinding doesn't read as noise.

STORY: The reader meets a person through a quoted sentence and a short lead, follows the career down a timeline of companies, then reads what he fixed and how big the systems were.

FIRST VIEWPORT: The folio rule (email left, profiles right), the 58pt name, the pull-quote headline between a heavy and a light rule, the one-column lead with a brick drop cap, then the 경력 double rule and AB180 on the timeline (period in the margin, dot on the spine, serif name, role line, serif deck, bullets).

FORM: Owner-chosen variant E "에디토리얼 매거진" (2026-10-08). It replaced the earlier plain "Typeset Dossier" version, which the owner found too simple. Polish passes keep the direction intact.

FINISH: unreviewed and undocumented is unfinished; this build ends with rendered checks of desktop 1440, mobile 390, and every page of the browser's print (Save as PDF), plus DESIGN.md and design.json regenerated from the final CSS.

## Unresolved

- Stale facts (AB180 "현재") stay until the owner edits the data file.
