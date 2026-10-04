<script lang="ts">
    import { resolve } from "$app/paths";
    import { page } from "$app/state";
</script>

<svelte:head>
    <title>{page.status}</title>
</svelte:head>

<section>
    <h1>{page.status}</h1>
    <h4>{page.error?.message}</h4>
    <a class="link" href={resolve('/')}>Go back to the home page</a>
</section>
