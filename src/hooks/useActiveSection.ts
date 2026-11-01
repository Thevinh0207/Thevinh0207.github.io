import { useEffect, useState } from "react";

/**
 * Tracks which of the given section IDs is currently in the viewer's
 * "focus band" (roughly 40–50% from the top of the viewport). Returns
 * the active section's id, or null if none are visible yet.
 *
 * Uses IntersectionObserver — zero scroll-event work, no layout thrash.
 *
 * @param sectionIds Element IDs to observe, e.g. ["about-me", "experience", "projects", "contact"]
 */
export function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds.join(",")]);

  return activeId;
}
