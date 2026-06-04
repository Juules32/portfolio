<script lang="ts">
    import { resolve } from '$app/paths';
    import { getActiveEndpoint, getEndpoint } from '$lib/utils/endpoint';

    let { app } = $props();
    let endpoint = $derived(app.endpoint);
    let icon = $derived(app.icon);
    let label = $derived(app.label);
    let active = $derived(endpoint === getActiveEndpoint());

    function linkDestination() {
        if (endpoint === getEndpoint()) {
            return '/';
        } else {
            return endpoint;
        }
    }
</script>

<a
    href={resolve(linkDestination())}
    class="taskbar-app pressable {active ? 'innie' : 'outie'}"
>
    {#if icon}
        <img class="taskbar-icon" alt="icon" src={icon} />
    {/if}
    <p class="taskbar-app-text">
        {label}
    </p>
</a>

<style>
    .taskbar-app {
        text-decoration: none;
        padding-left: 0.6rem;
        padding-right: 0.6rem;
        text-align: center;
        height: 26px;
        display: flex;
        align-items: center;
    }

    .taskbar-icon {
        padding-right: 0.3rem;
        height: 16px;
        image-rendering: pixelated;
    }

    .taskbar-app-text {
        color: var(--color-text-black);
        height: 16px;
        text-align: center;
        display: flex;
        align-items: center;
    }
</style>
