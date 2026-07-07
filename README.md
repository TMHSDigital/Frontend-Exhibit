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
