<script lang="ts">
    interface Props {
        icon: string;
        label: string;
        alt?: string;
        onClick: () => void;
    }

    let { icon, label, alt, onClick }: Props = $props();
</script>

<button onclick={onClick}>
    <img alt={alt ?? label} src={icon} />
    <span>{label}</span>
</button>

<style>
    span {
        text-shadow: 0.5px 0.5px 1px white;
    }

    button {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 90px;
        height: 90px;
        gap: 4px;
        padding: 6px;
        cursor: pointer;
    }

    button:hover {
        background-color: var(--color-hover-desktop-app);
        border: 1px solid var(--color-hover-desktop-app-border);
        padding: 5px;
    }

    button:active {
        background-color: var(--color-click-desktop-app);
    }
</style>
