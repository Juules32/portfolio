import barUrl from '$lib/assets/sound/bar.mp3';

export interface Track {
    name: string;
    label: string;
    url: string;
}

export const tracks: Track[] = [
    { name: 'bar', label: 'Bar', url: barUrl },
    { name: 'short-mid', label: 'Short Clip A', url: 'https://download.samplelib.com/mp3/sample-3s.mp3' },
    { name: 'short-end', label: 'Short Clip B', url: 'https://download.samplelib.com/mp3/sample-6s.mp3' },
];

export const music = $state<{ active: Track | undefined; muted: boolean }>({
    active: undefined,
    muted: true,
});

export function toggleMuted() {
    music.muted = !music.muted;
}

// Select a track and unmute, so picking a song from the Music app starts playing it.
export function setMusic(track: Track) {
    music.active = track;
    music.muted = false;
}

// Advance to the next track, wrapping back to the first so the playlist loops.
export function nextTrack() {
    const index = tracks.findIndex((track) => track.name === music.active?.name);
    music.active = tracks[(index + 1) % tracks.length];
}
