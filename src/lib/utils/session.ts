export function sessionHasKey(key: string): boolean {
    try {
        return sessionStorage.getItem(key) !== null;
    } catch {
        return false;
    }
}

export function sessionSetKey(key: string) {
    try {
        sessionStorage.setItem(key, 'true');
    } catch {
        // storage unavailable
    }
}
