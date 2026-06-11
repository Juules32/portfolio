<script lang="ts">
    import searchGlobeIcon from '$lib/assets/icons/16x16/search-globe.png';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<svelte:head>
    <link rel="icon" href={searchGlobeIcon} />
</svelte:head>

<section>
    <iframe class="innie" title="Demo" src={data.project.demoUrl}></iframe>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        width: calc(100% + 20px);
        height: calc(100% + 20px);
        margin: -10px;
    }

    iframe {
        flex: 1;
        width: 100%;
        min-height: 0;
        border: none;
        outline: none;
    }
</style>
