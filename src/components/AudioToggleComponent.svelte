<script lang="ts">
    import bar from '$lib/assets/sound/bar.mp3';
    import speakerIcon from '$lib/assets/icons/speaker.png';
    import mutedIcon from '$lib/assets/icons/muted.png';

    let muted = $state(true);
    let audio: HTMLAudioElement;

    function toggle() {
        muted = !muted;
        audio.muted = muted;
        if (!muted) {
            void audio.play();
        }
    }
</script>

<button
    class="audio-toggle"
    type="button"
    onclick={toggle}
    aria-label={muted ? 'Unmute' : 'Mute'}
>
    <audio bind:this={audio} src={bar} autoplay loop muted></audio>
    <img class="audio-state" alt="speaker" src={muted ? mutedIcon : speakerIcon} />
</button>

<style>
    .audio-toggle {
        display: flex;
        align-items: center;
        background: none;
        cursor: pointer;
        image-rendering: pixelated;
    }
</style>
