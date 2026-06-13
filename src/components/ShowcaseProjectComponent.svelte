<script lang="ts">
    import { resolve } from "$app/paths";
    import type { Project } from "$lib/project";
    import { tags } from "$lib/tag";

    interface Props {
        project: Project;
    }

    let { project }: Props = $props();
</script>

<section class="outie">
    <h1>{project.name}</h1>
    <img class="innie" alt="Banner" src={project.banner} />
    <span>{project.description}</span>
    <div class="tag-container">
        {#each tags as tag (tag.name)}
            <span style="background-color: {tag.color};">{tag.name}</span>
        {/each}
    </div>
    <div class="link-container">
        {#if project.hasPage}
            <a class="outie" href={resolve('/(apps)/showcase/[project]', { project: project.id })}>Page</a>
        {/if}
        {#if project.demoUrl}
            <a class="outie" href={resolve('/(apps)/showcase/[project]/demo', { project: project.id })}>Demo</a>
        {/if}
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 300px;
        padding: 5px;
        background-color: var(--color-bg-grey);
        gap: 5px;
    }

    .link-container {
        display: flex;
    }



    section > * {
        width: 320px;
    }

    h1 {
        background-color: var(--color-blue);
        color: var(--color-text-white);
        text-shadow: 1px 1px 0px black;
        padding: 4px;
    }

    img {
        width: 320px;
        height: 140px;
        image-rendering: auto;
        object-fit: contain;
    }
</style>
