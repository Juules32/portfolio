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

    // Whether tags should be placed on the same line as buttons
    let inlineTags = $derived(hasLinks && !project.hasPage && !project.demoUrl);
</script>

{#snippet tagList()}
    <div class="tag-container">
        {#each project.tags as tag (tag.name)}
            <TagComponent {tag} />
        {/each}
    </div>
{/snippet}

<section class="outie">
    <h4>{project.name}</h4>
    <img class="innie" class:pixelate={project.pixelateThumbnail} alt="Banner" src={project.thumbnail} />
    <span>{project.description}</span>
    {#if !inlineTags}
        {@render tagList()}
    {/if}
    {#if hasLinks}
        <div class="link-container" class:inline={inlineTags}>
            {#if inlineTags}
                {@render tagList()}
            {/if}
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
        height: 313px;
        padding: 5px;
        background-color: var(--color-bg-grey);
        gap: 5px;
    }

    .link-container {
        display: flex;
        gap: 5px;
    }

    /* No page/demo: drop the tags into the link row and pin it to the bottom. */
    .link-container.inline {
        margin-top: auto;
        /* Keep buttons on the bottom line when the tags wrap. */
        align-items: flex-end;
    }

    .link-container .tag-container {
        flex: 1;
        width: auto;
        margin-top: 0;
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
        width: 24px;
        /* Keep the github button at the right edge, even when it's the only one. */
        margin-left: auto;
    }

    .link-container .icon img {
        width: 16px;
        height: 16px;
        object-fit: contain;
    }

    .tag-container {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
        margin-top: auto;
    }

    section * {
        width: 286px;
    }

    h4 {
        background-color: var(--color-blue);
        color: var(--color-text-white);
        text-shadow: 1px 1px 0px black;
        padding: 4px;
    }

    img {
        height: 143px;
        object-fit: cover;
    }

    .pixelate {
        image-rendering: pixelated;
    }
</style>
