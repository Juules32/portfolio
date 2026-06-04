import directoryIcon from '$lib/assets/icons/directory.png';
import errorIcon from '$lib/assets/icons/error.png';
import openDirectoryIcon from '$lib/assets/icons/open-directory.png';

interface App {
    id: string;
    label: string;
    endpoint: string;
    icon: string;
}

export const unknownApp: App = {
    id: 'unknown',
    label: 'Unknown Endpoint',
    endpoint: '/???',
    icon: errorIcon
} as const;

export const apps: App[] = [
    {
		id: 'about-me',
		label: 'About Me',
		endpoint: '/about-me',
		icon: directoryIcon
	},
	{
		id: 'showcase',
		label: 'Showcase',
		endpoint: '/showcase',
		icon: openDirectoryIcon
    },
    {
        id: 'what',
        label: '???',
        endpoint: '/what',
        icon: errorIcon
    }
] as const;
