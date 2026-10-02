import { aiTag, artTag, cppTag, fastAPITag, fsTag, fullstackTag, gameJamTag, gameTag, godotTag, inDevelopmentTag, javaTag, multiplayerTag, openGLTag, pythonTag, rustTag, shadersTag, svelteTag, toolingTag, twineTag, vueTag, wasmTag, type Tag } from '$lib/tag'
import asteroidEscortThumbnail from '$lib/assets/thumbnails/asteroid-escort.png'
import nightWardThumbnail from '$lib/assets/thumbnails/night-ward.png'
import computeShaderGameOfLifeThumbnail from '$lib/assets/thumbnails/compute-shader-game-of-life.png'
import crabsweeperThumbnail from '$lib/assets/thumbnails/crabsweeper.png'
import fusionForgeThumbnail from '$lib/assets/thumbnails/fusion-forge.png'
import impressionAnalysisThumbnail from '$lib/assets/thumbnails/impression-analysis.png'
import juulesPlusPlusThumbnail from '$lib/assets/thumbnails/juules-plus-plus.png'
import liminalExplorersThumbnail from '$lib/assets/thumbnails/liminal-explorers.png'
import mapOfDenmarkThumbnail from '$lib/assets/thumbnails/map-of-denmark.png'
import pokelinkThumbnail from '$lib/assets/thumbnails/pokelink.png'
import portfolioThumbnail from '$lib/assets/thumbnails/portfolio.png'
import potatoProteccThumbnail from '$lib/assets/thumbnails/potato-protecc.png'
import proceduralDialogueSystemThumbnail from '$lib/assets/thumbnails/procedural-dialogue-system.png'
import scrabblerThumbnail from '$lib/assets/thumbnails/scrabbler.png'
import sisyphus32Thumbnail from '$lib/assets/thumbnails/sisyphus32.png'

export interface Project {
    id: string,
    name: string,
    thumbnail: string,
    description: string,
    tags: Tag[],
    pixelateThumbnail?: boolean,
    hasPage?: boolean,
    itchUrl?: string,
    demoUrl?: string,
    githubUrl?: string,
    cratesUrl?: string,
};

const asteroidEscortProject: Project = {
    id: 'asteroid-escort',
    name: 'Asteroid Escort',
    thumbnail: asteroidEscortThumbnail,
    description: '2D physics-based space mission with base-building mechanics.',
    tags: [gameTag, shadersTag, godotTag],
    pixelateThumbnail: true,
    demoUrl: 'https://asteroid-escort.juules32.com',
    itchUrl: 'https://albidalbi.itch.io/asteroid-escort',
    githubUrl: 'https://github.com/HalfdanBrage/asteroid-escort',
};

const nightWardProject: Project = {
    id: 'night-ward',
    name: 'NIGHT WARD',
    thumbnail: nightWardThumbnail,
    description: 'Twine game where you play as a hospital patient. Explore the ward\'s purple-lit hallways at night to come to terms with your predicament.',
    tags: [gameTag, twineTag],
    pixelateThumbnail: false,
    itchUrl: 'https://juules32.itch.io/night-ward',
    githubUrl: 'https://github.com/Juules32/night-ward',
};

const computeShaderGameOfLifeProject: Project = {
    id: 'compute-shader-game-of-life',
    name: 'Compute Shader Game of Life',
    thumbnail: computeShaderGameOfLifeThumbnail,
    description: 'Conway\'s Game of Life and visual effects implemented with compute shaders for scalable performance.',
    tags: [shadersTag, openGLTag, cppTag],
    pixelateThumbnail: true,
    githubUrl: 'https://github.com/Juules32/compute-shader-game-of-life',
};

const crabsweeperProject: Project = {
    id: 'crabsweeper',
    name: 'Crabsweeper',
    thumbnail: crabsweeperThumbnail,
    description: 'Minesweeper application with solver and generators that guarantees a grid is solvable.',
    tags: [gameTag, toolingTag, artTag, rustTag, wasmTag],
    pixelateThumbnail: true,
    demoUrl: 'https://crabsweeper.juules32.com',
    githubUrl: 'https://github.com/Juules32/crabsweeper',
};

const fusionForgeProject: Project = {
    id: 'fusion-forge',
    name: 'Fusion Forge',
    thumbnail: fusionForgeThumbnail,
    description: 'Deck builder where cards and their effects are combined additively, with an emphasis on emergent gameplay.',
    tags: [gameTag, shadersTag, artTag, godotTag, inDevelopmentTag],
    pixelateThumbnail: true,
};

