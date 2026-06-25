<script lang="ts">
    import MusicFileComponent from '$components/MusicFileComponent.svelte';
    import { tracks } from '$lib/music.svelte';
</script>

<section>
    Mention all music is my own

    Mention muting in the bottom right corner (only on non-mobile)

    {#each tracks as track (track.name)}
        <MusicFileComponent {track} />
    {/each}
</section>

<style>
    section {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
</style>
