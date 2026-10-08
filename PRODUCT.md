# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Bun 1.4 + Astro 7 + TypeScript 7, plain CSS (no utility framework), self-hosted Pretendard and MaruBuri web fonts. There is no separately generated PDF: the PDF is the browser's print of the page (Ctrl/Cmd+P → Save as PDF). Static output deployed to GitHub Pages at `cv.bhyoo.com`. Every dependency is pinned to its latest release at build time.

## Users

Recruiters, hiring managers, and engineers evaluating 유병훈 (Byeonghoon Yoo), a Korean backend/server engineer, either on screen through the `cv.bhyoo.com` link or as a PDF saved/printed from the browser. They skim first (companies, roles, dates), then read the parts that match the role they are hiring for.

## Product Purpose

A single-page curriculum vitae that reads well on screen and prints from the browser to a faithful A4 PDF. Success: a reviewer can see who he is, where he worked, and what he did within seconds, and the browser's print of the page looks identical to the web page.

## Operating Context

- Opened from a link in a job application, LinkedIn, or GitHub profile; also attached as a PDF saved from the browser's print dialog.
- Printed or saved to PDF by reviewers with the browser's print dialog, so print must never depend on a custom button or a separate PDF file, and must stay faithful with default dialog settings ("Background graphics" off, headers and footers on).
- Content is maintained by the owner in one data file and rebuilt; design and content change independently.

## Capabilities and Constraints

- Language: Korean only (company names, technologies, and paper titles stay in their original language).
- Content is migrated verbatim from the previous Jekyll `_config.yml`; the owner updates it later. Some entries are known to be stale (e.g. AB180 listed as current) and must not be "corrected" by guesswork.
- No photo, no icons, no skill bars, no decorative fills: ornament stays typographic (rules, quote mark, drop cap, timeline dots).
- Web and PDF are the same design; print rules only handle pagination and page margins, never a separate layout.
- Deployment changes (GitHub Pages source switch, commits, PRs) are out of scope until the owner asks.

## Brand Commitments

Original criteria from the owner's reference selection (Standard Resume "San Juan", "Cordova", Riley Tomasek's web résumé, Google Docs "Modern Writer"), with the comment "깔끔하고 세련된게 좋은데 무엇보다 가독성이 최선". These still hold:

1. Single document on one sheet; no cards, photos, icons, or skill bars.
2. Two contrasting families: a characterful serif (MaruBuri) for identity text, a neutral sans (Pretendard) for body.
3. Fixed entry anatomy: company is the most prominent element, followed by role, period, and a short description.
4. Generous whitespace and line height, readable measure.
5. Near-monochrome warm ink with exactly one accent colour.
6. Web and PDF identical.

On 2026-10-08 the owner chose design variant E "에디토리얼 매거진" over the first plain build, which felt too simple. The chosen look is warm paper (#faf6ee), a large MaruBuri name, the headline as a pull-quote, double-ruled section titles, an editorial grid with periods and links in a margin column (timeline dots for dated sections), and one brick accent. See DESIGN.md.

## Evidence on Hand

- All CV content: `_config.yml` (about text, 경력, 역량, 학력, Projects, 외부 활동, Skills), name 유병훈, email bhyoo@bhyoo.com, GitHub isac322, LinkedIn bh-yoo, blog velog.io/@isac322.
- Domain: `CNAME` → cv.bhyoo.com.
- No updated career data, testimonials, or English translation exist; do not fabricate them.

## Product Principles

1. Readability beats ornament; every visual device must make scanning faster.
2. One source, one document: what the browser shows is what its print dialog saves as PDF.
3. Content is data; the page never hard-codes career facts.
4. Facts are the owner's; the build never edits, embellishes, or "updates" them.

## Accessibility & Inclusion

Body text contrast ≥ 4.5:1 on screen and in print; semantic headings and lists so the PDF and screen readers keep structure; links remain usable in the PDF.
