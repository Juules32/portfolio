<script lang="ts">
    import FileComponent from '$components/FileComponent.svelte';
    import { setMusic, music, type Track } from '$lib/music.svelte';
    import cdIcon from '$lib/assets/icons/48x48/cd.png';

    interface Props {
        track: Track;
    }

    let { track }: Props = $props();
</script>

<FileComponent
    icon={cdIcon}
    alt={track.label}
    label={`${track.label}.mp3`}
    active={music.active?.name === track.name}
    onClick={() => setMusic(track)}
/>
