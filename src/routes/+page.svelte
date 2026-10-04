<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';
    import { aboutApp } from '$lib/app';

    onMount(() => {
        if (!sessionStorage.getItem('desktopVisited')) {
            sessionStorage.setItem('desktopVisited', 'true');
            goto(resolve(aboutApp.endpoint ?? '/'));
        }
    });
</script>
