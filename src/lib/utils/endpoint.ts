import { page, navigating } from '$app/state';
import { apps, unknownApp } from '$lib/apps';

export function endpointToLabel(endpoint: string): string {
    const app = apps.find(app => app.endpoint === endpoint);
    if (app) {
        return app.label;
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

export function getActiveEndpoint(): string {
    return navigating.to?.url.pathname ?? page.url.pathname;
}

export function endpointToIcon(endpoint: string): string {
    const app = apps.find(app => app.endpoint === endpoint);
    if (app) {
        return app.icon;
    }

    return unknownApp.icon;
}
