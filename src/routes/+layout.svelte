<script lang="ts">
    import TaskbarComponent from '$components/TaskbarComponent.svelte';
    import ShutDownComponent from '$components/ShutDownComponent.svelte';
    import CrtOverlayComponent from '$components/CrtOverlayComponent.svelte';
    import './layout.css';
    import { endpointToApp, endpointToLabel, getEndpoint } from '$lib/utils/endpoint';
    import { desktopApps } from '$lib/app';
    import DesktopAppComponent from '$components/DesktopAppComponent.svelte';
    import { page } from '$app/state';
    import userIcon from '$lib/assets/icons/16x16/user.png';
    import errorIcon from '$lib/assets/icons/16x16/error.png';
    import searchGlobeIcon from '$lib/assets/icons/16x16/search-globe.png';

    let { children } = $props();

    let label = $derived(endpointToLabel(getEndpoint()));

    let favicon = $derived.by(() => {
        if (page.error) return errorIcon;
        if (/^\/showcase\/[^/]+\/demo\/?$/.test(getEndpoint())) return searchGlobeIcon;
        return endpointToApp(getEndpoint())?.icon ?? userIcon;
    });
</script>

<svelte:head>
    <title>{label ? label : 'Juules32'}</title>
    <!-- Recreate the link on change; Chrome doesn't reliably pick up favicon updates otherwise. -->
    {#key favicon}
        <link rel="icon" href={favicon} />
    {/key}
</svelte:head>

<div id="layout">
    <main>
        <div id="wallpaper"></div>

        <div class="desktop-apps">
            {#each desktopApps as app (app.id)}
                <DesktopAppComponent {app} />
            {/each}
        </div>

        {@render children()}
    </main>

    <footer>
        <TaskbarComponent />
    </footer>
</div>

<ShutDownComponent />

<CrtOverlayComponent />

<style>
    .desktop-apps {
        position: absolute;
        height: 100%;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 20px 10px;
        gap: 10px;
        width: fit-content;
    }

    #layout {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100dvh;
    }

    main {
        flex: 1;
        min-height: 0;
        width: 100%;
        position: relative;
    }

    #wallpaper {
        position: fixed;
        width: 100vw;
        height: 100dvh;
        background-image: var(--wallpaper);
        background-size: cover;
        background-position: center;
        background-color: var(--color-wallpaper);
        z-index: -2;
    }
</style>
