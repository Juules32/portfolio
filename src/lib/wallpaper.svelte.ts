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
export const NO_WALLPAPER = 'none';
export const DEFAULT_WALLPAPER = NO_WALLPAPER;

function resolveActive(raw: string | null): string | null {
    const effective = raw ?? DEFAULT_WALLPAPER;
    return effective === NO_WALLPAPER ? null : effective;
}

export const wallpaperState = $state<{ active: string | null }>({
    active: resolveActive(browser ? localStorage.getItem(STORAGE_KEY) : null),
});

export function wallpaperUrl(name: string): string {
    return asset(`/wallpapers/${name}.jpg`);
}

export function setWallpaper(name: string) {
    if (wallpaperState.active === name) {
        wallpaperState.active = null;
        if (browser) {
            localStorage.setItem(STORAGE_KEY, NO_WALLPAPER);
            document.documentElement.style.removeProperty('--wallpaper');
        }
        return;
    }

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
