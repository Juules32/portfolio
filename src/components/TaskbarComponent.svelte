<script lang="ts">
    import TaskbarAppComponent from './TaskbarAppComponent.svelte';
    import { apps } from '$lib/apps';

    let now = new Date();

    setInterval(() => {
        now = new Date();
    }, 1000);

    $: timeString = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
</script>

<nav class="taskbar outie">

    <div class="taskbar-apps">
        {#each apps as app (app.id)}
            <TaskbarAppComponent app={app} />
        {/each}
    </div>


    <div class="taskbar-corner bordered">
        <a href="https://github.com/Juules32/portfolio">
            <img class="github" src="github.svg" alt="GitHub" />
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
        height: 18px;
    }
</style>
