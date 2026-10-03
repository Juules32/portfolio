<script lang="ts">
    import CopyrightComponent from '$components/CopyrightComponent.svelte';
    import WallpaperFileComponent from '$components/WallpaperFileComponent.svelte';
    import { wallpapers} from '$lib/wallpaper.svelte';
    import dslrGif from '$lib/assets/gifs/dslr.gif';
</script>

<section>
    <h1>Welcome to my photo album <img class="dslr-gif" alt="DSLR gif" src={dslrGif} /></h1>

    <p>
        Set your wallpaper by clicking the files below. Click again to remove it.
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

    h1 {
        position: relative;
    }

    .dslr-gif {
        position: absolute;
        top: -11px;
        margin-left: 6px;
    }

    @media (width <= 440px) {
        .dslr-gif {
            display: none;
        }
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
