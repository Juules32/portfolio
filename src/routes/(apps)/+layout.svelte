<script lang="ts">
    import { endpointToLabel, getEndpoint } from '$lib/utils/endpoint';

    let { children } = $props();

    let title = $derived(endpointToLabel(getEndpoint()));
</script>

<section id="app" class="outie">
    <h1>{title}</h1>
    {@render children()}
</section>

<style>
    #app {
    }
</style>
