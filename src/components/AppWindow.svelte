<script lang="ts">
    import type { Snippet } from 'svelte';
    import { untrack } from 'svelte';
    import { page } from '$app/state';
    import { endpointToApp, endpointToIcon, endpointToLabel, getEndpoint } from '$lib/utils/endpoint';
    import { openTaskbarApp } from '$lib/taskbar.svelte';

    interface Props {
        children: Snippet;
        buttons: Snippet<[{ toggleWindowed: () => void }]>;
    }

    let { children, buttons }: Props = $props();

    let title = $derived(endpointToLabel(getEndpoint()));
    let icon = $derived(endpointToIcon(getEndpoint()));

    let windowed = $derived(page.data.windowed ?? false);

    $effect(() => {
        const app = endpointToApp(getEndpoint());
        if (app) {
            untrack(() => openTaskbarApp(app));
        }
    });

    function toggleWindowed() {
        windowed = !windowed;
    }
</script>

<section class="window app-window" class:windowed>
    <div class="window-bar">
        {#if icon}
            <img class="window-bar-icon" alt="icon" src={icon} />
        {/if}
        <h2 class="window-bar-title">{title}</h2>
        <div class="window-bar-buttons">
            {@render buttons({ toggleWindowed })}
        </div>
    </div>
    <div class="window-content innie" class:full-bleed={page.data.fullBleed}>
        {@render children()}
    </div>
</section>

<style>
    .window {
        margin: 0;
        height: 100%;
        position: relative;
        padding: 3px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    @media (min-width: 601px) {
        .window.windowed {
            margin: 10vh 20vw;
            margin-bottom: 30vh;
            height: calc(100% - 40vh);
        }
    }

    .window-bar {
        display: flex;
        background-color: var(--color-blue);
        align-items: center;
        height: 24px;
        padding-left: 12px;
    }

    .window-bar-icon {
        padding-right: 5px;
    }

    .window-bar-title {
        color: var(--color-text-white);
        text-transform: capitalize;
    }

    .window-content {
        padding: 10px;
        background-color: var(--color-bg-light);
        flex: 1;
        min-height: 0;
        overflow: auto;
    }

    .window-content.full-bleed {
        padding: 0;
        overflow: hidden;
    }

    .window-bar-buttons {
        margin-left: auto;
        margin-right: 3px;
        color: var(--color-text-white);
        display: flex;
        gap: 3px;
    }
</style>
