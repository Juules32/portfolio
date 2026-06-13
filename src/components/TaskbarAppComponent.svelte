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
    class={active ? 'innie' : 'outie'}
>
    {#if icon}
        <img alt="icon" src={icon} />
    {/if}
    <span>{label}</span>
</a>

<style>
    a {
        padding-left: 0.6rem;
        padding-right: 0.6rem;
        text-align: center;
        height: 26px;
        display: flex;
        align-items: center;
    }

    img {
        padding-right: 0.3rem;
        height: 16px;
    }

    span {
        color: var(--color-text-black);
        height: 16px;
        text-align: center;
        display: flex;
        align-items: center;
        text-shadow: 0px 0px 10px white;
    }
</style>
