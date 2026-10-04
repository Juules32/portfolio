import type { Pathname } from '$app/types';

import errorIcon from '$lib/assets/icons/16x16/error.png';
import openDirectoryIcon from '$lib/assets/icons/16x16/open-directory.png';
import magnifyingGlassIcon from '$lib/assets/icons/16x16/magnifying-glass.png';
import cdIcon from '$lib/assets/icons/16x16/cd.png';
import helpBookIcon from '$lib/assets/icons/16x16/help-book.png';
import crabsweeperIcon from '$lib/assets/icons/16x16/crabsweeper.png';
import photoIcon from '$lib/assets/icons/16x16/photo.png';
import toolsIcon from '$lib/assets/icons/16x16/tools.png';

import openDirectoryDesktopIcon from '$lib/assets/icons/48x48/open-directory.png';
import magnifyingGlassDesktopIcon from '$lib/assets/icons/48x48/magnifying-glass.png';
import recycleBinDesktopIcon from '$lib/assets/icons/48x48/recycle-bin.png';
import crabsweeperDesktopIcon from '$lib/assets/icons/48x48/crabsweeper.png';
import cdDesktopIcon from '$lib/assets/icons/48x48/cd.png';
import helpBookDesktopIcon from '$lib/assets/icons/48x48/help-book.png';
import photoDesktopIcon from '$lib/assets/icons/48x48/photo.png';
import toolsDesktopIcon from '$lib/assets/icons/48x48/tools.png';

import openDirectoryStartMenuIcon from '$lib/assets/icons/32x32/open-directory.png';
import magnifyingGlassStartMenuIcon from '$lib/assets/icons/32x32/magnifying-glass.png';
import cdStartMenuIcon from '$lib/assets/icons/32x32/cd.png';
import helpBookStartMenuIcon from '$lib/assets/icons/32x32/help-book.png';
import photoStartMenuIcon from '$lib/assets/icons/32x32/photo.png';
import toolsStartMenuIcon from '$lib/assets/icons/32x32/tools.png';


export interface App {
    id: string;
    label: string;
    endpoint?: Pathname;
    icon?: string;
    desktopIcon?: string;
    startMenuIcon?: string;
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

export const aboutApp: App = {
    id: 'about',
    label: 'About Me',
    endpoint: '/about',
    icon: magnifyingGlassIcon,
    desktopIcon: magnifyingGlassDesktopIcon,
    startMenuIcon: magnifyingGlassStartMenuIcon
};

export const showcaseApp: App = {
    id: 'showcase',
    label: 'Showcase',
    endpoint: '/showcase',
    icon: openDirectoryIcon,
    desktopIcon: openDirectoryDesktopIcon,
    startMenuIcon: openDirectoryStartMenuIcon
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
    desktopIcon: photoDesktopIcon,
    startMenuIcon: photoStartMenuIcon
};

export const musicApp: App = {
    id: 'music',
    label: 'My Music',
    endpoint: '/music',
    icon: cdIcon,
    desktopIcon: cdDesktopIcon,
    startMenuIcon: cdStartMenuIcon
};

export const disclaimerApp: App = {
    id: 'disclaimer',
    label: 'Legal Disclaimer',
    endpoint: '/disclaimer',
    icon: helpBookIcon,
    desktopIcon: helpBookDesktopIcon,
    startMenuIcon: helpBookStartMenuIcon
};

export const apps: App[] = [
    aboutApp,
    showcaseApp,
    wallpapersApp,
    musicApp,
    disclaimerApp,
];

export const startMenuApps: App[] = [
    aboutApp,
    showcaseApp,
    wallpapersApp,
    musicApp,
    disclaimerApp
];

export const initialTaskbarApps: App[] = [
    aboutApp,
    showcaseApp,
];

export const desktopApps: App[] = [
    recycleBinApp,
    aboutApp,
    showcaseApp,
    wallpapersApp,
    musicApp,
    crabsweeperApp
];
