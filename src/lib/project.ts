import { aiTag, artTag, cliTag, cppTag, dataParsingTag, fastAPITag, fsTag, fullstackTag, gameJamTag, gameTag, godotTag, javaTag, machineLearningTag, multiplayerTag, openGLTag, pythonTag, rustTag, shadersTag, svelteTag, toolingTag, vueTag, wasmTag, type Tag } from '$lib/tag'
import asteroidEscortThumbnail from '$lib/assets/thumbnails/asteroid-escort.png'
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
    description: '2D physics-based space mission with base-building mechanics. Escort your base through an asteroid belt to a faraway wormhole while protecting it from aliens of different types.',
    tags: [gameTag, multiplayerTag, shadersTag, godotTag],
    pixelateThumbnail: true,
    demoUrl: 'https://asteroid-escort.juules32.com',
    itchUrl: 'https://albidalbi.itch.io/asteroid-escort',
    githubUrl: 'https://github.com/HalfdanBrage/asteroid-escort',
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
    name: 'Fusion Forge (In development)',
    thumbnail: fusionForgeThumbnail,
    description: 'Deck builder where cards and their effects are combined additively, with an emphasis on emergent gameplay.',
    tags: [gameTag, shadersTag, artTag, godotTag],
    pixelateThumbnail: true,
};

const impressionAnalysisProject: Project = {
    id: 'impression-analysis',
    name: 'Ear Impression Analysis Service',
    thumbnail: impressionAnalysisThumbnail,
    description: 'Automated quality inspection tool. Includes machine learning model trained with labeled data, and a frontend intended for ear specialists. Developed in scrum team for 3Shape Audio.',
    tags: [aiTag, machineLearningTag, toolingTag, fullstackTag, vueTag, fastAPITag, pythonTag],
};

const juulesPlusPlusProject: Project = {
    id: 'juules-plus-plus',
    name: 'Juules Plus Plus',
    thumbnail: juulesPlusPlusThumbnail,
    description: 'UCI compliant Chess engine written in C++ using bitboards. Uses a tree-based search function with many heuristics to optimize performance.',
    tags: [aiTag, toolingTag, cliTag, cppTag, wasmTag],
    demoUrl: 'https://juules-plus-plus.juules32.com',
    githubUrl: 'https://github.com/Juules32/juules-plus-plus',
};

const liminalExplorersProject: Project = {
    id: 'liminal-explorers',
    name: 'Liminal Explorers (In Development)',
    thumbnail: liminalExplorersThumbnail,
    description: 'Online co-op game in 3D with low-res art style. Utilizes ray-traced audio for extra immersion.',
    tags: [gameTag, multiplayerTag, godotTag],
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
    description: 'A not-so-cozy farming game where you have to protect precious potato plants from rodents and plague. Developed in three-person team during Nordic Game Jam 2025.',
    tags: [gameTag, gameJamTag, artTag, godotTag],
    demoUrl: 'https://potato-protecc.juules32.com/',
    itchUrl: 'https://juules32.itch.io/potato-protecc',
};

const proceduralDialogueSystemProject: Project = {
    id: 'procedural-dialogue-system',
    name: 'Procedural Dialogue System',
    thumbnail: proceduralDialogueSystemThumbnail,
    description: 'Dialogue system that parses dialogue files to enable branching dialogue trees, manipulating game state, triggering functions, custom avatars, expressions, and special effects.',
    pixelateThumbnail: true,
    tags: [toolingTag, dataParsingTag, artTag, godotTag],
    demoUrl: 'https://dialogue.juules32.com',
};

const scrabblerProject: Project = {
    id: 'scrabbler',
    name: 'Scrabbler',
    thumbnail: scrabblerThumbnail,
    description: 'Stateless scrabble engine implemented in F#. Can play against a human or another ai following the same protocol.',
    tags: [dataParsingTag, toolingTag, cliTag, fsTag],
    pixelateThumbnail: true,
    githubUrl: 'https://github.com/Juules32/scrabbler',
};

const sisyphus32Project: Project = {
    id: 'sisyphus32',
    name: 'Sisyphus32',
    thumbnail: sisyphus32Thumbnail,
    description: 'Grandmaster-level chess engine with dozens of advanced features. Developed for my bachelor project at the IT University of Copenhagen.',
    tags: [aiTag, toolingTag, cliTag, rustTag, wasmTag],
    demoUrl: 'https://sisyphus32.juules32.com',
    githubUrl: 'https://github.com/Juules32/sisyphus32',
    cratesUrl: 'https://crates.io/crates/sisyphus32'
};

// Order matters!
export const projects: Project[] = [
    sisyphus32Project,
    asteroidEscortProject,
    pokelinkProject,
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
