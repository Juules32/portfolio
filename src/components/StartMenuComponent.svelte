<script lang="ts">
    import { resolve } from '$app/paths';
    import { startMenuApps } from '$lib/app';
    import { setShutdown } from '$lib/shutdown.svelte';
    import shutdownIcon from '$lib/assets/icons/32x32/shutdown.png';


    interface Props {
        close: () => void;
    }

    let { close }: Props = $props();

    function handleShutDown() {
        close();
        setShutdown(true);
    }
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && close()} />

<button class="backdrop" type="button" aria-label="Close menu" onclick={close}></button>

<div class="start-menu outie">
    <div class="thumbnail">
        <span class="bold">Portfolio<b>98</b></span>
    </div>

    <div class="items">
        {#each startMenuApps as app (app.id)}
            {#if app.endpoint}
                <a class="item" href={resolve(app.endpoint)} onclick={close}>
                    {#if app.startMenuIcon}
                        <img src={app.startMenuIcon} alt="" />
                    {/if}
                    <span>{app.label}</span>
                </a>
            {/if}
        {/each}

        <div class="separator"></div>

        <button class="item" type="button" onclick={handleShutDown}>
            <img src={shutdownIcon} alt="" />
            <span>Sh<u>u</u>t Down...</span>
        </button>
    </div>
</div>

<style>
    .backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
    }

    .start-menu {
        position: absolute;
        /* Offset by the taskbar's 2px border so the menu aligns with its outer
           top-left edge (absolute positioning is relative to the padding box). */
        bottom: calc(100% + 2px);
        left: -2px;
        z-index: 1001;
        display: flex;
        min-width: 220px;
    }

    .thumbnail {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 40px;
        padding: 8px 0;
        background: linear-gradient(to top, #000080, #1084d0);
    }

    .thumbnail span {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        white-space: nowrap;
        color: var(--color-text-white);
        font-size: 23px;
        font-family: "R95 Sans 14";
        letter-spacing: 4px;
    }

    .thumbnail b {
        color: var(--color-bg-grey);
        font-size: inherit;
    }

    .items {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 3px;
    }

    .item {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 8px 10px;
        font-size: 13px;
        color: var(--color-text-black);
        cursor: pointer;
    }

    .item:hover {
        background-color: var(--color-blue);
    }

    .item:hover,
    .item:hover span,
    .item:hover span u {
        color: var(--color-text-white);
    }

    .separator {
        margin: 3px 2px;
        border-top: 1px solid var(--color-border-grey);
        border-bottom: 1px solid var(--color-border-white);
    }
</style>
