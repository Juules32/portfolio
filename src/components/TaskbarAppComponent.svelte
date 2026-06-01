<script lang="ts">
    import { resolve } from "$app/paths";
    import { endpointToLabel, getEndpoint } from "$lib/utils/endpoint";

    let { app } = $props();
    let endpoint = $derived(app.path);
    let icon = $derived(app.icon);
    let label = $derived(endpointToLabel(endpoint));
</script>

<a href={resolve(endpoint)} id="taskbar-app" class="{endpoint === getEndpoint() ? 'innie' : 'outie'}">
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
        padding: 0.4rem 0.6rem;
        text-align: center;
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
