import type { Pathname } from '$app/types';
import directoryIcon from '$lib/assets/icons/16x16/directory.png';
import errorIcon from '$lib/assets/icons/16x16/error.png';
import openDirectoryIcon from '$lib/assets/icons/16x16/open-directory.png';
import openDirectoryDesktopIcon from '$lib/assets/icons/32x32/open-directory.png';
import directoryDesktopIcon from '$lib/assets/icons/32x32/directory.png';
import recycleBinDesktopIcon from '$lib/assets/icons/32x32/recycle-bin.png';
import crabsweeperDesktopIcon from '$lib/assets/icons/32x32/crabsweeper.png';
import cdDesktopIcon from '$lib/assets/icons/32x32/cd.png';
import cdIcon from '$lib/assets/icons/16x16/cd.png';
import helpBookDesktopIcon from '$lib/assets/icons/32x32/help-book.png';
import helpBookIcon from '$lib/assets/icons/16x16/help-book.png';
import crabsweeperIcon from '$lib/assets/icons/16x16/crabsweeper.png';
import photoDesktopIcon from '$lib/assets/icons/32x32/photo.png';
import photoIcon from '$lib/assets/icons/16x16/photo.png';

export interface App {
    id: string;
    label: string;
    endpoint?: Pathname;
    icon?: string;
    desktopIcon?: string;
};

export const unknownApp: App = {
    id: 'unknown',
    label: 'Unknown Endpoint',
    endpoint: '/???',
    icon: errorIcon
};

export const recycleBinApp: App = {
    id: 'recycleBin',
    label: 'Recycle Bin',
    desktopIcon: recycleBinDesktopIcon
};

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
};

export const musicApp: App = {
    id: 'music',
    label: 'My Music',
    endpoint: '/music',
    icon: cdIcon,
    desktopIcon: cdDesktopIcon
};

export const disclaimerApp: App = {
    id: 'disclaimer',
    label: 'Legal Disclaimer',
    endpoint: '/disclaimer',
    icon: helpBookIcon,
    desktopIcon: helpBookDesktopIcon
};

export const apps: App[] = [
    aboutMeApp,
    showcaseApp,
    wallpapersApp,
    musicApp,
    disclaimerApp,
];

export const startMenuApps: App[] = [
    aboutMeApp,
    showcaseApp,
    wallpapersApp,
    musicApp,
    disclaimerApp,
];

export const initialTaskbarApps: App[] = [
    aboutMeApp,
    showcaseApp,
];

export const desktopApps: App[] = [
    recycleBinApp,
    aboutMeApp,
    showcaseApp,
    wallpapersApp,
    musicApp,
    crabsweeperApp,
];
