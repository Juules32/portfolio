<script lang="ts">
    import { crt, detectCrtDefault } from '$lib/crt.svelte';

    // One "phosphor pixel" snapped to whole device pixels, so scanlines stay
    // crisp instead of moiréing at fractional scaling (e.g. Windows 125%).
    function updatePx() {
        const dpr = window.devicePixelRatio || 1;
        const px = Math.max(1, Math.round(dpr)) / dpr;
        document.documentElement.style.setProperty('--crt-px', `${px}px`);
    }

    $effect(() => {
        updatePx();
        detectCrtDefault();
    });

    // The text fringing and colour grading in layout.css hang off this class.
    $effect(() => {
        document.documentElement.classList.toggle('crt', crt.enabled);
    });
</script>

<svelte:window onresize={updatePx} />

{#if crt.enabled}
    <div class="crt" aria-hidden="true"></div>
{/if}

<style>
    /* Everything is static and lives on a single layer: it's rasterized once
       and then only composited. No mix-blend-mode, SVG filters or animations
       on purpose. */
    .crt {
        position: fixed;
        inset: 0;
        z-index: 10000;
        pointer-events: none;
        /* Phosphor softness and colour grading for everything underneath.
           Only re-runs when content below changes (idle pages cost nothing),
           and the blur radius is kept tiny so it's a ~3-tap kernel. Applied to
           the backdrop rather than as a filter on #layout, so it covers the
           shutdown screen and doesn't alter fixed-position descendants. */
        -webkit-backdrop-filter: blur(0.1px) contrast(1.05) saturate(1.2) brightness(1.03);
        backdrop-filter: blur(0.1px) contrast(1.05) saturate(1.2) brightness(1.03);
        border-radius: 10px;
        /* Fills the area outside the rounded corners with black. */
        box-shadow: 0 0 0 20px #000;
        background:
            /* vignette */
            radial-gradient(ellipse at center, transparent 65%, rgba(0, 0, 0, 0.15) 100%),
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
