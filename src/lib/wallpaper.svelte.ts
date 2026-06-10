import { browser } from '$app/environment';

import snowdropsWallpaper from '$lib/assets/wallpapers/snowdrops.jpg';
import sunsetWallpaper from '$lib/assets/wallpapers/sunset.jpg';
import highwayWallpaper from '$lib/assets/wallpapers/highway.jpg';
import mushroomsWallpaper from '$lib/assets/wallpapers/mushrooms.jpg';

export interface Wallpaper {
    src: string,
    label: string,
};

export const wallpapers: Wallpaper[] = [
    {
        src: snowdropsWallpaper,
        label: 'Snowdrops',
    },
    {
        src: sunsetWallpaper,
        label: 'Sunset',
    },
    {
        src: highwayWallpaper,
        label: 'Highway',
    },
    {
        src: mushroomsWallpaper,
        label: 'Mushrooms',
    },
];

const STORAGE_KEY = 'wallpaper';

function initialWallpaper(): string {
    if (browser) {
        return localStorage.getItem(STORAGE_KEY) ?? snowdropsWallpaper;
    }
    return snowdropsWallpaper;
}

export const wallpaperState = $state({ current: initialWallpaper() });

export function setWallpaper(wallpaper: string) {
    wallpaperState.current = wallpaper;
    if (browser) {
        localStorage.setItem(STORAGE_KEY, wallpaper);
    }
}
