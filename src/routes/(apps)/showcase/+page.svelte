<script lang="ts">
    import { onDestroy } from "svelte";
    import ShowcaseProjectComponent from "$components/ShowcaseProjectComponent.svelte";
    import TagComponent from "$components/TagComponent.svelte";
    import { projects } from "$lib/project";
    import { tags } from "$lib/tag";
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
    <div class="tag-filter">
        <TagComponent />
        {#each tags as tag (tag.name)}
            <TagComponent {tag} />
        {/each}
    </div>

    <div class="project-container">
        {#each filtered as project (project.id)}
            <ShowcaseProjectComponent {project} />
        {/each}
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .tag-filter {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
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
