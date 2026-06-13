<script lang="ts">
    import { resolve } from "$app/paths";
    import type { Project } from "$lib/project";
    import TagComponent from "$components/TagComponent.svelte";
    import githubIcon from "$lib/assets/icons/github.svg";

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
        {#each project.tags as tag (tag.name)}
            <TagComponent {tag} />
        {/each}
    </div>
    <div class="link-container">
        {#if project.hasPage}
            <a class="outie" href={resolve('/(apps)/showcase/[project]', { project: project.id })}>Page</a>
        {/if}
        {#if project.demoUrl}
            <a class="outie" href={resolve('/(apps)/showcase/[project]/demo', { project: project.id })}>Demo</a>
        {/if}
        {#if project.githubUrl}
            <a class="outie github" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src={githubIcon} alt="GitHub" />
            </a>
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
        gap: 5px;
    }

    .link-container a {
        flex: 1;
        padding: 4px;
        text-align: center;
    }

    .link-container .github {
        flex: 0 0 auto;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .link-container .github img {
        width: 16px;
        height: 16px;
    }

    .tag-container {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
        margin-top: auto;
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
