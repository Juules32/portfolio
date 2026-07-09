
export interface SkillGroup {
    subtitle?: string,
    items: string[],
};

export interface SkillSection {
    title: string,
    groups: SkillGroup[],
};

// Order matters!
export const skillSections: SkillSection[] = [
    {
        title: "Preferred languages",
        groups: [
            { items: ["Rust", "Python", "GDScript"] },
        ],
    },
    {
        title: "Other known languages",
        groups: [
            { items: ["C", "C++", "C#", "TypeScript", "Java", "Golang", "F#", "GLSL", "Bash"] },
        ],
    },
    {
        title: "Web dev",
        groups: [
            { items: ["Svelte", "Vue", "Bootstrap", "Tailwind", "React", "Htmx", "Redis", "WebAssembly", "FastAPI", "Dioxus", "Nginx", "Jinja"] },
        ],
    },
    {
        title: "Game dev/Graphics",
        groups: [
            { items: ["OpenGL", "SDL", "Godot", "Pygame", "Twine", "Raylib", "Macroquad"] },
        ],
    },
    {
        title: "Databases",
        groups: [
            { items: ["SQLite", "MySQL", "Postgres", "Psycopg2"] },
        ],
    },
    {
        title: "Data Science and AI/ML",
        groups: [
            { items: ["numpy", "keras", "tensorflow", "matplotlib", "scikit-learn", "scipy"] },
        ],
    },
    {
        title: "Source Control",
        groups: [
            { items: ["Git", "Github"] },
        ],
    },
    {
        title: "Other Skills",
        groups: [
            {
                subtitle: "Music composition, transcription, recording, mixing and mastering",
                items: ["Reaper", "MuseScore", "Audacity"],
            },
            {
                subtitle: "Pixel Art, photo editing",
                items: ["Aseprite"],
            },
            {
                subtitle: "Video editing",
                items: ["OpenShot"],
            },
            {
                subtitle: "One-on-one Tutoring",
                items: ["Computer Science, BSc level", "Beginner to intermediate level piano students", "Most high school subjects"],
            },
        ],
    },
    {
        title: "Hobbies",
        groups: [
            { items: ["Playing piano", "Reading", "Chess", "Photography", "Homelab"] },
        ],
    },
];
