<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';

    onMount(() => {
        if (!sessionStorage.getItem('desktopVisited')) {
            sessionStorage.setItem('desktopVisited', 'true');

            setTimeout(() => {
                goto(resolve('/about-me'));
            }, 500);
        }
    });
</script>
