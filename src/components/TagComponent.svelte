<script lang="ts">
    import type { Tag } from "$lib/tag";
    import { tagFilter, toggleTag } from "$lib/tagFilter.svelte";

    interface Props {
        // Optional to allow "All" tag
        tag?: Tag;
    }

    let { tag }: Props = $props();

    let selected = $derived(tag ? tagFilter.active?.name === tag.name : tagFilter.active === null);

    function select() {
        if (tag) {
            toggleTag(tag);
        } else {
            tagFilter.active = null;
        }
    }
</script>

<button
    class="tag pressable"
    class:innie={selected}
    class:outie={!selected}
    style="background-color: {tag ? tag.color : 'var(--color-bg-dark)'};"
    onclick={select}
>
    {tag ? tag.name : "All"}
</button>

<style>
    .tag {
        padding: 0px 6px;
        height: 24px;
        color: var(--color-text-white);
        text-shadow: 1px 1px 0px black;
    }
</style>

