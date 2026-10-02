
<script lang="ts">
    import { resolve } from '$app/paths';
    import type { App } from '$lib/app';

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
        align-items: center;
        flex-direction: column;
        width: 96px;
        height: 86px;
        gap: 4px;
        padding: 6px;
    }

    a:hover {
        background-color: var(--color-hover-desktop-app);
        border: 1px solid var(--color-hover-desktop-app-border);
        padding: 5px;
    }

    a:active {
        background-color: var(--color-click-desktop-app);
    }

    .desktop-app img {
        width: 48px;
    }

    .desktop-app span {
        text-align: center;
        color: var(--color-text-white);
        text-shadow: 1px 1px 0px black;
    }
</style>
