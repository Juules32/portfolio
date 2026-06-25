import type { Tag } from '$lib/tag';

export const tagFilter = $state<{ active: Tag | null }>({ active: null });

// Select a tag, or clear the filter if that tag is already active.
export function toggleTag(tag: Tag): void {
    tagFilter.active = tagFilter.active?.name === tag.name ? null : tag;
}
