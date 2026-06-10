import { browser } from '$app/environment';
import { asset } from '$app/paths';

export interface Wallpaper {
    name: string;
    label: string;
}

export const wallpapers: Wallpaper[] = [
    { name: 'snowdrops', label: 'Snowdrops' },
    { name: 'sunset', label: 'Sunset' },
    { name: 'highway', label: 'Highway' },
    { name: 'mushrooms', label: 'Mushrooms' }
];

export const STORAGE_KEY = 'wallpaper';
export const DEFAULT_WALLPAPER = 'snowdrops';

export function wallpaperUrl(name: string): string {
    // asset() is the dedicated API for static/ files: it prefixes the base
    // (or paths.assets) without trailing slashes, yielding a clean
    // /wallpapers/<name>.jpg that matches the inline script in app.html.
    // resolve() is for routes, not assets, and resolve('/') would produce a
    // protocol-relative //wallpapers/... URL.
    return asset(`/wallpapers/${name}.jpg`);
}

// The displayed wallpaper is driven entirely by the --wallpaper CSS variable:
// set before paint by the inline script in app.html (from localStorage), and
// updated here when the user picks a new one. No Svelte render state is
// involved, so there's no hydration mismatch and no flash under prerendering.
export function setWallpaper(name: string) {
    if (browser) {
        localStorage.setItem(STORAGE_KEY, name);
        document.documentElement.style.setProperty('--wallpaper', `url('${wallpaperUrl(name)}')`);
    }
}
