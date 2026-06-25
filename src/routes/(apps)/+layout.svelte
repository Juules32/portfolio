<script lang="ts">
    import closeIcon from '$lib/assets/icons/12x12/close.png';
    import minimizeIcon from '$lib/assets/icons/12x12/minimize.png';
    import maximizeIcon from '$lib/assets/icons/12x12/maximize.png';
    import backIcon from '$lib/assets/icons/12x12/back.png';
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
    import { untrack } from 'svelte';
    import { openTaskbarApp, closeTaskbarApp } from '$lib/taskbar.svelte';
    import { endpointToApp, endpointToIcon, endpointToLabel, getEndpoint } from '$lib/utils/endpoint';

    let { children } = $props();

    let title = $derived(endpointToLabel(getEndpoint()));
    let icon = $derived(endpointToIcon(getEndpoint()));

    let windowed = $derived(page.data.windowed ?? false);

    // Number of real path segments, ignoring layout groups like (apps).
    // Depth 1 (e.g. /showcase) is a top-level app; anything deeper is a sub-page.
    let isSubPage = $derived(
        (page.route.id ?? '')
            .split('/')
            .filter((segment) => segment && !segment.startsWith('('))
            .length > 1
    );

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

    function back() {
        history.back();
    }

    function toggleWindowed() {
        windowed = !windowed;
    }
</script>

<section class="window app-window" class:windowed>
    <div class="window-bar">
        {#if isSubPage}
            <button class="window-bar-button back-button outie pressable" type="button" aria-label="Back" onclick={back}>
                <img alt="" src={backIcon} />
            </button>
        {:else if icon}
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
        /* Largest 16:9 box that still leaves at least 50px on every side of the
           available area (the viewport minus the 40px taskbar), centered within
           it via the absolute + margin:auto trick. */
        .window.windowed {
            position: absolute;
            inset: 0;
            margin: auto;
            width: min(100vw - 200px, (100vh - 140px) * 16 / 9);
            height: min(100vh - 140px, (100vw - 200px) * 9 / 16);
        }
    }

    .window-bar {
        display: flex;
        background-color: var(--color-blue);
        align-items: center;
        height: 24px;
        padding-left: 5px;
        padding-right: 5px;
    }

    .window-bar-icon {
        margin-right: 5px;
    }

    .back-button {
        margin-right: 5px;
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
