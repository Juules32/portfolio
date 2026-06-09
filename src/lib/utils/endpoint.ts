import { page, navigating } from '$app/state';
import { allApps, unknownApp } from '$lib/apps';

export function endpointToLabel(endpoint: string): string {
    const app = allApps.find(app => app.endpoint === endpoint);
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
    console.log(page.url.pathname);
    return page.url.pathname;
}

export function getActiveEndpoint(): string {
    return navigating.to?.url.pathname ?? page.url.pathname;
}

export function endpointToIcon(endpoint: string): string {
    const app = allApps.find(app => app.endpoint === endpoint);
    return app?.icon ?? unknownApp.icon!;
}
