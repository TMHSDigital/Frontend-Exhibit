/* ============================================================
   Frontend Exhibit — manifest loader
   Shared utility for the hub (and tooling) to read the exhibit
   registry. Exhibits themselves should NOT import this; they
   must stay self-contained.
   ============================================================ */

const MANIFEST_PATH = "exhibits-manifest.json";

/**
 * Fetch and validate the exhibit manifest.
 * Returns only entries safe to render on the hub.
 */
export async function loadExhibits({ includeDrafts = false } = {}) {
  const res = await fetch(MANIFEST_PATH, { cache: "no-store" });
  if (!res.ok) throw new Error(`Manifest fetch failed: HTTP ${res.status}`);
  const manifest = await res.json();

  const seen = new Set();
  return (manifest.exhibits ?? []).filter((e) => {
    const valid =
      typeof e.slug === "string" &&
      /^[a-z0-9]+(-[a-z0-9]+)*$/.test(e.slug) &&
      !seen.has(e.slug) &&
      typeof e.title === "string" &&
      typeof e.entry === "string" &&
      e.entry.startsWith(`exhibits/${e.slug}/`) &&
      (e.status === "live" || (includeDrafts && e.status === "draft"));
    if (valid) seen.add(e.slug);
    return valid;
  });
}

/** Group validated exhibits by tag for filtered hub views. */
export function groupByTag(exhibits) {
  const groups = new Map();
  for (const exhibit of exhibits) {
    for (const tag of exhibit.tags ?? []) {
      if (!groups.has(tag)) groups.set(tag, []);
      groups.get(tag).push(exhibit);
    }
  }
  return groups;
}