const impressionAnalysisProject: Project = {
    id: 'impression-analysis',
    name: 'Ear Impression Analysis Service',
    thumbnail: impressionAnalysisThumbnail,
    description: 'Automated quality inspection tool built on supervised model, and a frontend intended for ear specialists.',
    tags: [aiTag, toolingTag, fullstackTag, vueTag, fastAPITag, pythonTag],
};

const juulesPlusPlusProject: Project = {
    id: 'juules-plus-plus',
    name: 'Juules Plus Plus',
    thumbnail: juulesPlusPlusThumbnail,
    description: 'UCI compliant Chess engine written in C++ using bitboards.',
    tags: [aiTag, toolingTag, cppTag, wasmTag],
    demoUrl: 'https://juules-plus-plus.juules32.com',
    githubUrl: 'https://github.com/Juules32/juules-plus-plus',
};

const liminalExplorersProject: Project = {
    id: 'liminal-explorers',
    name: 'Liminal Explorers',
    thumbnail: liminalExplorersThumbnail,
    description: 'Online co-op game in 3D with low-res art style. Utilizes ray-traced audio for extra immersion.',
    tags: [gameTag, multiplayerTag, godotTag, inDevelopmentTag],
    pixelateThumbnail: true,
    githubUrl: 'https://github.com/Juules32/liminal-explorers',
};

const mapOfDenmarkProject: Project = {
    id: 'map-of-denmark',
    name: 'Map of Denmark',
    thumbnail: mapOfDenmarkThumbnail,
    description: 'Map application with scale-dependent rendering. Parses open street map data on the fly.',
    tags: [fullstackTag, javaTag],
    githubUrl: 'https://github.com/Juules32/map-of-denmark',
};

const pokelinkProject: Project = {
    id: 'pokelink',
    name: 'Pokelink',
    thumbnail: pokelinkThumbnail,
    description: 'Daily browser game where the goal is to find a link between two Pokémon from different games.',
    tags: [fullstackTag, svelteTag, fastAPITag, pythonTag],
    pixelateThumbnail: true,
    demoUrl: 'https://pokelink.juules32.com/',
    githubUrl: 'https://github.com/Juules32/pokelink',
};

const portfolioProject: Project = {
    id: 'portfolio',
    name: 'Portfolio Website',
    thumbnail: portfolioThumbnail,
    description: 'Static web app with a look inspired by the Windows 95 operating system.',
    tags: [svelteTag],
    githubUrl: 'https://github.com/Juules32/portfolio',
};

const potatoProteccProject: Project = {
    id: 'potato-protecc',
    name: 'Potato Protecc',
    thumbnail: potatoProteccThumbnail,
    description: 'A not-so-cozy farming game developed in three-person team for Nordic Game Jam 2025.',
    tags: [gameTag, gameJamTag, artTag, godotTag],
    demoUrl: 'https://potato-protecc.juules32.com/',
    itchUrl: 'https://juules32.itch.io/potato-protecc',
};

const proceduralDialogueSystemProject: Project = {
    id: 'procedural-dialogue-system',
    name: 'Procedural Dialogue System',
    thumbnail: proceduralDialogueSystemThumbnail,
    description: 'Parses dialogue files to enable branching dialogue trees, manipulating game state, custom avatars, etc.',
    pixelateThumbnail: true,
    tags: [toolingTag, artTag, godotTag],
    demoUrl: 'https://dialogue.juules32.com',
};

const scrabblerProject: Project = {
    id: 'scrabbler',
    name: 'Scrabbler',
    thumbnail: scrabblerThumbnail,
    description: 'Stateless scrabble engine implemented in F#. Can play against a human or another ai following the same protocol.',
    tags: [toolingTag, fsTag],
    pixelateThumbnail: true,
    githubUrl: 'https://github.com/Juules32/scrabbler',
};

const sisyphus32Project: Project = {
    id: 'sisyphus32',
    name: 'Sisyphus32',
    thumbnail: sisyphus32Thumbnail,
    description: 'Grandmaster-level chess engine with dozens of advanced features. Developed for my bachelor project.',
    tags: [aiTag, toolingTag, rustTag, wasmTag],
    demoUrl: 'https://sisyphus32.juules32.com',
    githubUrl: 'https://github.com/Juules32/sisyphus32',
    cratesUrl: 'https://crates.io/crates/sisyphus32'
};

// Order matters!
export const projects: Project[] = [
    sisyphus32Project,
    asteroidEscortProject,
    pokelinkProject,
    nightWardProject,
    crabsweeperProject,
    impressionAnalysisProject,
    computeShaderGameOfLifeProject,
    proceduralDialogueSystemProject,
    fusionForgeProject,
    juulesPlusPlusProject,
    liminalExplorersProject,
    mapOfDenmarkProject,
    potatoProteccProject,
    scrabblerProject,
    portfolioProject,
];
