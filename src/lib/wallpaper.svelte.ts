import { browser } from '$app/environment';
import { asset } from '$app/paths';

export interface Wallpaper {
    name: string;
    label: string;
}

export const wallpapers: Wallpaper[] = [
    { name: 'bumblebee', label: 'Bumblebee' },
    { name: 'highway', label: 'Highway' },
    { name: 'mushrooms', label: 'Mushrooms' },
    { name: 'snowdrops', label: 'Snowdrops' },
    { name: 'sunset', label: 'Sunset' },
    { name: 'swan', label: 'Swan' },
];

export const STORAGE_KEY = 'wallpaper';
export const DEFAULT_WALLPAPER = 'snowdrops';

// Reactive name of the currently applied wallpaper, for highlighting the
// selected file. Initialized to match app.html's pre-paint logic.
export const wallpaperState = $state<{ active: string }>({
    active: browser ? (localStorage.getItem(STORAGE_KEY) ?? DEFAULT_WALLPAPER) : DEFAULT_WALLPAPER,
});

export function wallpaperUrl(name: string): string {
    return asset(`/wallpapers/${name}.jpg`);
}

export function setWallpaper(name: string) {
    wallpaperState.active = name;
    if (browser) {
        const url = wallpaperUrl(name);
        localStorage.setItem(STORAGE_KEY, name);

        // Preload the image so the swap happens only once it's decoded
        const img = new Image();
        const apply = () => {
            document.documentElement.style.setProperty('--wallpaper', `url('${url}')`);
        };
        img.onload = apply;
        img.onerror = apply;
        img.src = url;
    }
}
