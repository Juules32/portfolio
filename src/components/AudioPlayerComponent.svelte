<script lang="ts">
    import { music, play, pause, prevTrack, nextTrack } from '$lib/music.svelte';

    let audio: HTMLAudioElement;

    // This component owns the single <audio> element; it mirrors the store's
    // playback state onto it and advances the playlist when a track ends.
    $effect(() => {
        if (!audio) return;
        const url = music.active?.url;
        if (url && music.playing) {
            audio.play().catch(() => {});
        } else {
            audio.pause();
        }
    });

    function stop() {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        pause();
    }
</script>

<div class="audio-player bordered">
    <audio bind:this={audio} src={music.active?.url} onended={nextTrack}></audio>
    <button class="outie pressable" type="button" aria-label="Play" onclick={play}>▶</button>
    <button class="outie pressable" type="button" aria-label="Pause" onclick={pause}>⏸</button>
    <button class="outie pressable" type="button" aria-label="Stop" onclick={stop}>⏹</button>
    <button class="outie pressable" type="button" aria-label="Previous track" onclick={prevTrack}>⏮</button>
    <button class="outie pressable" type="button" aria-label="Next track" onclick={nextTrack}>⏭</button>
</div>

<style>
    .audio-player {
        /* Push the player (and the taskbar-corner after it) to the right edge. */
        margin-left: auto;
        height: 26px;
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 0 3px;
    }

    .audio-player button {
        height: 18px;
        min-width: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 2px;
        font-size: 10px;
        line-height: 1;
    }
</style>
