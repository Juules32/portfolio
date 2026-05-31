<script lang="ts">
    import { page } from '$app/state';

    let { children } = $props();

    let title = $derived(
        page.url.pathname
            .split('/')
            .pop()!
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase())
    );
</script>

<section id="app">
    <h1>{title}</h1>
    {@render children()}
</section>

<style>
    #app {
        background-color: #c0c0c0;
        box-shadow:
            inset 10px 10px 0 #ffffff,
            inset -10px -10px 0 #808080;
    }
</style>
