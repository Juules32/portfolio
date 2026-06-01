<script lang="ts">
    import { resolve, base } from '$app/paths';
    import { page } from '$app/state';
    import TaskbarAppComponent from './TaskbarAppComponent.svelte';
    import { apps } from '$lib/apps';
</script>

<footer id="taskbar" class="outie">
    <nav>
        <svg viewBox="0 0 2 3" aria-hidden="true">
            <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
        </svg>
        <ul>
            <li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
                <a href={resolve('/')}>Home</a>
            </li>
            <li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
                <a href={resolve('/about')}>About</a>
            </li>
        </ul>
        <svg viewBox="0 0 2 3" aria-hidden="true">
            <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
        </svg>
    </nav>


    {#each apps as app (app.id)}
        <TaskbarAppComponent app={app} />
    {/each}


    <div class="corner">
        <a href="https://github.com/sveltejs/kit">
            <img src="{base}/github.svg" alt="GitHub" />
        </a>
    </div>
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
