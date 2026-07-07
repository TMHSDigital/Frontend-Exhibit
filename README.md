<div align="center">

# ✦ FRONTEND EXHIBIT ✦

### *A living gallery of bleeding-edge frontend craft*

Themes · Micro-interactions · 3D · Typography in motion

<br/>

![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-b31b1b?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Foundations_Laid-7c5cff?style=for-the-badge)
![Built by](https://img.shields.io/badge/Built_by-Autonomous_Agents-0b0b0f?style=for-the-badge)

<br/>

*Every exhibit is a self-contained experiment. Every experiment ships to the gallery.*

</div>

---

## 🏛 What This Is

**Frontend Exhibit** is a public showcase repository where isolated mini-projects — *exhibits* — demonstrate advanced frontend techniques. Each exhibit lives in its own room of the gallery, fully self-contained, registered through a central manifest, and rendered together on a single GitHub Pages hub.

> **Think of it as a museum:** the hub is the lobby, `exhibits-manifest.json` is the curator's ledger, and each folder under `exhibits/` is a wing you can walk into.

---

## 🗺 Repository Map

| Path | Role |
| :--- | :--- |
| `exhibits/` | 🖼 Isolated mini-projects — one folder per exhibit, each with its own `index.html` |
| `exhibits-manifest.json` | 📖 The **registry ledger** — machine-readable catalog of every exhibit |
| `assets/css/` | 🎨 Shared design tokens: fluid type scale, fluid spacing, motion curves |
| `assets/js/` | ⚙️ Shared utilities: manifest loader + validation for the hub |
| `LICENSE` | ⚖️ GNU GPL-3.0 — strong copyleft (see below) |
| `.gitignore` | 🛡 Public-repo guardrails: secrets, AI caches, IDE state never committed |

---

## 🤖 The Autonomous Exhibit Registry

New exhibits are built and registered by autonomous agents without human merge conflicts. The contract is simple and strict:

```
exhibits/
└── <your-slug>/          ← kebab-case, unique
    ├── index.html        ← required entry point
    ├── thumbnail.webp    ← hub card image
    └── …                 ← anything else, fully self-contained
```

**Registration flow:**

1. **Build** the exhibit inside `exhibits/<slug>/` — no imports from sibling exhibits.
2. **Copy** the `exhibitEntryTemplate` from `exhibits-manifest.json`.
3. **Append** the filled entry to the manifest's `exhibits` array — *never mutate existing entries*.
4. **Tag** it using only values from `allowedTags`; set `status` to `draft` until reviewed, then `live`.

The hub loads the manifest at runtime, validates each entry (slug format, path containment, status), and silently drops anything malformed — so a bad registration can never break the gallery.

---

## 🧭 Navigating the Gallery (GitHub Pages)

Once Pages is enabled, the site will resolve as:

| URL | What you'll see |
| :--- | :--- |
| `/Frontend-Exhibit/` | The **hub** — every `live` exhibit as a card, filterable by tag |
| `/Frontend-Exhibit/exhibits/<slug>/` | A single exhibit, full-bleed |

Exhibits are plain static HTML/CSS/JS — no build step required to view them. Clone, open, explore:

```bash
git clone https://github.com/<you>/Frontend-Exhibit.git
cd Frontend-Exhibit
npx serve .   # or any static file server
```

---

## 🛡 Security Posture

This repository is **entirely public**, so the guardrails are deliberate:

- **No secrets, ever.** `.gitignore` blocks `.env*`, keys, certificates, tokens, and credential files by pattern.
- **No AI-tooling leakage.** Local agent caches and configs (`.claude/`, `.cursor/`, `.aider*`, and friends) are excluded.
- **No trackers.** The manifest rules forbid analytics beacons and third-party trackers in any exhibit.
- **Manifest validation.** The hub only renders entries that pass slug, path, and status checks.

---

## ⚖️ License

Released under the **GNU General Public License v3.0** — a strong copyleft license. You may study, run, and modify this work, but any distributed derivative **must remain open under GPL-3.0** with source available. Commercial use inside closed-source products is not permitted. See [`LICENSE`](LICENSE) for the full terms.

---

<div align="center">

*The gallery doors are open. First exhibits arriving soon.*

**✦**

</div>
