<script lang="ts">
    import LoadingComponent from '$components/LoadingComponent.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<section>
    <LoadingComponent loadTime={800} fill>
        <iframe class="innie" title="Demo" src={data.project.demoUrl}></iframe>
    </LoadingComponent>
</section>

<style>
    /* Bleed past the window-content padding so the demo fills the whole window. */
    section {
        width: calc(100% + 20px * 2);
        height: calc(100% + 20px);
        margin: -20px;
    }

    iframe {
        display: block; /* Hide any scrollbar */
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
    }
</style>
