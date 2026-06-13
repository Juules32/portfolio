// Module-level reactive state for the fake "shut down" sequence, mirroring
// taskbar.svelte.ts. Wrapped in an object so `active` can be reassigned from
// other modules.
export const shutdown = $state<{ active: boolean }>({ active: false });

export function setShutdown(value: boolean): void {
    shutdown.active = value;
}
