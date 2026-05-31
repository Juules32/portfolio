<script lang="ts">
    import FooterComponent from '$components/FooterComponent.svelte';
    import './layout.css';

    let { children } = $props();
</script>

<div>
    <main>
        {@render children()}
    </main>

    <FooterComponent />
</div>
