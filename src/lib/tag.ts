
export interface Tag {
    name: string,
    color: string,
};

export const rustTag: Tag = {
    name: 'Rust',
    color: '#dea584',
}

export const svelteTag: Tag = {
    name: "Svelte",
    color: "#ff3e00"
};

export const wasmTag: Tag = {
    name: "WASM",
    color: "#3178c6"
};

export const tags: Tag[] = [
    rustTag,
    svelteTag,
    wasmTag,
];