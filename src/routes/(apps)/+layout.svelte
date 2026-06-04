<script lang="ts">
    import closeIcon from '$lib/assets/icons/close.png';
    import minimizeIcon from '$lib/assets/icons/minimize.png';
    import maximizeIcon from '$lib/assets/icons/maximize.png';

    import { endpointToIcon, endpointToLabel, getEndpoint } from '$lib/utils/endpoint';

    let { children } = $props();

    let title = $derived(endpointToLabel(getEndpoint()));
    let icon = $derived(endpointToIcon(getEndpoint()));
</script>

<section class="window app-window">
    <div class="window-bar">
        {#if icon}
            <img class="window-bar-icon" alt="icon" src={icon} />
        {/if}
        <h2 class="window-bar-title">{title}</h2>
        <div class="window-bar-buttons">
            <img class="window-bar-button outie" alt="minimize" src={minimizeIcon} />
            <img class="window-bar-button outie" alt="maximize" src={maximizeIcon} />
            <img class="window-bar-button outie" alt="close" src={closeIcon} />
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
        object-fit: contain;
    }
</style>
