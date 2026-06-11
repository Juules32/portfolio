import { error } from '@sveltejs/kit';
import { projects } from '$lib/project';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    const project = projects.find((p) => p.id === params.project);

    if (!project?.demoUrl) {
        error(404, 'Page not found');
    }

    return { project };
};
