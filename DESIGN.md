---
version: alpha
name: Yusuf Demirci Portfolio
description: A Turkish engineering portfolio pairing approachable portraiture with precise project diagrams.
colors:
  primary: "#46647b"
  background: "#e9ebe8"
  surface: "#f1f2ef"
  text: "#303b42"
  muted: "#5d686d"
  border: "#cdd3cf"
typography:
  display:
    fontFamily: "Space Grotesk, Arial, sans-serif"
  sans:
    fontFamily: "Inter, Arial, sans-serif"
  mono:
    fontFamily: "ui-monospace, monospace"
rounded:
  DEFAULT: "8px"
  card: "12px"
spacing:
  page-max: "1160px"
  section: "100px"
components:
  button:
    height: "46px"
  filter:
    height: "44px"
---

# Portfolio design

## Overview

A personal engineering workbench: precise but human. The audience is Turkish-speaking collaborators and hiring teams evaluating Yusuf's software engineering across web development, mobile application development, and test automation. The primary journey is introduction → projects → contact. Evidence: project.md, existing route content, the user's supplied project links, and the user's positioning request. This is a brand/content site, not an admin application.

The signature is a two-line software engineer title (charcoal in light mode, cobalt-tinted in dark mode) beside an arched real portrait, complemented by small project-domain diagrams. The project archive separates five web sites from three automation projects. Diagrams are editorial illustrations, never fabricated execution results or framework claims. Avoid generic terminal dashboards, invented metrics, cream/terracotta palettes and ornamental project numbering.

Runtime ownership: src/app/globals.css is canonical. The frontmatter mirrors :root primary→--accent, background→--background, surface→--paper, text→--ink, muted→--muted, border→--line. Font variables --font-body and --font-display are provided by next/font in src/app/layout.tsx. Update this document and runtime together.

## Colors

Light mode follows the user's low-glare preference: soft gray-green background #e9ebe8, off-white surfaces #f1f2ef, charcoal text #303b42 and muted slate accent #46647b. The main CTA uses #3e596c with white text; the navigation CTA is outlined. The surname stays charcoal, portrait badge is omitted, focus-area chips lose their boxes, and project diagrams share one neutral green-gray surface #dfe4e1. The about strip is tonal instead of a high-contrast dark band. These light-only rules reduce competing visual accents without reducing reading contrast.

The approved dark mode is preserved: background #101c2d, surface #17273c, text #edf3fc, muted #a9b9cd, border #33465f and accent #91b6ff. Its solid CTAs remain #2455db, portrait annotation stays visible, and project illustrations retain their blue, sage, lavender and cyan surfaces. Semantic validation retains text and icons alongside color.

## Typography

Space Grotesk for display headings; Inter for reading and controls. Both load Latin Extended for Turkish. Utility labels use system monospace. Body baseline is 15px; inputs use 16px. Hero 58–96px on desktop, fluid on mobile. Long text wraps; no line clamping hides essential content.

## Layout

1160px maximum canvas, 32px desktop gutters and 18px phone gutters. Header is sticky. The hero has two columns, stacking at 760px. Three selected projects remain visible at every width; tablet uses horizontal project rows. Projects and contact pages share the same page headings and spacing. The document owns scrolling; media reserves height and the root reserves scrollbar space.

## Elevation & Depth

Borders and tinted surfaces establish hierarchy. Only the portrait's annotation and conceptual browser windows receive soft shadows. No decorative gradients or continuously moving backgrounds.

## Shapes

8px controls, 12px cards. The large arch belongs exclusively to the portrait. Lucide line icons remain secondary to labels.

## Components

Navigation retains current-page semantics and a disclosure menu on mobile, with Escape returning focus to its trigger. Theme choice persists when storage is available. ProjectVisual is shared by home and project archive; categories determine illustration meaning and color independently of filter order.

Buttons use visible focus, hover and pressed feedback. Disabled controls use reduced opacity and a not-allowed cursor. Filters expose aria-pressed. Contact validation associates errors with fields, keeps entered values on failure and reserves feedback space. Native controls and email links remain recognizable.

Motion is restricted to short hover transitions, respecting prefers-reduced-motion. Global scrollbar tokens cover thumb, track, hover and active states; forced colors uses system colors.

## Do's and Don'ts

- Use Turkish interface copy and real existing project content.
- Keep home and inner pages on shared tokens and ProjectVisual.
- Do not imply project mockups are actual screenshots or live test reports.
- Do not add unverified experience metrics or external submissions during UI verification.
