# exhibits/

Each subfolder here is one self-contained exhibit: its own `index.html`, styles, and scripts, with no imports from sibling exhibits.

To register a new exhibit, follow the `registryRules` and `exhibitEntryTemplate` in [`../exhibits-manifest.json`](../exhibits-manifest.json): create `exhibits/<slug>/index.html`, then append an entry to the manifest's `exhibits` array. Never edit or remove existing entries.
