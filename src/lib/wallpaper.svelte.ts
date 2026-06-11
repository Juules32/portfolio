import { browser } from '$app/environment';
import { asset } from '$app/paths';

export interface Wallpaper {
    name: string;
    label: string;
}

export const wallpapers: Wallpaper[] = [
    { name: 'highway', label: 'Highway' },
    { name: 'mushrooms', label: 'Mushrooms' },
    { name: 'snowdrops', label: 'Snowdrops' },
    { name: 'sunset', label: 'Sunset' },
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
// updated here when the user picks a new one.
export function setWallpaper(name: string) {
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
