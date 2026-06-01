import aboutIcon from '$lib/assets/icons/directory.png';

interface App {
    id: string;
    label: string;
    endpoint: string;
    icon: string | null;
}

export const apps: App[] = [
	{
		id: 'projects',
		label: 'Projects',
		endpoint: '/projects',
		icon: null
	},
	{
		id: 'about',
		label: 'About',
		endpoint: '/about',
		icon: aboutIcon
	}
] as const;
