<script>
    import LoadingComponent from "$components/LoadingComponent.svelte";

</script>
<div class="text-column">
    <h1>About this app</h1>

    <p>
        This <i>is</i> a <a href="https://svelte.dev/docs/kit">SvelteKit</a> app. You can make your own by typing
        the <b>following</b> into your command line and following the prompts:
    </p>

    <pre>npx sv create</pre>

    <p>
        The page you're looking at is purely static HTML, with no client-side interactivity needed.
        Because of that, we don't need to load any JavaScript. Try viewing the page's source, or
        opening the devtools network panel and reloading.
    </p>

    <LoadingComponent loadOnceId="cool-blue-square">
        <div style="background-color: blue; height: 200px; width: 30vw;">Hajej</div>
    </LoadingComponent>
</div>
