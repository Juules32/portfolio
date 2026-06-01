import { page } from '$app/state';

export function endpointToLabel(endpoint: string): string {
    // Can add custom labels here if needed...

    return endpoint
        .split('/')
        .pop()!
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getEndpoint(): string {
    return page.url.pathname;
}

export function endpointToIcon(endpoint: string): string | null {
    console.log(endpoint);
    switch (endpoint) {
        case '/projects':
            return 'directory';
        default:
            return null;
    }
}
