<script lang="ts">
    import TaskbarComponent from '$components/TaskbarComponent.svelte';
    import './layout.css';
    import wallpaper from '$lib/assets/wallpapers/snowdrops.jpg';
    import { endpointToLabel, getEndpoint } from '$lib/utils/endpoint';
    import { apps, recycleBinApp } from '$lib/apps';
    import DesktopAppComponent from '$components/DesktopAppComponent.svelte';

    let { children } = $props();

    let label = $derived(endpointToLabel(getEndpoint()));
</script>

<svelte:head>
    <title>{label}</title>
</svelte:head>

<div id="layout">
    <main>
        <img id="wallpaper" alt="Wallpaper" src={wallpaper} />

        <div class="desktop-apps">
            <DesktopAppComponent app={recycleBinApp} />
            {#each apps as app (app.id)}
                <DesktopAppComponent {app} />
            {/each}
        </div>

        {@render children()}
    </main>

    <footer>
        <TaskbarComponent />
    </footer>
</div>

<style>
    .desktop-apps {
        position: absolute;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        flex: 1;
        padding: 20px 10px;
        gap: 10px;
        width: fit-content;
    }

    #layout {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
    }

    main {
        flex: 1;
        min-height: 0;
        width: 100%;
    }

    #wallpaper {
        position: fixed;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: -2;
    }
</style>
