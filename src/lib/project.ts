import { frontendTag, rustTag, svelteTag, wasmTag, type Tag } from '$lib/tag'

export interface Project {
    id: string,
    name: string,
    thumbnail: string,
    description: string,
    tags: Tag[],
    hasPage: boolean,
    demoUrl?: string,
    githubUrl?: string,
};

const crabsweeperProject: Project = {
    id: 'crabsweeper',
    name: 'Crabsweeper',
    thumbnail: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUWUoxdkP-ywe9JfxJNn0jyqrYB7xmWlG3KJH7WM5GTfSolWsdsEN90tGgNAk3ac0J4S9s2lvVF_eMiMHpkFUvOXSSJT6y2i1NFScuxoIvAdOvHkP6coaBSn1SFhP1muBfVNbR0NXPsEY/w560-h420-no-gm/?authuser=2',
    description: 'Bahn',
    tags: [rustTag, wasmTag],
    hasPage: false,
    demoUrl: 'https://crabsweeper.juules32.com',
};

const portfolioProject: Project = {
    id: 'portfolio',
    name: 'Portfolio Website',
    thumbnail: 'https://cattime.com/wp-content/uploads/sites/14/2020/10/can-cats-eat-dandelions-1.jpg?w=760',
    description: 'This is just for testing, so let me put a lot of words here... Lorem Ipsum dolor sit amen. This is just for testing, so let me put a lot of words here... Lorem Ipsum dolor sit amen. ',
    tags: [svelteTag, frontendTag],
    hasPage: false,
    githubUrl: 'https://github.com/Juules32/portfolio',
};

const testProject: Project = {
    id: 'test',
    name: 'Test Project',
    thumbnail: 'https://picsum.photos/seed/test-project/520/260',
    description: 'This is just for testing, so let me put a lot of words here... Lorem Ipsum dolor sit amen',
    tags: [svelteTag],
    hasPage: true,
    demoUrl: 'https://portfolio.juules32.com',
    githubUrl: 'https://github.com/Juules32/portfolio',
};

export const projects: Project[] = [
    crabsweeperProject,
    portfolioProject,
    testProject,
];
