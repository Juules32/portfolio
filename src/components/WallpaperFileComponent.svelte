<script lang="ts">
    import { setWallpaper, type Wallpaper } from '$lib/wallpaper.svelte';
    import cameraIcon from '$lib/assets/icons/48x48/camera.png';

    interface Props {
        wallpaper: Wallpaper;
    }

    let { wallpaper }: Props = $props();
</script>

<button onclick={() => setWallpaper(wallpaper.name)}>
    <img alt={wallpaper.label} src={cameraIcon} />
    <span>{wallpaper.label}.jpg</span>
</button>

<style>
    span {
        text-shadow: 0.5px 0.5px 1px white;
    }

    button {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 90px;
        height: 80px;
        gap: 4px;
        padding: 6px;
        cursor: pointer;
    }

    button:hover {
        background-color: var(--color-hover-desktop-app);
        border: 1px solid var(--color-hover-desktop-app-border);
        padding: 5px;
    }

    button:active {
        background-color: var(--color-click-desktop-app);
    }
</style>
