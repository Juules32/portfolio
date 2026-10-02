import { browser } from '$app/environment';

// Explicit user choice ('on' | 'off'), persisted across visits.
export const STORAGE_KEY = 'crt';
// Auto-detected default, cached per session so detection runs at most once.
const SESSION_KEY = 'crt-auto';

function readUserChoice(): boolean | null {
    if (!browser) return null;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw === null ? null : raw === 'on';
    } catch {
        return null;
    }
}

function readSessionDefault(): boolean | null {
    if (!browser) return null;
    try {
        const raw = sessionStorage.getItem(SESSION_KEY);
        return raw === null ? null : raw === 'on';
    } catch {
        return null;
    }
}

function writeSessionDefault(value: boolean) {
    try {
        sessionStorage.setItem(SESSION_KEY, value ? 'on' : 'off');
    } catch {
        // storage unavailable
    }
}

const initial = readUserChoice() ?? readSessionDefault();

export const crt = $state<{ enabled: boolean; decided: boolean }>({
    enabled: initial ?? false,
    decided: initial !== null
});

export function toggleCrt() {
    crt.enabled = !crt.enabled;
    crt.decided = true;
    try {
        localStorage.setItem(STORAGE_KEY, crt.enabled ? 'on' : 'off');
    } catch {
        // storage unavailable
    }
}

// Software rasterizers composite on the CPU, where even a static overlay is costly.
function hasSoftwareRenderer(): boolean {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl', { failIfMajorPerformanceCaveat: true });
        if (!gl) return true;
        const renderer = String(gl.getParameter(gl.RENDERER));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /swiftshader|llvmpipe|softpipe|basic render|software/i.test(renderer);
    } catch {
        return false;
    }
}

function passesStaticChecks(): boolean {
    const nav = navigator as Navigator & {
        deviceMemory?: number;
        connection?: { saveData?: boolean };
    };
    if (nav.connection?.saveData) return false;
    if ((nav.hardwareConcurrency ?? 4) < 4) return false;
    if ((nav.deviceMemory ?? 4) < 4) return false;
    return !hasSoftwareRenderer();
}

export function detectCrtDefault() {
    if (crt.decided) return;

    const capable = passesStaticChecks();
    crt.enabled = capable;
    crt.decided = true;
    writeSessionDefault(capable);
}
