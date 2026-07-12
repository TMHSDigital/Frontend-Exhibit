# Frontend Exhibit

A public showcase of isolated frontend mini-projects: themes, micro-interactions, 3D, and typography animation. Each project (an "exhibit") is self-contained, registered through a central manifest, and rendered on a single GitHub Pages hub.

## Repository map

| Path | Role |
| :--- | :--- |
| `index.html` | The hub. Sidebar catalogue plus a full-viewport iframe stage. |
| `exhibits/` | Isolated mini-projects, one folder per exhibit, each with its own `index.html`. |
| `exhibits-manifest.json` | Machine-readable registry of every exhibit. |
| `assets/css/` | Shared design tokens: fluid type scale, fluid spacing, motion curves. |
| `assets/js/` | Shared utilities: manifest loading and validation for the hub. |
| `LICENSE` | GNU GPL-3.0. |
| `.gitignore` | Public-repo guardrails: secrets, AI tool caches, and IDE state are never committed. |

## Exhibits

| No. | Exhibit | Focus | Technology | Interaction |
| :-- | :--- | :--- | :--- | :--- |
| 001 | [The Gilded Age](exhibits/gilded-age/) | Procedural gold leaf material under a raking light, built around Twain's "thin gold over iron" coinage | WebGL2 fragment shader (fbm height field, normal-mapped specular lighting, noise-thresholded damage mask), 2D canvas particle debris, no libraries | Move the pointer to rake light across the leaf. Press and drag to burnish through to the iron beneath. Removing enough surface triggers the finale. |
| 002 | [Kinetic Type](exhibits/kinetic-typography/) | Scroll-reactive typography: motion treated as a typographic material, with letterforms shaped by how the reader scrolls | Vanilla JS scroll-velocity engine writing CSS custom properties, Lenis smooth scroll, GSAP + ScrollTrigger, Google variable fonts (Roboto Flex, Fraunces, Space Mono), all via CDN | Scroll to feed the engine. Velocity drives weight, width, and slant axes plus shear and scale; acceleration triggers RGB split; a marquee and pinned specimen react to speed and direction. |
| 003 | [Control Room](exhibits/control-room/) | Brutalist dashboard where the page measures itself: frame rate, pointer speed, input events, DOM nodes, session clock. Weight is load-bearing: each numeral's font weight is its live value | Vanilla JS instrument loop driving the Archivo variable font weight and width axes, Fragment Mono data labels, CSS custom properties, no libraries | Hover an instrument and it inverts instantly while its numeral compresses. Press to hold a reading. Flip the rocker and the whole room inverts in a single frame. A ledger below the fold logs real session events. |
| 004 | [Rewind OS](exhibits/rewind-os/) | Retro UI archaeology: one working desktop rendered in five period-correct skins (1977 phosphor terminal, 1984 one-bit bitmap, 1992 beveled grey, 2004 aqua gloss, 2013 flat). Chrome, typography, cursors, and sound all travel; window state does not | Vanilla JS window manager and era engine, one `[data-era]` attribute driving full CSS token swaps, WebAudio synthesized era-voiced UI sounds, canvas paint and clock apps, pixel fonts (VT323, DotGothic16, Silkscreen) via CDN, no libraries | Scrub the timeline dock or press the arrow keys and the OS power-cycles through a CRT collapse into another decade. Drag windows, roll them up by double-clicking title bars, draw in Paint, run the 16-step sequencer. The drawing, song, and clock survive every era switch. |
| 005 | [Meridian Survey](exhibits/meridian-survey/) | Animated 2D infographics dashboard: an annual report for a fictional radio-sky survey. Donut, bar, and scatter charts follow a validated colorblind-safe palette and quiet mark grammar, with a table twin behind every chart | Hand-rolled spring integrator in one requestAnimationFrame loop driving every arc angle, bar height, dot radius, and counter; persistent SVG nodes morphed in place (never redrawn); seeded synthetic catalogue; Space Grotesk display type via CDN, no chart library | Sequential load reveal (tiles count up, donut sweeps in, bars rise staggered, dots pop). Class chips, quarter control, and a continuous S/N slider retarget the springs so charts morph live. Hovering a chip or donut segment dims that class everywhere; nearest-point tooltips on all marks. |
| 006 | [Stillroom](exhibits/stillroom/) | Resonant stark minimalism: a one-person studio workspace in deep whitespace, ultra-thin display type, and diffused glass panels over a living gradient field. The glass genuinely refracts moving color beneath it | Canvas gradient field (drifting radial blobs, state-driven palette and convergence), CSS backdrop-filter glass, FLIP card expansion driven by spring keyframes generated from a physical integrator and played through the Web Animations API, registered CSS @property for the revolving chromatic rim, Outfit variable font via CDN, no libraries | Click any card and it dilates into a centered sheet while the field converges, pulses, and re-tints to the card's palette; Escape or the scrim settles it back. Hovering tints the field, a specular sheen tracks the cursor per panel, agenda checks pop, a real 25-minute focus dial runs behind closed cards, and the day renders as a filling line. |
| 007 | [The Specimen Book](exhibits/specimen-book/) | A vintage type foundry catalogue for one variable font (Fraunces), bound as a physical book with turnable leaves. Each of the four axes gets its own spread; nothing on the pages is a picture of type, it is the live font throughout | 3D CSS page-turn engine (two-faced leaves, preserve-3d, z-index choreography), font-variation-settings driven live by pointer scrubbers, SVG turbulence paper and leather, requestAnimationFrame LFOs for the closing spread, Fraunces via CDN, no libraries | Click the corners or use arrow keys to turn leaves. Drag the brass scrubber on each axis spread and the giant glyph, waterfall, and readout follow. Click a glyph for another showing. The final spread swings all four axes on independent periods like an orchestra tuning, with live gauges and a rest baton. |
| 008 | [Neon After Closing](exhibits/neon-after-closing/) | A neon sign shop at night: gas tubes rendered as layered SVG strokes (glass, halo, glow, core, hot line) driven by a per-sign power state machine with sputter, strike, warm-up, steady burn, and brownout phases | SVG scene with brick pattern and glow backwash, per-sign ignition state machines on one requestAnimationFrame clock, Catmull-Rom stroke smoothing for freehand tube bending, WebAudio synthesized mains hum, strike crackle, and failure buzz, pendulum sway physics, no libraries | Click wall signs to switch them; they sway on their hangers. Draw cursive strokes in the chalk frame to bend your own tube, choose a gas (neon, argon, green, rose), and throw the knife switch for the full ignition sequence. Set the transformer to TIRED or DYING for brownouts, segment dropouts, buzzing, and full kills that restrike on their own. HUM enables synthesized sound. |
| 009 | [Blueprint](exhibits/blueprint/) | A cyanotype technical drawing of a municipal water tower that constructs itself on scroll with the pacing of a draftsman: datum, structure, detail, hatching, dimensions, annotations, release stamp, then lift-off into 3D | Scroll-scrubbed SVG plotter that inks every stroke sequentially via measured path lengths and dash offsets, clip-path reveals for dashed linework, per-character typed text, a traveling pen crosshair with coordinate readout, and a hand-rolled 3D wireframe projector (no three.js) for the final model, no libraries | Scroll to draft the sheet phase by phase; a pen crosshair rides the active stroke and the corner HUD reads out its coordinates. At the release stamp the drawing dims and the tower lifts off the paper as a glowing wireframe: drag to turn it, with inertia, and it idles back into a slow rotation. |

