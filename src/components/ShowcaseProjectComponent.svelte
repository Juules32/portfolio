<script lang="ts">
    import { resolve } from "$app/paths";
    import type { Project } from "$lib/project";
    import TagComponent from "$components/TagComponent.svelte";
    import githubIcon from "$lib/assets/icons/github.svg";
    import itchIcon from "$lib/assets/icons/itch.svg";
    import rustIcon from "$lib/assets/icons/rust.svg";

    interface Props {
        project: Project;
    }

    let { project }: Props = $props();

    let hasLinks = $derived(
        Boolean(project.hasPage || project.demoUrl || project.itchUrl || project.githubUrl)
    );
</script>

<section class="outie">
    <h1>{project.name}</h1>
    <img class="innie" class:pixelate={project.pixelateThumbnail} alt="Banner" src={project.thumbnail} />
    <span>{project.description}</span>
    <div class="tag-container">
        {#each project.tags as tag (tag.name)}
            <TagComponent {tag} />
        {/each}
    </div>
    {#if hasLinks}
        <div class="link-container">
            {#if project.hasPage}
                <a class="outie pressable" href={resolve('/(apps)/showcase/[project]', { project: project.id })}>Description</a>
            {/if}
            {#if project.demoUrl}
                <a class="outie pressable" href={resolve('/(apps)/showcase/[project]/demo', { project: project.id })}>Demo</a>
            {/if}
            {#if project.itchUrl}
                <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL; resolve() is only for internal app routes -->
                <a class="outie pressable icon" href={project.itchUrl} target="_blank" rel="noopener noreferrer" aria-label="Itch.io">
                    <img src={itchIcon} alt="Itch.io" />
                </a>
            {/if}
            {#if project.cratesUrl}
                <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL; resolve() is only for internal app routes -->
                <a class="outie pressable icon" href={project.cratesUrl} target="_blank" rel="noopener noreferrer" aria-label="Crates">
                    <img src={rustIcon} alt="Crates" />
                </a>
            {/if}
            {#if project.githubUrl}
                <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL; resolve() is only for internal app routes -->
                <a class="outie pressable icon" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <img src={githubIcon} alt="GitHub" />
                </a>
            {/if}
        </div>
    {/if}
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
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .link-container .icon {
        flex: 0 0 auto;
        width: 32px;
        /* Keep the github button at the right edge, even when it's the only one. */
        margin-left: auto;
    }

    .link-container .icon img {
        width: 16px;
        height: 16px;
    }

    .tag-container {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
        margin-top: auto;
    }

    section * {
        width: 260px;
    }

    h1 {
        background-color: var(--color-blue);
        color: var(--color-text-white);
        text-shadow: 1px 1px 0px black;
        padding: 4px;
    }

    img {
        height: 130px;
        image-rendering: auto;
        object-fit: cover;
    }

    .pixelate {
        image-rendering: pixelated;
    }
</style>
