<script lang="ts">
    import { resolve } from '$app/paths';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<section>
    <a href={resolve('/showcase')}>Go Back</a>
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

    a {
        height: 20px;
        width: fit-content;
    }

    iframe {
        flex: 1;
        width: 100%;
        min-height: 0;
        border: none;
        outline: none;
    }
</style>
