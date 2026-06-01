<script lang="ts">
    import { resolve } from '$app/paths';
    import { getEndpoint } from '$lib/utils/endpoint';

    let { app } = $props();
    let endpoint = $derived(app.endpoint);
    let icon = $derived(app.icon);
    let label = $derived(app.label);

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
    id="taskbar-app"
    class={endpoint === getEndpoint() ? 'innie' : 'outie'}
>
    {#if icon}
        <img id="icon" alt="icon" src={icon} />
    {/if}
    <p id="taskbar-app-text">
        {label}
    </p>
</a>

<style>
    #taskbar-app {
        color: black;
        text-decoration: none;
        padding-left: 0.6rem;
        padding-right: 0.6rem;
        text-align: center;
        height: 26px;
        display: flex;
        align-items: center;
    }

    #icon {
        padding-right: 0.3rem;
        height: 16px;
    }

    #taskbar-app-text {
        height: 16px;
        text-align: center;
        display: flex;
        align-items: center;
    }
</style>
