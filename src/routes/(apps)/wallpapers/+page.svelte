<script lang="ts">
    import CopyrightComponent from '$components/CopyrightComponent.svelte';
    import WallpaperFileComponent from '$components/WallpaperFileComponent.svelte';
    import { wallpapers}  from '$lib/wallpaper.svelte';
</script>

<section>
    <h2>Welcome to my photo album</h2>

    <p>
        Set your wallpaper by clicking the files below.
    </p>
    
    <div class="wallpaper-list">
        {#each wallpapers as wallpaper (wallpaper)}
                <WallpaperFileComponent {wallpaper} />
        {/each}
    </div>

    <div class="copyright">
        <CopyrightComponent extraText />
    </div>
    
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .wallpaper-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .copyright {
        border-top: 1px solid var(--color-bg-dark);
        max-width: 350px;
    }
</style>
