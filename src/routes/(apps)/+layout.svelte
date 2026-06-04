<script lang="ts">
    import closeIcon from '$lib/assets/icons/close.png';
    import minimizeIcon from '$lib/assets/icons/minimize.png';
    import maximizeIcon from '$lib/assets/icons/maximize.png';

    import { endpointToIcon, endpointToLabel, getEndpoint } from '$lib/utils/endpoint';
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';
    let { children } = $props();

    let title = $derived(endpointToLabel(getEndpoint()));
    let icon = $derived(endpointToIcon(getEndpoint()));

    function close() {
        goto(resolve('/'));
    }

    function toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }
</script>

<section class="window app-window">
    <div class="window-bar">
        {#if icon}
            <img class="window-bar-icon" alt="icon" src={icon} />
        {/if}
        <h2 class="window-bar-title">{title}</h2>
        <div class="window-bar-buttons">
            <button class="window-bar-button outie pressable" type="button" aria-label="Minimize" onclick={close}>
                <img alt="" src={minimizeIcon} />
            </button>
            <button class="window-bar-button outie pressable" type="button" aria-label="Maximize" onclick={toggleFullscreen}>
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
        height: 100%;
        padding: 3px;
        display: flex;
        flex-direction: column;
        gap: 5px;
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
        image-rendering: pixelated;
    }

    .window-bar-title {
        color: var(--color-text-white);
    }

    .window-content {
        padding: 10px;
        background-color: var(--color-bg-light);
        height: 100%;
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
        image-rendering: pixelated;
    }

    .window-bar-button:active img {
        padding-top: 1px;
        padding-left: 1px;
    }
</style>
