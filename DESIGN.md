---
name: 유병훈 — 이력서 (cv.bhyoo.com)
description: Editorial — a magazine spread on warm A4 paper. A giant serif name, a pull-quote headline, double-ruled section heads, a margin column for periods and links, and one brick accent; web and PDF are the same document.
colors:
  ink: "#221d18"
  ink-secondary: "#4a433b"
  ink-muted: "#6b6157"
  rule: "#d8cdbd"
  rule-strong: "#b9aa95"
  paper: "#faf6ee"
  ground: "#e7dfd0"
  accent: "#9c3b25"
  accent-line: "#d9a593"
  accent-tint: "#f3e1d5"
typography:
  name:
    fontFamily: "MaruBuri, serif"
    fontSize: "58pt"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.04em"
  quote:
    fontFamily: "MaruBuri, serif"
    fontSize: "24pt"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  section:
    fontFamily: "MaruBuri, serif"
    fontSize: "21pt"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.01em"
  entry:
    fontFamily: "MaruBuri, serif"
    fontSize: "16pt"
    fontWeight: 700
    lineHeight: 1.3
  aside:
    fontFamily: "MaruBuri, serif"
    fontSize: "11.5pt"
    fontWeight: 600
    lineHeight: 1.4
  deck:
    fontFamily: "MaruBuri, serif"
    fontSize: "11pt"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "10pt"
    fontWeight: 400
    lineHeight: 1.65
  meta:
    fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "9.5pt"
    fontWeight: 400
    lineHeight: 1.3
  caption:
    fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "9pt"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.02em"
rounded:
  focus-ring: "2px"
  mark: "2px"
spacing:
  space-1: "0.25rem"
  space-2: "0.5rem"
  space-3: "0.75rem"
  space-4: "1.125rem"
  space-5: "1.5rem"
  space-6: "2.5rem"
  space-7: "3.25rem"
components:
  link:
    textColor: "inherit"
  link-margin-note:
    textColor: "{colors.accent}"
  link-cross-reference:
    textColor: "{colors.ink-muted}"
  mark:
    backgroundColor: "{colors.accent-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.mark}"
    padding: "0 0.2em"
  sheet:
    backgroundColor: "{colors.paper}"
    width: "210mm"
    padding: "15mm 16mm 16mm"
---

# Design System: 유병훈 — 이력서

## Overview

**Creative North Star: "The Editorial Spread"**

A single-page Korean CV laid out like a magazine feature. The masthead does the talking: a folio rule with contacts, the name set huge in MaruBuri, then the one-line headline as a pull-quote hung on a brick quotation mark between a heavy and a light rule. A short lead paragraph opens with a brick drop cap. Each section then opens under a newspaper double rule, and every entry sits on an editorial grid: a 31 mm margin column for periods, margin-note links, or a short heading, and the text column for the story.

It is still a document, not an app. There are no photos, icons, cards, skill bars, or decorative fills. The ornaments are typographic: the quote mark, the drop cap, the double rules, timeline dots, and short brick dashes as list markers. The same warm sheet is the screen page and the printed page.

The owner chose this direction (variant E) on 2026-10-08 over the earlier plain "Typeset Dossier" version, which he found too simple.

**Key Characteristics:**

