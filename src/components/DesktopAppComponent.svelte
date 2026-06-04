
<script lang="ts">
    import { resolve } from '$app/paths';
    import type { App } from '$lib/apps';

   	interface Props {
		app: App;
	}

    let { app }: Props = $props();

</script>

{#snippet content()}
    <img alt={app.label} src={app.desktopIcon} />
    <span>{app.label}</span>
{/snippet}

{#if app.endpoint}
    <a class="desktop-app" href={resolve(app.endpoint)}>
        {@render content()}
    </a>
{:else}
    <div class="desktop-app">
        {@render content()}
    </div>
{/if}

<style>
    .desktop-app {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: 70px;
        gap: 4px;
        padding: 5px;
    }

    .desktop-app img {
        width: 32px;
        image-rendering: pixelated;
    }

    .desktop-app span {
        text-align: center;
    }

</style>
