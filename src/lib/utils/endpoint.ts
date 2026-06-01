import { page } from '$app/state';
import { apps, desktopApp, unknownApp } from '$lib/apps';

export function endpointToLabel(endpoint: string): string {
    const app = apps.find(app => app.endpoint === endpoint);
    if (app) {
        return app.label;
    }

    if (desktopApp.endpoint === endpoint) {
        return desktopApp.label;
    }

    return endpoint
        .split('/')
        .pop()!
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getEndpoint(): string {
    return page.url.pathname;
}

export function endpointToIcon(endpoint: string): string {
    const app = apps.find(app => app.endpoint === endpoint);
    if (app) {
        return app.icon;
    }

    return unknownApp.icon;
}
