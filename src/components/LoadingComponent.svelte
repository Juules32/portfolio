<script lang="ts">
    import { sessionHasKey, sessionSetKey } from '$lib/utils/session';
    import type { Snippet } from 'svelte';
    import { untrack } from 'svelte';

    interface Props {
        children: Snippet;
        classes: string;
        loadTime?: number;
        loadOnceId?: string | null;
    }

    let { children, classes = '', loadTime = 1000, loadOnceId = null }: Props = $props();

    const BAR_WIDTH = 12;
    const BAR_GAP = 5;
    const FILL_RATIO = 0.6;

    let outerWidth = $state(0);
    let loading = $state(true);
    let visibleBars = $state(1);
    let barCount = $state(0);

    const ready = $derived(outerWidth > 0);

    $effect(() => {
        if (!ready) return;

        // Read everything else untracked so only `ready` is a dependency.
        let interval: ReturnType<typeof setInterval> | undefined;

        untrack(() => {
            if (loadOnceId && sessionHasKey('loaded-' + loadOnceId)) {
                loading = false;
                return;
            }

            // n bars + (n-1) gaps should fill FILL_RATIO of the outer width.
            const count = Math.floor(
                (outerWidth * FILL_RATIO + BAR_GAP) / (BAR_WIDTH + BAR_GAP)
            );
            if (count <= 0) return;
            barCount = count;

            interval = setInterval(() => {
                if (visibleBars >= count) {
                    // All bars filled — now reveal the content.
                    clearInterval(interval);
                    if (loadOnceId) sessionSetKey('loaded-' + loadOnceId);
                    loading = false;
                } else {
                    visibleBars += 1;
                }
            }, loadTime / count);
        });

        return () => clearInterval(interval);
    });
</script>

<div class="{classes} outer" bind:clientWidth={outerWidth}>
    {@render children()}
    {#if loading}
        <div class="loader">
            <span class="loader-text">Loading...</span>
            <div class="loader-bars innie" style="--bar-width: {BAR_WIDTH}px; --bar-gap: {BAR_GAP}px;">
                {#each Array(barCount), i (i)}
                    <div class="loader-bar {i >= visibleBars ? 'hidden' : ''}"></div>
                {/each}
            </div>
        </div>
    {/if}
</div>

<style>
    .outer {
        position: relative;
        width: fit-content;
        height: fit-content;
    }

    .loader {
        position: absolute;
        inset: 0;
        background-color: var(--color-bg-grey);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .loader-bars {
        display: flex;
        gap: var(--bar-gap);
        background-color: var(--color-bg-dark);
        padding: 2px;
        width: fit-content;
    }

    .loader-bar {
        height: 20px;
        width: var(--bar-width);
        background-color: var(--color-blue);
    }

    .hidden {
        visibility: hidden;
    }
</style>
