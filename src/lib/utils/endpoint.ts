import { page, navigating } from '$app/state';
import { apps, unknownApp, type App } from '$lib/app';

export function getEndpoint(): string {
    return page.url.pathname;
}

export function getActiveEndpoint(): string {
    return navigating.to?.url.pathname ?? page.url.pathname;
}

export function endpointStartsWith(endpoint: string, base: string): boolean {
    return endpoint === base || endpoint.startsWith(base + '/');
}

export function endpointToApp(endpoint: string): App | undefined {
    return apps.find((app) => app.endpoint !== undefined && endpointStartsWith(endpoint, app.endpoint));
}

export function endpointToLabel(endpoint: string): string {
    const app = apps.find((a) => a.endpoint === endpoint);
    if (app) {
        return app.label;
    }

    return endpoint
        .split('/')
        .pop()!
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function endpointToIcon(endpoint: string): string {
    const app = endpointToApp(endpoint);
    return app?.icon ?? unknownApp.icon!;
}
