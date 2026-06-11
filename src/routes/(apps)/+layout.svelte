<script lang="ts">
    import closeIcon from '$lib/assets/icons/12x12/close.png';
    import minimizeIcon from '$lib/assets/icons/12x12/minimize.png';
    import maximizeIcon from '$lib/assets/icons/12x12/maximize.png';

    import { endpointToApp, endpointToIcon, endpointToLabel, getEndpoint } from '$lib/utils/endpoint';
    import { openTaskbarApp, closeTaskbarApp } from '$lib/taskbar.svelte';
    import { untrack } from 'svelte';
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
    let { children } = $props();

    let title = $derived(endpointToLabel(getEndpoint()));
    let icon = $derived(endpointToIcon(getEndpoint()));

    let windowed = $derived(false);

    // Reset to the current route's default whenever we navigate.
    $effect(() => {
        windowed = page.data.windowed ?? false;
    });

    // Add the opened app to the taskbar whenever we navigate to it.
    // Untrack the mutation so the effect depends only on the endpoint, not on
    // taskbarApps itself (otherwise closing an app re-triggers this and re-adds it).
    $effect(() => {
        const app = endpointToApp(getEndpoint());
        if (app) {
            untrack(() => openTaskbarApp(app));
        }
    });

    function minimize() {
        goto(resolve('/'));
    }

    function close() {
        const app = endpointToApp(getEndpoint());
        if (app) {
            closeTaskbarApp(app);
        }
        goto(resolve('/'));
    }

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
            <button class="window-bar-button outie pressable" type="button" aria-label="Minimize" onclick={minimize}>
                <img alt="" src={minimizeIcon} />
            </button>
            <button class="window-bar-button outie pressable" type="button" aria-label="Maximize" onclick={toggleWindowed}>
                <img alt="" src={maximizeIcon} />
            </button>
            <button class="window-bar-button outie pressable" type="button" aria-label="Close" onclick={close}>
                <img alt="" src={closeIcon} />
            </button>
        </div>
    </div>
    <div class="window-content innie">
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

    .window-bar-buttons {
        margin-left: auto;
        margin-right: 3px;
        color: var(--color-text-white);
        display: flex;
        gap: 3px;
    }

    .window-bar-button {
        background-color: var(--color-bg-light);
        height: 16px;
        width: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .window-bar-button img {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
    }

    .window-bar-button:active img {
        padding-top: 1px;
        padding-left: 1px;
    }
</style>
