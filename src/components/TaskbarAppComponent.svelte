<script lang="ts">
    import { resolve } from '$app/paths';
    import { endpointStartsWith, getActiveEndpoint, getEndpoint } from '$lib/utils/endpoint';

    let { app } = $props();
    let endpoint = $derived(app.endpoint);
    let icon = $derived(app.icon);
    let label = $derived(app.label);
    let active = $derived(endpoint !== undefined && endpointStartsWith(getActiveEndpoint(), endpoint));

    function linkDestination() {
        if (endpoint === getEndpoint()) {
            return '/';
        } else {
            return endpoint;
        }
    }
</script>

<a
    href={resolve(linkDestination())}
    class="pressable"
    class:innie={active}
    class:outie={!active}
>
    {#if icon}
        <img alt="icon" src={icon} />
    {/if}
    <span class="r10">{label}</span>
</a>

<style>
    a {
        padding-left: 6px;
        padding-right: 6px;
        text-align: center;
        height: 26px;
        display: flex;
        align-items: center;
    }

    img {
        margin-right: 4px;
        height: 16px;
    }

    span {
        color: var(--color-text-black);
        height: 16px;
        text-align: center;
        display: flex;
        align-items: center;
    }
</style>
