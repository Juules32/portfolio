
export interface Tag {
    name: string,
    color: string,
};

export const rustTag: Tag = {
    name: 'Rust',
    color: '#dea584',
};

export const cppTag: Tag = {
    name: 'C++',
    color: '#00599c',
};

export const multiplayerTag: Tag = {
    name: 'Multiplayer',
    color: '#e84393',
};

export const svelteTag: Tag = {
    name: "Svelte",
    color: "#ff3e00"
};

export const pythonTag: Tag = {
    name: "Python",
    color: "#3776ab"
};

export const fsTag: Tag = {
    name: "F#",
    color: "#378bba"
};

export const fastAPITag: Tag = {
    name: "FastAPI",
    color: "#009688"
};

export const fullstackTag: Tag = {
    name: "Full-stack",
    color: "#6c5ce7"
};

export const wasmTag: Tag = {
    name: "WASM",
    color: "#654ff0"
};

export const godotTag: Tag = {
    name: "Godot",
    color: "#478cbf"
};

export const machineLearningTag: Tag = {
    name: "Machine Learning",
    color: "#f39c12"
};

export const aiTag: Tag = {
    name: "AI",
    color: "#9b59b6"
};

export const gameTag: Tag = {
    name: "Game",
    color: "#fdcb6e"
};

export const gameJamTag: Tag = {
    name: "Game Jam",
    color: "#e74c3c"
};

export const shadersTag: Tag = {
    name: "Shaders",
    color: "#16a085"
};

export const openGLTag: Tag = {
    name: "OpenGL",
    color: "#5586a4"
};

export const vueTag: Tag = {
    name: "Vue",
    color: "#4fc08d"
};

export const javaTag: Tag = {
    name: "Java",
    color: "#ed8b00"
};

export const toolingTag: Tag = {
    name: "Tooling",
    color: "#7f8c8d"
};

export const dataParsingTag: Tag = {
    name: "Data Parsing",
    color: "#27ae60"
};

export const cliTag: Tag = {
    name: "CLI",
    color: "#2d2d2d"
};

export const artTag: Tag = {
    name: "Art",
    color: "#ff7675"
};

// Order matters!
export const tags: Tag[] = [
    // Languages
    rustTag,
    cppTag,
    pythonTag,
    fsTag,
    javaTag,

    // Frameworks & web
    svelteTag,
    vueTag,
    fastAPITag,
    wasmTag,
    fullstackTag,

    // Engines & graphics
    godotTag,
    shadersTag,
    openGLTag,

    // Concepts
    gameTag,
    multiplayerTag,
    gameJamTag,
    aiTag,
    machineLearningTag,
    toolingTag,
    cliTag,
    dataParsingTag,
    artTag,
];
