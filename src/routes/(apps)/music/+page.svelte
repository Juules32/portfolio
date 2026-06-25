<script lang="ts">
    import MusicFileComponent from '$components/MusicFileComponent.svelte';
    import { trackGroups } from '$lib/music.svelte';
</script>

<section>
    Mention all music is my own

    Mention audio player in bottom right

    {#each trackGroups as group (group.name)}
        <div class="group">
            <h2>{group.name}</h2>
            <div class="files">
                {#each group.tracks as track (track.name)}
                    <MusicFileComponent {track} />
                {/each}
            </div>
        </div>
    {/each}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    h2 {
        margin-bottom: 6px;
    }

    .files {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
</style>
