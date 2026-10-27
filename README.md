# Artsiom Barshchou Portfolio

A lightweight, responsive portfolio built with HTML, CSS, and a small JavaScript file. No package installation, framework, API keys, or build step is required.

## Preview

Open `index.html` directly for a visual preview. To test clipboard functionality, serve the folder over localhost or HTTPS. The browser must allow clipboard access.

## Files

- `index.html`: portfolio content and structure
- `styles.css`: responsive styling, keyboard focus states, reduced-motion and print styles
- `script.js`: mobile navigation and copy-email control
- `assets/`: original photographs, AthleteOS screenshot, resume PDF, and favicon

## Content

The page introduces Artsiom, highlights AthleteOS, summarizes experience and skills, and closes with education and contact options. The copy was updated using the October 12, 2026 AI Agent Evaluator resume, with the September 16 master resume supporting finance and earlier leadership details. Greensboro captaincy wording reflects Artsiom's October 27 update: he finished 2025-26 as assistant captain and is serving as assistant captain for 2026-27. The resume download is the unchanged October 12 PDF. Project notes expand with a native HTML disclosure control. Experience also contains an expandable AI evaluation demonstration with fictional source figures and a deliberately flawed response. It includes the task, calculation and evidence checks, a review decision, and a corrected answer. It is a portfolio sample rather than an employer or client evaluation. The core page and navigation remain usable without JavaScript.

## Deployment

Keep the existing Vercel project and its repository connection. This remains a static site: no build command, the repository root as the output directory, and no environment variables. Review the changes before updating the production branch.

The original supplied deployment URL required a Vercel login during inspection. Confirm which production URL visitors should use before sharing the portfolio publicly. Do not remove deployment protection without the owner's approval.

## Verification performed

- Initial layout checks at 320, 390, 768, 1024, and 1440 pixels; the resume update was checked again at 320, 768, and 1440 pixels: no horizontal overflow
- Mobile menu open/close, Escape behavior, focus return, and section navigation
- Expandable AthleteOS project notes
- Valid section targets, unique IDs, image alternative text, and asset loading
- Resume PDF and AthleteOS demo returned successful HTTP responses
- JavaScript syntax and Git whitespace checks
- Arty Voice style check

Deployment is managed by the existing Vercel project connected to this repository.
