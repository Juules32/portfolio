import { rustTag, svelteTag, wasmTag, type Tag } from '$lib/tag'

import cameraIcon from '$lib/assets/icons/48x48/camera.png';

export interface Project {
    id: string,
    name: string,
    banner: string,
    description: string,
    tags: Tag[],
    hasPage: boolean,
    demoUrl?: string,
};

const crabsweeperProject: Project = {
    id: 'crabsweeper',
    name: 'Crabsweeper',
    banner: cameraIcon,
    description: 'Bahn',
    tags: [rustTag, wasmTag],
    hasPage: false,
    demoUrl: 'https://crabsweeper.juules32.com',
};

const testProject: Project = {
    id: 'test',
    name: 'Test Project',
    banner: cameraIcon,
    description: 'This is just for testing, so let me put a lot of words here... Lorem Ipsum dolor sit amen',
    tags: [svelteTag],
    hasPage: true,
    demoUrl: 'https://portfolio.juules32.com',
};

export const projects: Project[] = [
    crabsweeperProject,
    testProject,
];
