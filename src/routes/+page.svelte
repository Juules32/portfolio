<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';
    import { aboutMeApp } from '$lib/app';

    onMount(() => {
        if (!sessionStorage.getItem('desktopVisited')) {
            sessionStorage.setItem('desktopVisited', 'true');
            goto(resolve(aboutMeApp.endpoint ?? '/'));
        }
    });
</script>
