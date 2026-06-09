import type { Pathname } from '$app/types';
import directoryIcon from '$lib/assets/icons/16x16/directory.png';
import errorIcon from '$lib/assets/icons/16x16/error.png';
import openDirectoryIcon from '$lib/assets/icons/16x16/open-directory.png';
import openDirectoryDesktopIcon from '$lib/assets/icons/32x32/open-directory.png';
import directoryDesktopIcon from '$lib/assets/icons/32x32/directory.png';
import recycleBinDesktopIcon from '$lib/assets/icons/32x32/recycle-bin.png';
import crabsweeperDesktopIcon from '$lib/assets/icons/32x32/crabsweeper.png';
import crabsweeperIcon from '$lib/assets/icons/16x16/crabsweeper.png';
import photoDesktopIcon from '$lib/assets/icons/32x32/photo.png';
import photoIcon from '$lib/assets/icons/16x16/photo.png';

export interface App {
    id: string;
    label: string;
    endpoint?: Pathname;
    icon?: string;
    desktopIcon?: string;
}

export const unknownApp: App = {
    id: 'unknown',
    label: 'Unknown Endpoint',
    endpoint: '/???',
    icon: errorIcon
} as const;

export const recycleBinApp: App = {
    id: 'recycleBin',
    label: 'Recycle Bin',
    desktopIcon: recycleBinDesktopIcon
}

export const aboutMeApp: App = {
    id: 'aboutMe',
    label: 'About Me',
    endpoint: '/about-me',
    icon: directoryIcon,
    desktopIcon: directoryDesktopIcon
};

export const showcaseApp: App = {
    id: 'showcase',
    label: 'Showcase',
    endpoint: '/showcase',
    icon: openDirectoryIcon,
    desktopIcon: openDirectoryDesktopIcon
};

export const crabsweeperApp: App = {
    id: 'crabsweeper',
    label: 'Crabsweeper',
    endpoint: '/showcase/crabsweeper/demo',
    icon: crabsweeperIcon,
    desktopIcon: crabsweeperDesktopIcon
};

export const wallpapersApp: App = {
    id: 'wallpapers',
    label: 'Wallpapers',
    endpoint: '/wallpapers',
    icon: photoIcon,
    desktopIcon: photoDesktopIcon
}

export const allApps: App[] = [
    aboutMeApp,
    showcaseApp,
    crabsweeperApp,
    wallpapersApp
] as const;

export const taskbarApps: App[] = [
    aboutMeApp,
    showcaseApp
] as const;

export const desktopApps: App[] = [
    recycleBinApp,
    aboutMeApp,
    showcaseApp,
    wallpapersApp,
    crabsweeperApp
] as const;
