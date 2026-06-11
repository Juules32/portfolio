<script>
    import ShowcaseProjectComponent from "$components/ShowcaseProjectComponent.svelte";
    import { projects } from "$lib/project";

</script>

<section>
    <div class="project-container">
        {#each projects as project (project.id)}
            <ShowcaseProjectComponent {project} />
        {/each}
    </div>
</section>

<style>
    .project-container {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    @media (max-width: 600px) {
        .project-container {
            justify-content: center;
        }
    }
</style>
