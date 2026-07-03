<script lang="ts">
    import { onDestroy } from "svelte";
    import ShowcaseProjectComponent from "$components/ShowcaseProjectComponent.svelte";
    import { projects } from "$lib/project";
    import { tagGroups } from "$lib/tag";
    import { tagFilter, toggleTag } from "$lib/tagFilter.svelte";
    import CopyrightComponent from "$components/CopyrightComponent.svelte";

    onDestroy(() => {
        tagFilter.active = null;
    });

    let filtered = $derived.by(() => {
        const active = tagFilter.active;
        if (!active) return projects;
        return projects.filter((project) =>
            project.tags.some((tag) => tag.name === active.name)
        );
    });
</script>

<section>
    <div class="left-menu">
        <nav class="tag-filter innie">
            <button
                class="filter-row"
                class:selected={tagFilter.active === null}
                onclick={() => (tagFilter.active = null)}
            >
                All
            </button>
    
            {#each tagGroups as group (group.name)}
                <h4>{group.name}</h4>
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
                Showing {filtered.length} of {projects.length} projects
            </p>
        </nav>

        <div class="left-copyright">
            <CopyrightComponent />
        </div>
    </div>
    
    <div class="main">
        <div class="content">
            <h1>Project Showcase</h1>
            <p>
                Welcome to my showcase where major projects are listed. 
                Projects are either work-related, study-related, or simply hobby projects in various stages of refinement.
            </p>
            <p>
                Filter projects by clicking their multicolored tags 

                <span class="tag-message">
                    or by using the menu on the left
                </span>.
            </p>
            <div class="project-container">
                {#each filtered as project (project.id)}
                    <ShowcaseProjectComponent {project} />
                {/each}
            </div>

            <div class="main-copyright">
                <CopyrightComponent />
            </div>
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
        align-items: flex-start;
        gap: 20px;
    }

    .left-menu {
        position: sticky;
        top: 0;
        width: 170px;
    }
    
    .tag-filter {
        display: flex;
        flex-direction: column;
        padding: 5px;
        gap: 1px;
    }

    .tag-filter h4 {
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

    .main {
        flex: 1;
    }

    .content {
        max-width: calc(274px * 4 + 10px * 3);
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .project-container {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .main-copyright {
        display: none;
        text-align: right;
    }

    @container app-window (max-width: 500px) or (max-height: 560px) {
        .left-menu {
            display: none;
        }

        .tag-message {
            display: none;
        }

        .project-container {
            justify-content: center;
        }

        .main-copyright {
            display: inline;
        }
    }
</style>
