<script lang="ts">
    import FileComponent from '$components/FileComponent.svelte';
    import { setWallpaper, wallpaperState, type Wallpaper } from '$lib/wallpaper.svelte';
    import cameraIcon from '$lib/assets/icons/48x48/camera.png';

    interface Props {
        wallpaper: Wallpaper;
    }

    let { wallpaper }: Props = $props();
</script>

<FileComponent
    icon={cameraIcon}
    alt={wallpaper.label}
    label={`${wallpaper.label}.jpg`}
    active={wallpaperState.active === wallpaper.name}
    onClick={() => setWallpaper(wallpaper.name)}
/>
