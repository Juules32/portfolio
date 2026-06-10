<script lang="ts">
    import WallpaperFileComponent from '$components/WallpaperFileComponent.svelte';
    import { wallpapers}  from '$lib/wallpaper.svelte';
</script>

<section>
    {#each wallpapers as wallpaper (wallpaper)}
        <WallpaperFileComponent {wallpaper} />
    {/each}
</section>

<style>
    section {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
</style>
