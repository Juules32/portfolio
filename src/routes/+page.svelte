<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';
    import { apps, recycleBinApp } from '$lib/apps';
    import DesktopAppComponent from '$components/DesktopAppComponent.svelte';

    onMount(() => {
        if (!sessionStorage.getItem('desktopVisited')) {
            sessionStorage.setItem('desktopVisited', 'true');
            goto(resolve('/about-me'));
        }
    });
</script>

<svelte:head>
    <title>Desktop</title>
</svelte:head>

<div class="desktop-apps">
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    <DesktopAppComponent app={recycleBinApp} />
    {#each apps as app (app.id)}
        <DesktopAppComponent {app} />
    {/each}
</div>

<style>
    .desktop-apps {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        height: 100%;
        padding: 20px 10px;
        gap: 10px;
        width: fit-content;
    }
</style>
