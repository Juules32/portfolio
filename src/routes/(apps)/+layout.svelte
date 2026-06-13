<script lang="ts">
    import AppWindow from '$components/AppWindow.svelte';
    import closeIcon from '$lib/assets/icons/12x12/close.png';
    import minimizeIcon from '$lib/assets/icons/12x12/minimize.png';
    import maximizeIcon from '$lib/assets/icons/12x12/maximize.png';
    import backIcon from '$lib/assets/icons/12x12/back.png';
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
    import { closeTaskbarApp } from '$lib/taskbar.svelte';
    import { endpointToApp, getEndpoint } from '$lib/utils/endpoint';

    let { children } = $props();

    // Number of real path segments, ignoring layout groups like (apps).
    // Depth 1 (e.g. /showcase) is a top-level app; anything deeper is a sub-page.
    let isSubPage = $derived(
        (page.route.id ?? '')
            .split('/')
            .filter((segment) => segment && !segment.startsWith('('))
            .length > 1
    );

    function minimize() {
        goto(resolve('/'));
    }

    function close() {
        const app = endpointToApp(getEndpoint());
        if (app) {
            closeTaskbarApp(app);
        }
        goto(resolve('/'));
    }

    function back() {
        history.back();
    }
</script>

<AppWindow>
    {#snippet buttons({ toggleWindowed })}
        {#if isSubPage}
            <button class="window-bar-button outie pressable" type="button" aria-label="Back" onclick={back}>
                <img alt="" src={backIcon} />
            </button>
        {:else}
            <button class="window-bar-button outie pressable" type="button" aria-label="Minimize" onclick={minimize}>
                <img alt="" src={minimizeIcon} />
            </button>
            <button class="window-bar-button outie pressable" type="button" aria-label="Maximize" onclick={toggleWindowed}>
                <img alt="" src={maximizeIcon} />
            </button>
            <button class="window-bar-button outie pressable" type="button" aria-label="Close" onclick={close}>
                <img alt="" src={closeIcon} />
            </button>
        {/if}
    {/snippet}
    {@render children()}
</AppWindow>
