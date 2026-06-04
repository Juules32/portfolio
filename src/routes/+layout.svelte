<script lang="ts">
    import TaskbarComponent from '$components/TaskbarComponent.svelte';
    import './layout.css';
    import wallpaper from '$lib/assets/wallpapers/snowdrops.jpg';
    import { endpointToLabel, getEndpoint } from '$lib/utils/endpoint';

    let { children } = $props();

    let label = $derived(endpointToLabel(getEndpoint()));
</script>

<svelte:head>
    <title>{label}</title>
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
        background-color: var(--color-wallpaper);
        isolation: isolate;
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
        z-index: -1;
    }
</style>
