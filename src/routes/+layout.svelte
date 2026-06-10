<script lang="ts">
    import TaskbarComponent from '$components/TaskbarComponent.svelte';
    import './layout.css';
    import { endpointToApp, endpointToLabel, getEndpoint } from '$lib/utils/endpoint';
    import { desktopApps } from '$lib/apps';
    import DesktopAppComponent from '$components/DesktopAppComponent.svelte';
    import computerIcon from '$lib/assets/icons/16x16/computer.png';

    let { children } = $props();

    let label = $derived(endpointToLabel(getEndpoint()));

    let favicon = $derived(endpointToApp(getEndpoint())?.icon ?? computerIcon);
</script>

<svelte:head>
    <title>Portfolio{label ? ' - ' + label : ''}</title>
    <link rel="icon" href={favicon} />
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
        height: 100vh;
    }

    main {
        flex: 1;
        min-height: 0;
        width: 100%;
        position: relative;
    }

    @media (max-width: 600px) {
        footer {
            display: none;
        }
    }

    #wallpaper {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-image: var(--wallpaper);
        background-size: cover;
        background-position: center;
        z-index: -2;
    }
</style>
