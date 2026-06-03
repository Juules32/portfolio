<script lang="ts">
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
</style>
