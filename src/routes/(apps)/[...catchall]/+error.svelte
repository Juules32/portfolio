<script lang="ts">
    import { resolve } from "$app/paths";
    import { page } from "$app/stores";
</script>

<section>
    <h1>{$page.status}</h1>
    <h1>{$page.error?.message}</h1>
    <a href={resolve('/')}>Go back to the home page</a>
</section>
