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
    description: 'Bahn',
    tags: [gameTag, multiplayerTag, shadersTag, artTag, godotTag],
    pixelateThumbnail: true,
    demoUrl: 'https://html-classic.itch.zone/html/15778397/index.html',
    itchUrl: 'https://albidalbi.itch.io/asteroid-escort',
    githubUrl: 'https://github.com/HalfdanBrage/asteroid-escort',
};

const computeShaderGameOfLifeProject: Project = {
    id: 'compute-shader-game-of-life',
    name: 'Compute Shader Game of Life',
    thumbnail: computeShaderGameOfLifeThumbnail,
    description: 'Bahn',
    tags: [shadersTag, openGLTag, cppTag],
    pixelateThumbnail: true,
    hasPage: true,
    githubUrl: 'https://github.com/Juules32/compute-shader-game-of-life',
};

const crabsweeperProject: Project = {
    id: 'crabsweeper',
    name: 'Crabsweeper',
    thumbnail: crabsweeperThumbnail,
    description: 'Bahn',
    tags: [gameTag, toolingTag, artTag, rustTag, wasmTag],
    pixelateThumbnail: true,
    demoUrl: 'https://crabsweeper.juules32.com',
    githubUrl: 'https://github.com/Juules32/crabsweeper',
};

const fusionForgeProject: Project = {
    id: 'fusion-forge',
    name: 'Fusion Forge',
    thumbnail: fusionForgeThumbnail,
    description: 'Bahn',
    tags: [gameTag, shadersTag, artTag, godotTag],
    pixelateThumbnail: true,
    hasPage: true,
};

const impressionAnalysisProject: Project = {
    id: 'impression-analysis',
    name: '3Shape Impression Analysis',
    thumbnail: impressionAnalysisThumbnail,
    description: 'Bahn',
    tags: [aiTag, machineLearningTag, toolingTag, fullstackTag, vueTag, fastAPITag, pythonTag],
};

const juulesPlusPlusProject: Project = {
    id: 'juules-plus-plus',
    name: 'Juules Plus Plus',
    thumbnail: juulesPlusPlusThumbnail,
    description: 'Bahn',
    tags: [aiTag, toolingTag, cppTag, wasmTag],
    hasPage: true,
    demoUrl: 'https://juules-plus-plus.juules32.com',
    githubUrl: 'https://github.com/Juules32/juules-plus-plus',
};

const liminalExplorersProject: Project = {
    id: 'liminal-explorers',
    name: 'Liminal Explorers',
    thumbnail: liminalExplorersThumbnail,
    description: 'Bahn',
    tags: [gameTag, multiplayerTag, godotTag],
    pixelateThumbnail: true,
    githubUrl: 'https://github.com/Juules32/liminal-explorers',
};

const mapOfDenmarkProject: Project = {
    id: 'map-of-denmark',
    name: 'Map of Denmark',
    thumbnail: mapOfDenmarkThumbnail,
    description: 'Bahn',
    tags: [fullstackTag, javaTag],
    hasPage: true,
    githubUrl: 'https://github.com/Juules32/map-of-denmark',
};

const pokelinkProject: Project = {
    id: 'pokelink',
    name: 'Pokelink',
    thumbnail: pokelinkThumbnail,
    description: 'Bahn',
    tags: [fullstackTag, svelteTag, fastAPITag, pythonTag],
    pixelateThumbnail: true,
    demoUrl: 'https://pokelink.juules32.com/',
    githubUrl: 'https://github.com/Juules32/pokelink',
};

const portfolioProject: Project = {
    id: 'portfolio',
    name: 'Portfolio Website',
    thumbnail: portfolioThumbnail,
    description: 'Bahn',
    tags: [svelteTag],
    hasPage: true,
    githubUrl: 'https://github.com/Juules32/portfolio',
};

const potatoProteccProject: Project = {
    id: 'potato-protecc',
    name: 'Potato Protecc',
    thumbnail: potatoProteccThumbnail,
    description: 'Bahn',
    tags: [gameTag, gameJamTag, artTag, godotTag],
    demoUrl: 'https://html-classic.itch.zone/html/13333612/index.html',
    itchUrl: 'https://juules32.itch.io/potato-protecc',
};

const proceduralDialogueSystemProject: Project = {
    id: 'procedural-dialogue-system',
    name: 'Procedural Dialogue System',
    thumbnail: proceduralDialogueSystemThumbnail,
    description: 'Bahn',
    pixelateThumbnail: true,
    tags: [toolingTag, dataParsingTag, artTag, godotTag],
    demoUrl: 'https://dialogue.juules32.com',
};

const scrabblerProject: Project = {
    id: 'scrabbler',
    name: 'Scrabbler',
    thumbnail: scrabblerThumbnail,
    description: 'Bahn',
    tags: [dataParsingTag, toolingTag, cliTag, fsTag],
    pixelateThumbnail: true,
    githubUrl: 'https://github.com/Juules32/scrabbler',
};

const sisyphus32Project: Project = {
    id: 'sisyphus32',
    name: 'Sisyphus32',
    thumbnail: sisyphus32Thumbnail,
    description: 'Bahn',
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
    impressionAnalysisProject,
    crabsweeperProject,
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
