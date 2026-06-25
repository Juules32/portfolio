export const shutdown = $state<{ active: boolean }>({ active: false });

export function setShutdown(value: boolean): void {
    shutdown.active = value;
}
