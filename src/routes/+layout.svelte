<script lang="ts">
    import TaskbarComponent from '$components/TaskbarComponent.svelte';
    import './layout.css';

    let { children } = $props();
</script>

<div>
    <main>
        {@render children()}
    </main>

    <TaskbarComponent />
</div>