Exhibits are live at `https://tmhsdigital.github.io/Frontend-Exhibit/#/<slug>` once GitHub Pages is enabled.

## The exhibit registry

New exhibits are built and registered without touching the hub code. The contract:

```
exhibits/
└── <slug>/               kebab-case, unique
    ├── index.html        required entry point
    ├── thumbnail.webp    hub card image
    └── ...               anything else, fully self-contained
```

Registration steps:

1. Build the exhibit inside `exhibits/<slug>/`. No imports from sibling exhibits.
2. Copy the `exhibitEntryTemplate` from `exhibits-manifest.json`.
3. Append the filled entry to the manifest's `exhibits` array. Never modify or remove existing entries.
4. Use only tags from `allowedTags`. Set `status` to `draft` until reviewed, then `live`.
5. Exhibits render inside the hub's iframe. Any link that leaves the exhibit (back to the catalogue, external pages) must use `target="_top"` or `target="_blank"`, or the hub will load nested inside itself.

The hub loads the manifest at runtime, validates each entry (slug format, path containment, status), and drops anything malformed. A bad registration cannot break the gallery.

## Viewing the site

On GitHub Pages:

| URL | Content |
| :--- | :--- |
| `/Frontend-Exhibit/` | The hub. Every `live` exhibit appears in the catalogue. |
| `/Frontend-Exhibit/#/<slug>` | Deep link to a specific exhibit inside the hub. |
| `/Frontend-Exhibit/exhibits/<slug>/` | A single exhibit, full screen. |

Append `?drafts` to the hub URL to preview exhibits still marked `draft`.

Locally, serve the repository root over HTTP (the manifest cannot be fetched from `file://`):

```bash
git clone https://github.com/TMHSDigital/Frontend-Exhibit.git
cd Frontend-Exhibit
npx serve .
```

There is no build step. Everything is static HTML, CSS, and JavaScript.

## Security

This repository is public, so the guardrails are strict:

- No secrets. `.gitignore` blocks `.env*`, keys, certificates, tokens, and credential files by pattern.
- No AI tooling leakage. Local agent caches and configs (`.claude/`, `.cursor/`, `CLAUDE.md`, and similar) are excluded.
- No trackers. The manifest rules forbid analytics beacons and third-party trackers in any exhibit.
- Manifest validation. The hub only renders entries that pass slug, path, and status checks.

## License

Released under the GNU General Public License v3.0, a strong copyleft license. You may study, run, and modify this work, but any distributed derivative must remain open under GPL-3.0 with source available. See [LICENSE](LICENSE) for the full terms.
