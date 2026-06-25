import { music } from "$lib/music.svelte";

export const shutdown = $state<{ active: boolean }>({ active: false });

export function setShutdown(value: boolean): void {
    music.active = undefined;
    shutdown.active = value;
}
