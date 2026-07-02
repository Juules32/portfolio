<script lang="ts">
    import CopyrightComponent from '$components/CopyrightComponent.svelte';
    import MusicFileComponent from '$components/MusicFileComponent.svelte';
    import { trackGroups } from '$lib/music.svelte';
</script>

<section>
    <h2>Welcome to my music library</h2>

    <p>
        Play tracks by clicking the files below, or by using the music player in the bottom right of the taskbar.
    </p>
    
    {#each trackGroups as group (group.name)}
        <div>
            <h4>{group.name}</h4>
            <div class="files">
                {#each group.tracks as track (track.name)}
                    <MusicFileComponent {track} />
                {/each}
            </div>
        </div>
    {/each}

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

    h4 {
        margin-bottom: 6px;
    }

    .files {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .copyright {
        border-top: 1px solid var(--color-bg-dark);
        max-width: 350px;
    }
</style>
