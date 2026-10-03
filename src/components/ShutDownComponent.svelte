<script lang="ts">
    import LoadingComponent from './LoadingComponent.svelte';
    import { shutdown } from '$lib/shutdown.svelte';

    function reboot() {
        location.reload();
    }
</script>

{#if shutdown.active}
    <div class="shutdown">
        <LoadingComponent text="Shutting down..." loadTime={2500}>
            <button class="safe-screen" type="button" onclick={reboot}>
                <p class="r8x3">It's now safe to turn off<br>your computer.</p>
                <p class="hint r8x2">(Click anywhere to restart)</p>
            </button>
        </LoadingComponent>
    </div>
{/if}

<style>
    .shutdown {
        position: fixed;
        inset: 0;
        z-index: 9999;
    }

    .safe-screen {
        width: 100vw;
        height: 100dvh;
        background-color: black;
        color: var(--color-text-shutdown);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 28px;
        padding: 20px;
        text-align: center;
        cursor: pointer;
    }

    .safe-screen p {
        color: var(--color-text-shutdown);
        line-height: 1.6;
    }

    .safe-screen .hint {
        opacity: 0.5;
    }
</style>
