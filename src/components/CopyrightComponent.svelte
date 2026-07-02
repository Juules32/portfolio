<script lang="ts">
    const date = new Date();
    let year = date.getFullYear();

    interface Props {
        extraText?: boolean;
    }

    let { extraText = false }: Props = $props();
</script>

<p class="copyright-notice">© {year} Juules32{extraText ? '. All rights reserved.' : ''}</p>

<style>
    .copyright-notice {
        padding: 6px 4px 0;
        color: var(--color-bg-dark);
    }
</style>
