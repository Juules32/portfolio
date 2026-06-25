<script lang="ts">
    import { onDestroy } from "svelte";
    import ShowcaseProjectComponent from "$components/ShowcaseProjectComponent.svelte";
    import TagFilter from "$components/TagFilter.svelte";
    import { projects } from "$lib/project";
    import { tagFilter } from "$lib/tagFilter.svelte";

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
    <TagFilter shown={filtered.length} total={projects.length} />

    <div class="main">
        <div class="content">
            <h1>Project Showcase</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </p>
            <div class="project-container">
                {#each filtered as project (project.id)}
                    <ShowcaseProjectComponent {project} />
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
        align-items: flex-start;
        gap: 10px;
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

    @media (max-width: 600px) {
        .project-container {
            justify-content: center;
        }
    }
</style>
