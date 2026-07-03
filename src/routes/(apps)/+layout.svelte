<script lang="ts">
    import closeIcon from '$lib/assets/icons/12x12/close.png';
    import minimizeIcon from '$lib/assets/icons/12x12/minimize.png';
    import maximizeIcon from '$lib/assets/icons/12x12/maximize.png';
    import backIcon from '$lib/assets/icons/12x12/back.png';
    import { goto, afterNavigate } from '$app/navigation';
    import { resolve } from '$app/paths';
    import { untrack } from 'svelte';
    import { openTaskbarApp, closeTaskbarApp } from '$lib/taskbar.svelte';
    import { endpointToApp, endpointToIcon, endpointToLabel, getEndpoint } from '$lib/utils/endpoint';

    let { children } = $props();

    let title = $derived(endpointToLabel(getEndpoint()));
    let icon = $derived(endpointToIcon(getEndpoint()));

    let windowed = $state(true);

    let windowContent = $state<HTMLDivElement>();

    afterNavigate(() => {
        windowContent?.scrollTo(0, 0);
    });

    let isSubPage = $derived(
        getEndpoint()
            .split('/')
            .filter((segment) => segment) // Hooray JS for needing to filter to get the length
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
        const [, topSegment] = getEndpoint().split('/');
        goto(resolve(isSubPage ? `/${topSegment}` : '/'));
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
        <h4 class="window-bar-title">{title}</h4>
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
    <div class="window-content innie" bind:this={windowContent}>
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

    .app-window {
        background: var(--color-bg-grey);
        border-left: 2px solid var(--color-border-white);
        border-top: 2px solid var(--color-border-white);
        border-bottom: 2px solid var(--color-border-black);
        border-right: 2px solid var(--color-border-black);
    }

    @media (min-width: 601px) {
        .window.windowed {
            position: absolute;
            inset: 0;
            margin: auto;
            width: fit-content;
            height: fit-content;
        }

        .window.windowed .window-content {
            flex: none;
            aspect-ratio: 1.774;
            width: min(100vw - 200px, (100vh - 140px) * 16 / 9);
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
        padding: 20px 20px 0;
        background-color: var(--color-bg-light);
        flex: 1;
        min-height: 0;
        overflow: auto;
        /* Size query container: lets app content respond to the app window's own
           width/height (e.g. showcase's TagFilter) rather than the viewport. */
        container: app-window / size;
    }

    /* Weird bug where chrome drops a scroll container's block-end padding once content
       overflows, so reserve the bottom gap with a spacer that scrolls with the
       content instead of relying on padding-bottom. */
    .window-content::after {
        content: '';
        display: block;
        height: 20px;
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
