import { initialTaskbarApps, type App } from '$lib/app';

export const taskbarApps = $state<App[]>(initialTaskbarApps);

export function openTaskbarApp(app: App) {
    if (!taskbarApps.some((a) => a.id === app.id)) {
        taskbarApps.push(app);
    }
}

export function closeTaskbarApp(app: App) {
    const index = taskbarApps.findIndex((a) => a.id === app.id);
    if (index !== -1) {
        taskbarApps.splice(index, 1);
    }
}
