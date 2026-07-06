<section>
    <div class="content">
        <h1>Credits &amp; Disclaimer</h1>
        <p>
            This site is a personal portfolio dressed up as a Windows 95/98 desktop.
            I am not affiliated with, endorsed by,
            or connected to Microsoft in any way. &ldquo;Windows&rdquo; and related marks
            belong to Microsoft. They're used here purely to give the page a nostalgic look and feel.
        </p>
        <p>
            The icons come from
            <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL; resolve() is only for internal app routes -->
            <a class="link" href="https://win98icons.alexmeub.com/" target="_blank" rel="noopener noreferrer">win98icons.alexmeub.com</a>,
            an unofficial collection of classic Windows icons.
        </p>
        <p>
            The various GIFs come from
            <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL; resolve() is only for internal app routes -->
            <a class="link" href="https://gifcities.org/" target="_blank" rel="noopener noreferrer">gifcities.org</a>,
            an archive of GIFs from the old GeoCities web.
        </p>
    </div>
</section>

<style>
    section {
        display: flex;
        align-items: flex-start;
    }

    .content {
        max-width: 640px;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .link {
        color: var(--color-blue);
        text-decoration: underline;
    }
</style>
