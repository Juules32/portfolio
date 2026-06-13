import type { Tag } from '$lib/tag';

// Module-level reactive state shared across the showcase UI, mirroring
// taskbar.svelte.ts. Wrapped in an object so `active` can be reassigned from
// other modules (an imported `let` binding can't be reassigned directly).
export const tagFilter = $state<{ active: Tag | null }>({ active: null });

// Select a tag, or clear the filter if that tag is already active.
export function toggleTag(tag: Tag): void {
    tagFilter.active = tagFilter.active?.name === tag.name ? null : tag;
}
