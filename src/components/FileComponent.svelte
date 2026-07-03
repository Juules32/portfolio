<script lang="ts">
    interface Props {
        icon: string;
        label: string;
        alt?: string;
        active?: boolean;
        onClick: () => void;
    }

    let { icon, label, alt, active = false, onClick }: Props = $props();
</script>

<button class:active onclick={onClick}>
    <img alt={alt ?? label} src={icon} />
    <span>{label}</span>
</button>

<style>
    span {
        text-shadow: 0.5px 0.5px 1px var(--color-text-white);
        line-height: 1.1;
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

    button:active,
    button.active {
        background-color: var(--color-click-desktop-app);
    }

    button:active span,
    button.active span {
        color: var(--color-text-white);
        text-shadow: 0.5px 0.5px 1px var(--color-text-black);
    }
    
</style>
