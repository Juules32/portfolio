<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';
    import wallpaper from '$lib/assets/wallpaper.png';

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
    <img id="wallpaper" alt="Wallpaper" src={wallpaper} />
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
