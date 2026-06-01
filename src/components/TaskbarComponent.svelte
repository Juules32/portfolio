<script lang="ts">
    import TaskbarAppComponent from './TaskbarAppComponent.svelte';
    import { apps } from '$lib/apps';
</script>

<footer>
    <nav id="taskbar" class="outie">

        {#each apps as app (app.id)}
            <TaskbarAppComponent app={app} />
        {/each}


        <div class="corner">
            <a href="https://github.com/sveltejs/kit">
                <img src="github.svg" alt="GitHub" />
            </a>
        </div>

    </nav>
</footer>

<style>
    #taskbar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;

        height: 40px;

        display: flex;
        align-items: center;

    }
</style>
