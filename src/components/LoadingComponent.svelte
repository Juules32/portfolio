<script lang="ts">
    let { children, loadTime = 1000, loadOnceId = null } = $props();

    const BAR_WIDTH = 12;
    const BAR_GAP = 5;

    let outerWidth = $state(0);
    let loading = $state(true);
    let visibleBars = $state(0);

    // n bars + (n-1) gaps should fill 60% of the outer width
    let numBars = $derived(
        Math.floor((outerWidth * 0.6 + BAR_GAP) / (BAR_WIDTH + BAR_GAP))
    );

    $effect(() => {
        if (loadOnceId && sessionStorage.getItem('loaded-' + loadOnceId)) {
            loading = false;
            return;
        }

        if (numBars <= 0) return;

        const interval = setInterval(() => {
            visibleBars += 1;
            if (visibleBars >= numBars) {
                clearInterval(interval);
                if (loadOnceId) {
                    sessionStorage.setItem('loaded-' + loadOnceId, 'true');
                }
                loading = false;
            }
        }, loadTime / numBars);

        return () => clearInterval(interval);
    });
</script>

<div id="outer" class="innie" bind:clientWidth={outerWidth}>
    {@render children()}
    {#if loading}
        <div id="loader">
            <span id="loading-text">Loading...</span>
            <div id="loading-bar-container">
                {#each Array(numBars), i (i)}
                    <div class="loading-bar {i > visibleBars ? 'hidden' : ''}"></div>
                {/each}
            </div>
        </div>
    {/if}
</div>

<style>
    #outer {
        position: relative;
        width: fit-content;
        height: fit-content;
    }

    #loader {
        position: absolute;
        inset: 0;
        background-color: #c0c0c0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    #loading-bar-container {
        display: flex;
        gap: 5px;
        background-color: #808080;
        padding: 2px;
        width: fit-content;
    }

    .loading-bar {
        height: 20px;
        width: 12px;
        background-color: #000080;
    }

    .hidden {
        visibility: hidden;
    }
</style>
