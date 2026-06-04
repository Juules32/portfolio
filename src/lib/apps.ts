import type { Pathname } from '$app/types';
import directoryIcon from '$lib/assets/icons/directory.png';
import errorIcon from '$lib/assets/icons/error.png';
import openDirectoryIcon from '$lib/assets/icons/open-directory.png';
import openDirectoryDesktopIcon from '$lib/assets/icons/desktop/open-directory.png';
import directoryDesktopIcon from '$lib/assets/icons/desktop/directory.png';
import recycleBinDesktopIcon from '$lib/assets/icons/desktop/recycle-bin.png';


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

export const apps: App[] = [
    {
		id: 'aboutMe',
		label: 'About Me',
		endpoint: '/about-me',
        icon: directoryIcon,
        desktopIcon: directoryDesktopIcon
	},
	{
		id: 'showcase',
		label: 'Showcase',
		endpoint: '/showcase',
        icon: openDirectoryIcon,
        desktopIcon: openDirectoryDesktopIcon
    },
] as const;
