<script lang="ts">
    import { music, play, pause, prevTrack, nextTrack, toggleRepeat, toggleShuffle } from '$lib/music.svelte';

    let audio: HTMLAudioElement;

    $effect(() => {
        if (!audio) return;
        const url = music.active?.url;
        if (url && music.playing) {
            audio.play().catch(() => {});
        } else {
            audio.pause();
        }
    });

    function playOrPause() {
        if (music.playing) {
            pause();
        } else {
            play();
        }
    }
</script>

<div class="audio-player">
    <audio bind:this={audio} src={music.active?.url} loop={music.repeat} onended={nextTrack}></audio>
    <button class="pressable" class:innie={music.shuffle} class:outie={!music.shuffle} type="button" aria-label="Shuffle" aria-pressed={music.shuffle} onclick={toggleShuffle}><span class="material-symbols">shuffle</span></button>
    <button class="outie pressable" type="button" aria-label="Previous track" onclick={prevTrack}><span class="material-symbols">skip_previous</span></button>
    <button class="outie pressable" type="button" aria-label="Play" onclick={playOrPause}><span class="material-symbols">{music.playing ? 'pause' : 'play_arrow'}</span></button>
    <button class="outie pressable" type="button" aria-label="Next track" onclick={nextTrack}><span class="material-symbols">skip_next</span></button>
    <button class="pressable" class:innie={music.repeat} class:outie={!music.repeat} type="button" aria-label="Repeat" aria-pressed={music.repeat} onclick={toggleRepeat}><span class="material-symbols">repeat</span></button>
</div>

<style>
    .audio-player {
        margin-left: auto;
        height: 26px;
        display: flex;
        align-items: center;
    }

    .audio-player button {
        height: 26px;
        min-width: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 2px;
        line-height: 1;
    }

    .material-symbols {
        font-family: 'Material Symbols Outlined Variable', sans-serif;
        font-weight: normal;
        font-style: normal;
        font-size: 16px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        /* Render the icon-name text as a ligature glyph. */
        font-feature-settings: 'liga';
        /* FILL 1 = solid icons. */
        font-variation-settings: 'FILL' 1;
    }
</style>
