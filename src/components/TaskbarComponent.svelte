<script lang="ts">
    import TaskbarAppComponent from './TaskbarAppComponent.svelte';
    import AudioToggleComponent from './AudioToggleComponent.svelte';
    import { taskbarApps } from '$lib/taskbar.svelte';
    import githubIcon from '$lib/assets/icons/github.svg';


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

    <div class="taskbar-apps">
        {#each taskbarApps as app (app.id)}
            <TaskbarAppComponent {app} />
        {/each}
    </div>

    <div class="taskbar-corner bordered">
        <AudioToggleComponent />

        <a href="https://github.com/Juules32/portfolio">
            <img class="github" src={githubIcon} alt="GitHub" />
        </a>

        <span class="clock">{timeString}</span>
    </div>

</nav>

<style>
    .taskbar {
        height: 40px;
        display: flex;
        align-items: center;
    }

    .taskbar-apps {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-left: 3px;
    }

    .taskbar-corner {
        height: 26px;
        margin-left: auto;
        margin-right: 3px;
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
