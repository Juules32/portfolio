import directoryIcon from '$lib/assets/icons/directory.png';
import errorIcon from '$lib/assets/icons/error.png';
import openDirectoryIcon from '$lib/assets/icons/open-directory.png';

interface App {
    id: string;
    label: string;
    endpoint: string;
    icon: string;
}

export const apps: App[] = [
	{
		id: 'projects',
		label: 'Projects',
		endpoint: '/projects',
		icon: openDirectoryIcon
	},
	{
		id: 'about',
		label: 'About',
		endpoint: '/about',
		icon: directoryIcon
	}
] as const;

export const unknownApp: App = {
    id: 'unknown',
    label: 'Unknown Endpoint',
    endpoint: '/???',
    icon: errorIcon
} as const;
