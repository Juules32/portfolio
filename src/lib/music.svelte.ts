// Original Piano Compositions
import adventureAwaits from '$lib/assets/sound/original-piano-compositions/adventure-awaits.mp3';
import originalForgottenRuin from '$lib/assets/sound/original-piano-compositions/forgotten-ruin.mp3';
import bar from '$lib/assets/sound/original-piano-compositions/bar.mp3';
import returningHome from '$lib/assets/sound/original-piano-compositions/returning-home.mp3';
import train from '$lib/assets/sound/original-piano-compositions/train.mp3';
import untitled01 from '$lib/assets/sound/original-piano-compositions/untitled-01.mp3';
import untitled02 from '$lib/assets/sound/original-piano-compositions/untitled-02.mp3';

// Piano Covers
import bachPreludeCMajor from '$lib/assets/sound/piano-covers/bach-prelude-c-major.mp3';
import sakamotoMecanique from '$lib/assets/sound/piano-covers/sakamoto-mecanique.mp3';
import eternaCity from '$lib/assets/sound/piano-covers/eterna-city.mp3';
import eternaForest from '$lib/assets/sound/piano-covers/eterna-forest.mp3';
import herschValentine from '$lib/assets/sound/piano-covers/hersch-valentine.mp3';
import jumpUpSuperstar from '$lib/assets/sound/piano-covers/jump-up-superstar.mp3';
import petersonGiants from '$lib/assets/sound/piano-covers/peterson-giants.mp3';

// Compositions
import otherBar from '$lib/assets/sound/other-compositions/bar.mp3';
import otherForgottenRuin from '$lib/assets/sound/other-compositions/forgotten-ruin.mp3';
import home from '$lib/assets/sound/other-compositions/home.mp3';
import liminalChords from '$lib/assets/sound/other-compositions/liminal-chords.mp3';
import liminalPiano from '$lib/assets/sound/other-compositions/liminal-piano.mp3';
import otherUntitled01 from '$lib/assets/sound/other-compositions/untitled-01.mp3';
import harp from '$lib/assets/sound/other-compositions/harp.mp3';
import quartal from '$lib/assets/sound/other-compositions/quartal.mp3';
import someChords from '$lib/assets/sound/other-compositions/some-chords.mp3';
import reeds from '$lib/assets/sound/other-compositions/reeds.mp3';

// Other Covers
import gameCorner from '$lib/assets/sound/other-covers/game-corner.mp3';

export interface Track {
    name: string;
    label: string;
    url: string;
}

export interface TrackGroup {
    name: string;
    tracks: Track[];
}

export const homeTrack: Track = { name: 'home', label: 'Home', url: home };

export const originalPianoCompositions: Track[] = [
    { name: 'adventure-awaits', label: 'Adventure Awaits', url: adventureAwaits },
    { name: 'forgotten-ruin', label: 'Forgotten Ruin', url: originalForgottenRuin },
    { name: 'bar', label: 'Bar', url: bar },
    { name: 'returning-home', label: 'Returning Home', url: returningHome },
    { name: 'train', label: 'Train', url: train },
    { name: 'untitled-01', label: 'Untitled 01', url: untitled01 },
    { name: 'untitled-02', label: 'Untitled 02', url: untitled02 },
];

export const pianoCovers: Track[] = [
    { name: 'bach-prelude-c-major', label: 'Bach Prelude C Major', url: bachPreludeCMajor },
    { name: 'sakamoto-mecanique', label: 'Sakamoto Mecanique', url: sakamotoMecanique },
    { name: 'eterna-city', label: 'Eterna City', url: eternaCity },
    { name: 'eterna-forest', label: 'Eterna Forest', url: eternaForest },
    { name: 'hersch-valentine', label: 'Hersch Valentine', url: herschValentine },
    { name: 'jump-up-superstar', label: 'Jump up Superstar', url: jumpUpSuperstar },
    { name: 'peterson-giants', label: 'Peterson Giants', url: petersonGiants },
];

export const otherCompositions: Track[] = [
    { name: 'other-bar', label: 'Bar', url: otherBar },
    { name: 'other-forgotten-ruin', label: 'Forgotten Ruin', url: otherForgottenRuin },
    homeTrack,
    { name: 'liminal-chords', label: 'Liminal Chords', url: liminalChords },
    { name: 'liminal-piano', label: 'Liminal Piano', url: liminalPiano },
    { name: 'other-untitled-01', label: 'Untitled 01', url: otherUntitled01 },
    { name: 'harp', label: 'Harp', url: harp },
    { name: 'quartal', label: 'Quartal', url: quartal },
    { name: 'some-chords', label: 'Some Chords', url: someChords },
    { name: 'reeds', label: 'Reeds', url: reeds },
];

export const otherCovers: Track[] = [
    { name: 'game-corner', label: 'Game Corner', url: gameCorner },
];

export const trackGroups: TrackGroup[] = [
    { name: 'Original Piano Compositions', tracks: originalPianoCompositions },
    { name: 'Other Compositions', tracks: otherCompositions },
    { name: 'Piano Covers', tracks: pianoCovers },
    { name: 'Other Covers', tracks: otherCovers },
];

export const tracks: Track[] = trackGroups.flatMap((group) => group.tracks);

export const music = $state<{
    active: Track | undefined;
    playing: boolean;
    repeat: boolean;
    shuffle: boolean;
}>({
    active: undefined,
    playing: false,
    repeat: false,
    shuffle: false,
});

export function toggleRepeat() {
    music.repeat = !music.repeat;
}

export function toggleShuffle() {
    music.shuffle = !music.shuffle;
}

// Select a track and start playing it, e.g. from the Music app.
export function setMusic(track: Track) {
    music.active = track;
    music.playing = true;
}

export function play() {
    if (!music.active) {
        music.active = homeTrack;
    }
    music.playing = true;
}

export function pause() {
    music.playing = false;
}

function currentIndex() {
    return tracks.findIndex((track) => track.name === music.active?.name);
}

// Pick a random track other than the current one (when more than one exists).
function randomTrack(): Track {
    if (tracks.length <= 1) return tracks[0];
    let index;
    do {
        index = Math.floor(Math.random() * tracks.length);
    } while (tracks[index].name === music.active?.name);
    return tracks[index];
}

// Step to the next track: random when shuffling, otherwise sequential with wrap.
export function nextTrack() {
    music.active = music.shuffle ? randomTrack() : tracks[(currentIndex() + 1) % tracks.length];
    music.playing = true;
}

export function prevTrack() {
    music.active = tracks[(currentIndex() - 1 + tracks.length) % tracks.length];
    music.playing = true;
}
