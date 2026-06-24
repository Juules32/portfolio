
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
    color: '#abcdef',
};

export const multiplayerTag: Tag = {
    name: 'Multiplayer',
    color: '#abcdef',
};

export const svelteTag: Tag = {
    name: "Svelte",
    color: "#ff3e00"
};

export const frontendTag: Tag = {
    name: "Frontend",
    color: "#abcdef"
};

export const backendTag: Tag = {
    name: "Backend",
    color: "#abcdef"
};

export const wasmTag: Tag = {
    name: "WASM",
    color: "#3178c6"
};

export const godotTag: Tag = {
    name: "Godot",
    color: "#abcdef"
};

export const mlTag: Tag = {
    name: "ML",
    color: "#abcdef"
};

export const aiTag: Tag = {
    name: "AI",
    color: "#abcdef"
};

// Order matters!
export const tags: Tag[] = [
    rustTag,
    svelteTag,
    wasmTag,
    frontendTag,
];
