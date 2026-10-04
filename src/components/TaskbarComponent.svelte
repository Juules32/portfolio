<script lang="ts">
    import TaskbarAppComponent from './TaskbarAppComponent.svelte';
    import AudioPlayerComponent from './AudioPlayerComponent.svelte';
    import StartMenuComponent from './StartMenuComponent.svelte';
    import { taskbarApps } from '$lib/taskbar.svelte';
    import githubIcon from '$lib/assets/icons/github.svg';
    import windowsIcon from '$lib/assets/icons/16x16/windows.png';
    import { crt, toggleCrt } from '$lib/crt.svelte';

    let menuOpen = $state(false);

    let now = $state(new Date());

    $effect(() => {
        const interval = setInterval(() => {
            now = new Date();
        }, 1000);

        return () => clearInterval(interval);
    });

    let timeString = $derived(
        now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        })
    );
</script>

<nav class="taskbar outie">
    <div class="start">
        <button
            class="start-button outie pressable"
            class:innie={menuOpen}
            type="button"
            onclick={() => (menuOpen = !menuOpen)}
        >
            <img src={windowsIcon} alt="" />
            <b class="r10">Start</b>
        </button>
    </div>

    {#if menuOpen}
        <StartMenuComponent close={() => (menuOpen = false)} />
    {/if}

    <div class="taskbar-apps dynamic">
        {#each taskbarApps as app (app.id)}
            <TaskbarAppComponent {app} />
        {/each}
    </div>

    <AudioPlayerComponent />

    <div class="taskbar-corner bordered">
        <button
            class="crt-toggle"
            class:off={!crt.enabled}
            type="button"
            aria-label="CRT effect"
            aria-pressed={crt.enabled}
            title="CRT effect: {crt.enabled ? 'on' : 'off'}"
            onclick={toggleCrt}
        >
            <span class="material-symbols">tv</span>
        </button>

        <a href="https://github.com/Juules32">
            <img class="github" src={githubIcon} alt="GitHub" />
        </a>

        <span class="clock">{timeString}</span>
    </div>

</nav>

<style>
    .taskbar {
        position: relative;
        height: 40px;
        display: flex;
        align-items: center;
    }

    .bordered {
        background: var(--color-bg-grey);
        border: 2px solid var(--color-border-grey);
    }

    .start {
        display: flex;
        align-items: center;
        margin-left: 5px;
    }

    .start-button {
        display: flex;
        align-items: center;
        gap: 4px;
        height: 26px;
        padding: 0 6px;
    }

    .start-button img {
        height: 16px;
    }

    .taskbar-apps {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-left: 5px;
    }

    @media (width <= 890px) {
        .taskbar-apps.dynamic {
            display: none;
        }
    }

    @media (width <= 338px) {
        .taskbar {
            display: none;
        }
    }

    .taskbar-corner {
        height: 26px;
        margin-left: 6px;
        margin-right: 6px;
        display: flex;
        align-items: center;
        gap: 3px;
        padding-left: 3px;
        padding-right: 3px;
    }

    .github {
        display: flex;
        height: 16px;
    }

    .crt-toggle {
        display: flex;
        cursor: pointer;
    }

    .crt-toggle.off {
        opacity: 0.4;
    }

    .material-symbols {
        font-family: 'Material Symbols Outlined Variable', sans-serif;
        font-weight: normal;
        font-style: normal;
        font-size: 16px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        font-feature-settings: 'liga';
        font-variation-settings: 'FILL' 1;
    }
</style>
