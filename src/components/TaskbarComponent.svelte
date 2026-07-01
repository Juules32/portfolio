<script lang="ts">
    import TaskbarAppComponent from './TaskbarAppComponent.svelte';
    import AudioPlayerComponent from './AudioPlayerComponent.svelte';
    import StartMenuComponent from './StartMenuComponent.svelte';
    import { taskbarApps } from '$lib/taskbar.svelte';
    import githubIcon from '$lib/assets/icons/github.svg';
    import windowsIcon from '$lib/assets/icons/16x16/windows.png';

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
            <b>Start</b>
        </button>
    </div>

    {#if menuOpen}
        <StartMenuComponent close={() => (menuOpen = false)} />
    {/if}

    <div class="taskbar-apps">
        {#each taskbarApps as app (app.id)}
            <TaskbarAppComponent {app} />
        {/each}
    </div>

    <AudioPlayerComponent />

    <div class="taskbar-corner bordered">
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
        gap: 0.5rem;
        margin-left: 0.5rem;
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
</style>