- One A4 sheet in warm paper (#faf6ee). Screen padding equals the `@page` margins, so web and PDF share the same 178 mm content box.
- Two families. MaruBuri (serif) sets the name, pull-quote, section titles, entry names, margin headings, and summary decks. Pretendard (sans) sets everything else.
- Every type size is in `pt`, so screen and print share physical sizes.
- Warm ink ladder plus a single brick accent (#9c3b25), used for the quote mark, drop cap, timeline dots, list dashes, Skills separators, and margin-note links.

## Colors

All ratios are measured against paper (#faf6ee).

### Primary

- **Brick** (#9c3b25, 6.35:1): the only accent. Used for the pull-quote mark, about drop cap, timeline dots, top-level list dashes, Skills `/` separators, margin-note links (`blog`, `repository`, `PR`), and hover and focus states.

### Neutral

- **Ink** (#221d18, 15.50:1): name, headline, section and entry titles, body bullets, role names, period start.
- **Secondary Ink** (#4a433b, 9.03:1): about lead, entry summary decks, nested list items, contacts.
- **Muted Ink** (#6b6157, 5.61:1): period end, URL labels, section intro, nested list dashes, in-page cross-reference links.
- **Rule** (#d8cdbd, 1.46:1): hairlines between undated entries and the faint underline of cross-reference links. Decorative only; never carries text.
- **Rule Strong** (#b9aa95, 2.11:1): timeline spine. Decorative only.
- **Accent Line** (#d9a593, 2.00:1): underline colour for content links. Decorative only.
- **Accent Tint** (#f3e1d5; ink on it 13.16:1): `<mark>` highlight and text selection.
- **Ground** (#e7dfd0): screen-only desk behind the sheet. It disappears below 40rem and in print.

### Named Rules

**The One Accent Rule.** Brick is the only chromatic colour. Hierarchy otherwise comes from the ink ladder (ink → secondary → muted), never from new hues.

**The Contrast Floor Rule.** Every text colour is at least 4.5:1 on paper. Rule, rule-strong, and accent-line are for lines only.

## Typography

**Display font:** MaruBuri (Korean serif, self-hosted woff2, weights 300/400/600/700). Used at 400, 600, and 700.
**Body font:** Pretendard Variable (Korean sans, self-hosted dynamic subset), with fallback `Pretendard, system-ui, sans-serif`.

### Hierarchy

| Role | Family | Size | Weight | Line height | Use |
|---|---|---|---|---|---|
| Name | MaruBuri | 58pt (40pt ≤40rem) | 700 | 1 | masthead name, +0.04em tracking |
| Quote | MaruBuri | 24pt (15pt ≤40rem) | 400 | 1.35 | headline pull-quote, `text-wrap: balance` |
| Section | MaruBuri | 21pt (18pt ≤40rem) | 700 | 1.2 | section titles |
| Entry | MaruBuri | 16pt | 700 | 1.3 | company, school, project names |
| Aside | MaruBuri | 11.5pt | 600 | 1.4 | margin headings in titled entries |
| Deck | MaruBuri | 11pt | 400 | 1.5 | entry summaries, secondary ink |
| Body | Pretendard | 10pt | 400 (strong 600) | 1.65 | bullets, paragraphs; about lead at 1.75 |
| Meta | Pretendard | 9.5pt | 400/600 | 1.3–1.6 | role line, periods, margin links, section intro |
| Caption | Pretendard | 9pt | 400 | 1.3 | folio contacts, +0.02em tracking |

Ornamental sizes: the pull-quote mark is 72pt (38pt ≤40rem) MaruBuri 700 in brick, and the drop cap is 3.4em MaruBuri 700 in brick.

### Named Rules

**The pt-Only Rule.** Every font size is in `pt`, never `px` or `rem`, so a point on screen and a point in the PDF are the same size.

**The Keep-All Rule.** `word-break: keep-all` and `hanging-punctuation: first allow-end` control Korean line breaking. Prose uses `text-wrap: pretty`, and the headline uses `balance`. A `<mark>` phrase never wraps (`white-space: nowrap`).

## Layout

The `.sheet` is 210 mm wide (`max-width: 100%`), with screen padding of 15 / 16 / 16 mm (top / sides / bottom) to match the `@page` margins. That leaves a 178 mm content box. On screen the sheet sits on the ground with `2.5rem` / `3.25rem` vertical margins.

**Editorial grid.** Every entry is a two-column grid: `--aside` (31 mm) margin column, `--gutter` (10 mm), then the text column (`minmax(0, 1fr)`).

**Measure.** The about lead is one column capped at `--measure` (128 mm), left-aligned under the pull-quote. Two newspaper columns were dropped because they split Korean phrases and broke sentences mid-thought.

**Spacing scale:** 0.25 / 0.5 / 0.75 / 1.125 / 1.5 / 2.5 / 3.25 rem (`space-1`…`space-7`). Sections open `space-7` apart. Masthead blocks are 6–7 mm apart. Entries in timeline sections are 7 mm apart; undated entries are separated by 5 mm + a 0.5pt rule + 5 mm. List items are `space-1` apart.

**Responsive (≤40rem):** the desk disappears and the sheet pads `1.5rem × 1.125rem`. Contacts left-align with the email on its own row. Name, quote, and section titles step down. The entry grid stacks into one column, periods run inline ("2022.10 ~ 현재"), margin links become a row, and the timeline spine moves to the left edge. There is no horizontal overflow at 390 px.

## Print & Parity

The PDF is the browser's print of the page (Ctrl/Cmd+P → Save as PDF); no PDF is generated or published. Every rule below lives in `@page` or `@media print`, so the screen is untouched. Print keeps the screen's fonts, sizes, colours, and layout. It changes only the page margins, the page background, and pagination, and each engine gets the best result it can actually print, verified with each engine's default dialog settings:

| Engine | Margins | Paper | Browser header/footer |
|---|---|---|---|
| Chrome, Firefox (`@supports (box-decoration-break: clone)`) | `@page { margin: 0 }`; `.sheet` pads 15 / 16 / 16 mm with `box-decoration-break: clone`, so every page gets them | Full-bleed #faf6ee from a fixed `body::before` layer, which repeats on every page, including below the content on the last page | None: a zero page margin leaves them no room |
| Safari / WebKit (no block `clone`) | `@page { margin: 15mm 16mm 16mm }` | White (`--paper: #fff`). WebKit ignores `@page { background }` and clips painting in the page margins, so a tone would print as a cream rectangle in a white frame | Safari's own, inside the white margin, never over content. Turned off only by the dialog's "Print headers and footers" |

- `html { print-color-adjust: exact }` prints the paper tone, `<mark>` highlights, and timeline dots even when "Background graphics" is off.
- Empty `@top-left` / `@bottom-left` margin boxes suppress Chromium's header/footer whenever page margins are non-zero.
- WebKit lays a printed page out at 1.25× its point width, so a CSS px prints as 0.8 pt. `html { zoom: 0.9375 }` (WebKit only, detected by `hanging-punctuation`) brings pt sizes back to true size. Line heights round to whole px there, about 3 % tighter.
- `body { hanging-punctuation: none }` in print: WebKit otherwise hangs a leading `[` or the headline quote mark out into the marker gap or the margin.
- Pagination uses only mechanisms all three engines honour, since Gecko and WebKit ignore `break-before/after: avoid`:
  - Entries print as blocks instead of a grid, because Gecko never splits a grid item. The margin column is an in-flow box as tall as the entry's opening (`--entry-keep`: 42 mm, or 24 mm in sections with titled entries) with an equal negative bottom margin, so it takes no room but travels with the opening.
  - Keep-with-next is a `break-inside: avoid` box with a bottom "reach" (padding X plus margin −X). A section title reaches into its first entry's opening, and the first and second-to-last list items reach over the next two lines, so no heading ends a page and no bullet starts or ends a page alone.
  - The section head prints as a one-row grid, because Gecko lets a flex container's padding run onto the next page.
- Links keep their colours, so they stay identifiable and clickable in the PDF.

The current build prints 4 A4 pages in Chrome, Firefox, and Safari.

## Elevation & Depth

On screen, the sheet is a single lifted page on a warm desk: `0 1px 2px rgb(60 45 25 / 0.08), 0 12px 40px -12px rgb(60 45 25 / 0.25)`. This is the only shadow in the system, and it is removed at ≤40rem and in print. Inside the sheet, separation comes only from rules and whitespace.

## Shapes

Rules are the geometry:

- Folio: a 0.75pt ink rule under the contacts.
- Pull-quote: a 2.25pt ink rule above and a 0.75pt ink rule below.
- Section head: a double rule (2.25pt ink border plus a 0.5pt ink hairline 1.2 mm below it).
- Undated entries: 0.5pt `rule` hairlines between them.
- Timeline: a 0.75pt `rule-strong` spine in the gutter, with a 9pt brick dot (2pt paper ring) on each entry title.
- List markers: top-level is a 0.55em × 1.25pt brick dash; nested is a 0.35em × 0.75pt muted dash.

Radius appears only on the focus outline (2px) and `<mark>` (2px).

## Components

### Masthead

- **Folio:** a flex row with 9pt contacts in secondary ink. The email sits left, profiles sit right, and the row ends in a 0.75pt ink rule. Hover turns contacts brick with an underline.
- **Name:** 58pt MaruBuri 700, 7 mm below the folio.
- **Pull-quote:** 24pt MaruBuri 400 between a 2.25pt and a 0.75pt rule, padded `5mm 0 5mm 17mm`. A 72pt brick `“` hangs in the left pad.
- **About lead:** 10pt secondary ink, line height 1.75, one column with a 128 mm maximum. The first letter is a 3.4em brick MaruBuri drop cap.

### Section Head

A double rule, then a 21pt MaruBuri 700 title and an optional 9.5pt muted intro on the same baseline. Entries start 6 mm below.

### Entry

The layout is chosen from the data:

- **Dated** (`entry--dated`): the margin holds the period, right-aligned, with the start in ink 600 and "~ end" in muted ink below it. Every entry in the section is dated, so the section becomes a **timeline**.
- **Linked** (`entry--linked`): the margin holds links as right-aligned brick margin notes.
- **Titled** (`entry--titled`): the margin holds a short 11.5pt MaruBuri 600 heading, and the body starts flush with it.

Text column: a 16pt serif entry name (linked names stay in ink and turn brick on hover), then the role line (9.5pt ink 600 role · muted URL label), then the 11pt serif deck in secondary ink, then a 10pt body with brick-dash bullets.

### Compact List (Skills)

`section--compact` turns each bullet list into a wrapping flex row. Markers and indents are removed, and each item except the last is followed by a brick `/`, so a separator can never start a line.

### Links

- **Content link** (publications, homelab, about): inherits the text colour, with a 0.08em `accent-line` underline offset 0.2em. Hover turns brick with a solid underline.
- **Margin-note link** (`blog`, `repository`, `PR`): brick text with an `accent-line` underline.
- **Cross-reference link** (`[Buzzvil]`, `[AB180]`, `#homelab`; any `href^="#"`): muted ink with a faint `rule` underline, so the repeated references in 역량 stay quiet. Hover turns brick with an `accent-line` underline.
- **Contacts / URL labels:** secondary or muted ink with no underline. Hover adds a brick underline.
- **Focus:** a 2px brick outline, offset 2px, radius 2px.

### Highlight

`<mark>` uses an accent-tint background, ink text, `0 0.2em` padding, and a 2px radius, and never wraps.

## Do's and Don'ts

### Do:

- **Do** keep every size in `pt` and the A4 geometry in `mm` tokens shared by `.sheet` and `@page`.
- **Do** keep the brick accent for the editorial ornaments and margin-note links listed above.
- **Do** quiet repeated in-page references. They are wayfinding, not citations.
- **Do** keep the pagination rules (heading with first block, no lone first or last bullet) whenever the layout changes.
- **Do** print the page in Chrome, Safari, and Firefox (Save as PDF, default settings) and look at every page after any spacing change.

### Don't:

- **Don't** add photos, icons, skill bars, badges, cards, or decorative backgrounds.
- **Don't** add a second accent colour or tint section bands.
- **Don't** make whole entries or sections `break-inside: avoid`. That pushes long sections to the next page and leaves empty bands. Keep-with-next uses bounded reach boxes instead.
- **Don't** rely on `break-before/after: avoid` or `@page { background }`. Only Chromium honours them.
- **Don't** set the about lead in narrow multi-columns; Korean phrases split badly.
- **Don't** create a print-only layout. Print CSS handles page margins, page background, and pagination only.
