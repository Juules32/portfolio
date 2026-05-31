<script lang="ts">
    import welcomeFallback from '$lib/images/svelte-welcome.png';
    import welcome from '$lib/images/svelte-welcome.webp';

    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';

    onMount(() => {
        console.log('hej');
        if (!sessionStorage.getItem('desktopVisited')) {
            goto(resolve('/about'));
        }
    });
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <h1>
        <span class="welcome">
            <picture>
                <source srcset={welcome} type="image/webp" />
                <img src={welcomeFallback} alt="Welcome" />
            </picture>
        </span>

        to your new<br />SvelteKit app
    </h1>

    <h2>
        try editing <strong>src/routes/+page.svelte</strong>
    </h2>
</section>

<style>
</style>
