<script lang="ts">
    import { tagGroups } from "$lib/tag";
    import { tagFilter, toggleTag } from "$lib/tagFilter.svelte";

    interface Props {
        shown: number;
        total: number;
    }

    let { shown, total }: Props = $props();
</script>

<nav class="tag-filter innie">
    <button
        class="filter-row"
        class:selected={tagFilter.active === null}
        onclick={() => (tagFilter.active = null)}
    >
        All
    </button>

    {#each tagGroups as group (group.name)}
        <h3>{group.name}</h3>
        {#each group.tags as tag (tag.name)}
            <button
                class="filter-row"
                class:selected={tagFilter.active?.name === tag.name}
                onclick={() => toggleTag(tag)}
            >
                <span class="swatch" style="background-color: {tag.color};"></span>
                {tag.name}
            </button>
        {/each}
    {/each}

    <p class="result-count">
        Showing {shown} of {total} projects
    </p>
</nav>

<style>
    .tag-filter {
        position: sticky;
        top: 0;
        align-self: flex-start;
        display: flex;
        flex-direction: column;
        padding: 5px;
        gap: 1px;
    }

    h3 {
        margin-top: 8px;
        padding: 0 4px;
        color: var(--color-bg-dark);
        text-transform: uppercase;
        font-size: 10px;
        letter-spacing: 0.5px;
    }

    .filter-row {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 2px 4px;
        text-align: left;
        cursor: pointer;
    }

    .filter-row:hover {
        background-color: var(--color-bg-grey);
    }

    .filter-row.selected {
        background-color: var(--color-blue);
        color: var(--color-text-white);
    }

    .swatch {
        flex: 0 0 auto;
        width: 12px;
        height: 12px;
        border: 1px solid var(--color-border-black);
    }

    .result-count {
        margin-top: 8px;
        padding: 6px 4px 0;
        border-top: 1px solid var(--color-bg-dark);
        color: var(--color-bg-dark);
    }

    @media (max-width: 600px) {
        .tag-filter {
            display: none;
        }
    }

    @media (max-height: 700px) {
        .tag-filter {
            display: none;
        }
    }
</style>
