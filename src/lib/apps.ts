import aboutIcon from '$lib/assets/icons/directory.png';

export const apps = [
	{
		id: 'projects',
		label: 'Projects',
		path: '/projects',
		icon: null
	},
	{
		id: 'about',
		label: 'About',
		path: '/about',
		icon: aboutIcon
	}
] as const;
