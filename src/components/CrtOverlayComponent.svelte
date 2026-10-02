<script lang="ts">
    import { crt, detectCrtDefault } from '$lib/crt.svelte';

    // One "phosphor pixel" snapped to whole device pixels, so scanlines stay
    // crisp instead of moiréing at fractional scaling (e.g. Windows 125%).
    let px = $state(1);

    function updatePx() {
        const dpr = window.devicePixelRatio || 1;
        px = Math.max(1, Math.round(dpr)) / dpr;
    }

    $effect(() => {
        updatePx();
        detectCrtDefault();
    });
</script>

<svelte:window onresize={updatePx} />

{#if crt.enabled}
    <div class="crt" style:--crt-px="{px}px" aria-hidden="true"></div>
{/if}

<style>
    /* Everything is static and lives on a single layer: it's rasterized once
       and then only composited, so an idle page costs nothing extra per frame.
       No mix-blend-mode, filters or animations on purpose. */
    .crt {
        position: fixed;
        inset: 0;
        z-index: 10000;
        pointer-events: none;
        border-radius: 10px;
        /* Fills the area outside the rounded corners with black. */
        box-shadow: 0 0 0 20px #000;
        background:
            /* vignette */
            radial-gradient(ellipse at center, transparent 65%, rgba(0, 0, 0, 0.3) 100%),
            /* scanlines */
            repeating-linear-gradient(
                to bottom,
                transparent 0 calc(var(--crt-px) * 2),
                rgba(0, 0, 0, 0.14) calc(var(--crt-px) * 2) calc(var(--crt-px) * 3)
            ),
            /* RGB aperture grille */
            repeating-linear-gradient(
                to right,
                rgba(255, 0, 0, 0.04) 0 var(--crt-px),
                rgba(0, 255, 0, 0.04) var(--crt-px) calc(var(--crt-px) * 2),
                rgba(0, 0, 255, 0.04) calc(var(--crt-px) * 2) calc(var(--crt-px) * 3)
            );
    }

    @media print {
        .crt {
            display: none;
        }
    }
</style>
