<script lang="ts">
    import { resolve } from "$app/paths";
    import { page } from "$app/state";
    import errorIcon from '$lib/assets/icons/16x16/error.png';
</script>

<svelte:head>
    <title>{page.status}</title>
    <link rel="icon" href={errorIcon} />
</svelte:head>

<section>
    <h1>{page.status}</h1>
    <h2>{page.error?.message}</h2>
    <a href={resolve('/')}>Go back to the home page</a>
</section>
