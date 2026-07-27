# Sara Nawaz — Portfolio

Personal portfolio site for Sara Nawaz, AI Engineer & Frontend Developer. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

## Sections

- **Hero** — intro + rotating tagline
- **About** — background, degree, current status
- **Skills** — AI/ML, Frontend, and Leadership skills, filterable
- **Projects** — SignVision AI (featured), AI Research Digest, AI Model Card
- **Experience** — Decodelabs, Forever Living Products, Girls' Representative
- **Contact** — GitHub and LinkedIn links

## Task 3: Interactive Web Elements

This site includes the interactivity required for Task 3 (add interactivity to a webpage using JavaScript), integrated directly into the real portfolio rather than as a separate demo page:

| Requirement | Where | How |
|---|---|---|
| Buttons or toggles | Nav bar | Light/dark theme switch |
| Buttons or toggles | Skills section | Category filter pills (All / AI & ML / Frontend / Leadership) |
| Basic user interaction | Skills section | Clicking a filter pill visually dims non-matching skill cards |
| Basic user interaction | Hero section | Clicking the ↻ button cycles the tagline |
| Dynamic content update | Hero section | Tagline text is rewritten via `textContent` on click |
| Dynamic content update | Skills section | Status line below the grid updates to reflect the active filter |

**Key skills demonstrated:** JavaScript basics (event listeners, arrays, template state), DOM manipulation (`classList`, `textContent`, `setAttribute`, `dataset`).

## File structure

```
my-portfolio/
├── index.html          # Page markup
├── style.css             # Design tokens, layout, components, dark mode
├── script.js              # Nav toggle, theme toggle, skill filters, tagline rotator
├── assets/
│   └── hero-graphic.svg  # Hero illustration (keep your existing file here)
└── README.md              # This file
```

## Design tokens

Colors: `--ink`, `--paper`, `--panel`, `--signal`, `--teal`, `--line`, `--muted` (dark mode overrides these via `html[data-theme="dark"]`).

Type: Space Grotesk (display), Inter (body), IBM Plex Mono (labels/data), loaded from Google Fonts.

## Running it

No build step needed.

1. Keep `style.css` and `script.js` next to `index.html`, and `hero-graphic.svg` inside `assets/`.
2. Open `index.html` in a browser, or serve the folder with a local server (e.g. VS Code's Live Server extension).

## Deploying

Hosted on GitHub Pages at `SaraN757-web/my-portfolio`. Push changes to the `main` branch and GitHub Pages redeploys automatically.
