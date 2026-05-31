<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { resolve, base } from '$app/paths';

    onMount(() => {
        if (!sessionStorage.getItem('desktopVisited')) {
            sessionStorage.setItem('desktopVisited', 'true');
            goto(resolve('/about'));
        }
    });
</script>

<svelte:head>
    <title>Desktop</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <img id="wallpaper" alt="Wallpaper" src="{base}/wallpaper.png" />
</section>

<style>
    #wallpaper {
        z-index: -10;
        position: fixed;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
</style>
