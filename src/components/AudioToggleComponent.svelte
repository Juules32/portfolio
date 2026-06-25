<script lang="ts">
    import speakerIcon from '$lib/assets/icons/16x16/speaker.png';
    import mutedIcon from '$lib/assets/icons/16x16/muted.png';
    import { music, nextTrack, toggleMuted } from '$lib/music.svelte';

    let audio: HTMLAudioElement;

    $effect(() => {
        if (!audio) return;
        audio.muted = music.muted;
        const url = music.active?.url;
        if (url && !music.muted) {
            void audio.play();
        }
    });
</script>

<button
    type="button"
    onclick={toggleMuted}
    aria-label={music.muted ? 'Unmute' : 'Mute'}
>
    <audio bind:this={audio} src={music.active?.url} onended={nextTrack}></audio>
    <img class="audio-state" alt="speaker" src={music.muted ? mutedIcon : speakerIcon} />
</button>

<style>
    button {
        display: flex;
        align-items: center;
        background: none;
        cursor: pointer;
    }
</style>
