<script lang="ts">
    import { endpointToIcon, endpointToLabel, getEndpoint } from '$lib/utils/endpoint';

    let { children } = $props();

    let title = $derived(endpointToLabel(getEndpoint()));
    let icon = $derived(endpointToIcon(getEndpoint()));
</script>

<section id="window" class="window">
    <div id="window-bar">
        {#if icon}
            <img id="window-bar-icon" alt="icon" src={icon} />
        {/if}
        <h1>{title}</h1>

    </div>
    <div id="window-content" class="innie">
        {@render children()}
    </div>
</section>

<style>
    #window {
        height: 100%;
        padding: 3px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    #window-bar {
        display: flex;
        background-color: #000080;
        color: white;
        align-items: center;
        height: 24px;
        padding-left: 10px;
    }

    #window-bar-icon {
        padding-right: 5px;
    }

    #window-content {
        padding: 10px;
        background-color: white;
        height: 100%;
    }
</style>
