<script lang="ts">
    import LoadingComponent from '$components/LoadingComponent.svelte';
import searchGlobeIcon from '$lib/assets/icons/16x16/search-globe.png';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<svelte:head>
    <link rel="icon" href={searchGlobeIcon} />
</svelte:head>

<section>
    <LoadingComponent fill>
        <iframe class="innie" title="Demo" src={data.project.demoUrl}></iframe>
    </LoadingComponent>
</section>

<style>
    /* Bleed past the window-content padding so the demo fills the whole window. */
    section {
        width: calc(100% + 20px);
        height: calc(100% + 20px);
        margin: -10px;
    }

    iframe {
        display: block; /* Hide any scrollbar */
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
    }
</style>
