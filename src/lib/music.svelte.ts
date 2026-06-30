// Original Piano Compositions
import adventureAwaits from '$lib/assets/sound/original-piano-compositions/adventure-awaits.mp3';
import bar from '$lib/assets/sound/original-piano-compositions/bar.mp3';
import originalForgottenRuin from '$lib/assets/sound/original-piano-compositions/forgotten-ruin.mp3';
import returningHome from '$lib/assets/sound/original-piano-compositions/returning-home.mp3';
import train from '$lib/assets/sound/original-piano-compositions/train.mp3';
import untitled01 from '$lib/assets/sound/original-piano-compositions/untitled-01.mp3';
import untitled02 from '$lib/assets/sound/original-piano-compositions/untitled-02.mp3';

// Piano Covers
import bachPreludeCMajor from '$lib/assets/sound/piano-covers/bach-prelude-c-major.mp3';
import eternaCity from '$lib/assets/sound/piano-covers/eterna-city.mp3';
import eternaForest from '$lib/assets/sound/piano-covers/eterna-forest.mp3';
import herschValentine from '$lib/assets/sound/piano-covers/hersch-valentine.mp3';
import jumpUpSuperstar from '$lib/assets/sound/piano-covers/jump-up-superstar.mp3';
import petersonGiants from '$lib/assets/sound/piano-covers/peterson-giants.mp3';
import sakamotoMecanique from '$lib/assets/sound/piano-covers/sakamoto-mecanique.mp3';

// Other Compositions
import harp from '$lib/assets/sound/other-compositions/harp.mp3';
import home from '$lib/assets/sound/other-compositions/home.mp3';
import liminalChords from '$lib/assets/sound/other-compositions/liminal-chords.mp3';
import liminalPiano from '$lib/assets/sound/other-compositions/liminal-piano.mp3';
import otherBar from '$lib/assets/sound/other-compositions/bar.mp3';
import otherForgottenRuin from '$lib/assets/sound/other-compositions/forgotten-ruin.mp3';
import otherUntitled01 from '$lib/assets/sound/other-compositions/untitled-01.mp3';
import quartal from '$lib/assets/sound/other-compositions/quartal.mp3';
import reeds from '$lib/assets/sound/other-compositions/reeds.mp3';
import someChords from '$lib/assets/sound/other-compositions/some-chords.mp3';

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

// Original Piano Compositions
const adventureAwaitsTrack: Track = { name: 'adventure-awaits', label: 'Adventure Awaits', url: adventureAwaits };
const barTrack: Track = { name: 'bar', label: 'Bar', url: bar };
const forgottenRuinTrack: Track = { name: 'forgotten-ruin', label: 'Forgotten Ruin', url: originalForgottenRuin };
const returningHomeTrack: Track = { name: 'returning-home', label: 'Returning Home', url: returningHome };
const trainTrack: Track = { name: 'train', label: 'Train', url: train };
const untitled01Track: Track = { name: 'untitled-01', label: 'Untitled 01', url: untitled01 };
const untitled02Track: Track = { name: 'untitled-02', label: 'Untitled 02', url: untitled02 };

// Piano Covers
const bachPreludeCMajorTrack: Track = { name: 'bach-prelude-c-major', label: 'Bach Prelude C Major', url: bachPreludeCMajor };
const eternaCityTrack: Track = { name: 'eterna-city', label: 'Eterna City', url: eternaCity };
const eternaForestTrack: Track = { name: 'eterna-forest', label: 'Eterna Forest', url: eternaForest };
const herschValentineTrack: Track = { name: 'hersch-valentine', label: 'Hersch Valentine', url: herschValentine };
const jumpUpSuperstarTrack: Track = { name: 'jump-up-superstar', label: 'Jump up Superstar', url: jumpUpSuperstar };
const petersonGiantsTrack: Track = { name: 'peterson-giants', label: 'Peterson Giants', url: petersonGiants };
const sakamotoMecaniqueTrack: Track = { name: 'sakamoto-mecanique', label: 'Sakamoto Mecanique', url: sakamotoMecanique };

// Other Compositions
const otherBarTrack: Track = { name: 'other-bar', label: 'Bar', url: otherBar };
const otherForgottenRuinTrack: Track = { name: 'other-forgotten-ruin', label: 'Forgotten Ruin', url: otherForgottenRuin };
const harpTrack: Track = { name: 'harp', label: 'Harp', url: harp };
const homeTrack: Track = { name: 'home', label: 'Home', url: home };
const liminalChordsTrack: Track = { name: 'liminal-chords', label: 'Liminal Chords', url: liminalChords };
const liminalPianoTrack: Track = { name: 'liminal-piano', label: 'Liminal Piano', url: liminalPiano };
const quartalTrack: Track = { name: 'quartal', label: 'Quartal', url: quartal };
const reedsTrack: Track = { name: 'reeds', label: 'Reeds', url: reeds };
const someChordsTrack: Track = { name: 'some-chords', label: 'Some Chords', url: someChords };
const otherUntitled01Track: Track = { name: 'other-untitled-01', label: 'Untitled 01', url: otherUntitled01 };

// Other Covers
const gameCornerTrack: Track = { name: 'game-corner', label: 'Game Corner', url: gameCorner };

const defaultTrack: Track = otherForgottenRuinTrack;

const originalPianoCompositions: Track[] = [
    adventureAwaitsTrack,
    barTrack,
    forgottenRuinTrack,
    returningHomeTrack,
    trainTrack,
    untitled01Track,
    untitled02Track,
];

const pianoCovers: Track[] = [
    bachPreludeCMajorTrack,
    eternaCityTrack,
    eternaForestTrack,
    herschValentineTrack,
    jumpUpSuperstarTrack,
    petersonGiantsTrack,
    sakamotoMecaniqueTrack,
];

const otherCompositions: Track[] = [
    otherBarTrack,
    otherForgottenRuinTrack,
    harpTrack,
    homeTrack,
    liminalChordsTrack,
    liminalPianoTrack,
    quartalTrack,
    reedsTrack,
    someChordsTrack,
    otherUntitled01Track,
];

const otherCovers: Track[] = [
    gameCornerTrack,
];

export const trackGroups: TrackGroup[] = [
    { name: 'Piano Compositions', tracks: originalPianoCompositions },
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

export function setMusic(track: Track) {
    music.active = track;
    music.playing = true;
}

export function play() {
    if (!music.active) {
        music.active = defaultTrack;
    }
    music.playing = true;
}

export function pause() {
    music.playing = false;
}

function currentIndex() {
    return tracks.findIndex((track) => track.name === music.active?.name);
}

function randomTrack(): Track {
    if (tracks.length <= 1) return tracks[0];
    let index;
    do {
        index = Math.floor(Math.random() * tracks.length);
    } while (tracks[index].name === music.active?.name);
    return tracks[index];
}

export function nextTrack() {
    if (!music.active) {
        return;
    }
    music.active = music.shuffle ? randomTrack() : tracks[(currentIndex() + 1) % tracks.length];
    music.playing = true;
}

export function prevTrack() {
    if (!music.active) {
        return;
    }
    music.active = tracks[(currentIndex() - 1 + tracks.length) % tracks.length];
    music.playing = true;
}
