<script lang="ts">
    import TaskbarComponent from '$components/TaskbarComponent.svelte';
    import './layout.css';
    import wallpaper from '$lib/assets/wallpaper.png';
    import { endpointToLabel, getEndpoint } from '$lib/utils/endpoint';

    let { children } = $props();

    let label = $derived(endpointToLabel(getEndpoint()));
</script>

<svelte:head>
    <title>{label}</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<div id="layout">
    <img id="wallpaper" alt="Wallpaper" src={wallpaper} />

    <main>
        {@render children()}
    </main>

    <footer>
        <TaskbarComponent />
    </footer>
</div>

<style>
    #layout {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
    }

    main {
        flex: 1;
        width: 100%;
    }

    #wallpaper {
        z-index: -10;
        position: fixed;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
</style>
