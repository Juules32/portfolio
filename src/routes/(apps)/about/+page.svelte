<script lang="ts">
    import { resolve } from "$app/paths";
    import { skillSections } from "$lib/skills";
    import githubIcon from "$lib/assets/icons/github.svg";
    import linkedinIcon from "$lib/assets/icons/linkedin.svg";
    import mailIcon from "$lib/assets/icons/mail.svg";
    import itchIcon from "$lib/assets/icons/itch-red.svg";
    import catGif from "$lib/assets/gifs/cat.gif";

    const avatar = "https://github.com/Juules32.png";

    const contacts = [
        { label: "GitHub", href: "https://github.com/Juules32", icon: githubIcon},
        { label: "LinkedIn", href: "https://www.linkedin.com/in/juules32", icon: linkedinIcon},
        { label: "Email", href: "mailto:benjaminbyvej@gmail.com", icon: mailIcon},
        { label: "Itch.io", href: "https://juules32.itch.io", icon: itchIcon},
    ];
</script>

<section>
    <div class="left-menu">
        <nav class="contact-panel innie">
            <img class="avatar innie" src={avatar} alt="Juules32" />
            <p class="handle">Juules32</p>
            <p class="contact-heading">Contact Methods</p>
            <div class="contacts">
                {#each contacts as contact (contact.label)}
                    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL; resolve() is only for internal app routes -->
                    <a class="contact-row" href={contact.href} target="_blank" rel="noopener noreferrer" aria-label={contact.label}>
                        <img class="contact-icon" src={contact.icon} alt="" />
                        {contact.label}
                    </a>
                {/each}
            </div>
            <img class="cat-gif" src={catGif} alt="" aria-hidden="true" />
        </nav>
    </div>

    <div class="main">
        <div class="content">
            <h1>About Me</h1>
            <p>
                Hello, and welcome to my portfolio page, dressed up as a Windows 95/98 desktop. My name is
                Benjamin, though I go by <b>Juules32</b> online.
            </p>
            <p>
                Here for the r&eacute;sum&eacute; bits? The
                languages, tools, and other skills I use are laid out
                right below, and my favourite projects are on display over in the
                <a class="link" href={resolve('/(apps)/showcase')}>Showcase</a>.
            </p>
            <p>
                Otherwise, feel free to poke around this virtual OS! It's packed
                with semi-hidden features, and nearly every button, icon, and
                file is just begging to be clicked. You can't break
                anything. (Probably.)
            </p>
            <p class="contact-message">
                For education and professional experience, contact me using the panel on the left.
            </p>
            <p class="contact-message-bottom">
                For education and professional experience, contact me using the panel at the bottom.
            </p>

            <div class="section-container">
                {#each skillSections as section (section.title)}
                    <div class="skill-section outie">
                        <h3>{section.title}</h3>
                        {#each section.groups as group, i (group.subtitle ?? i)}
                            {#if group.subtitle}
                                <h4>{group.subtitle}</h4>
                            {/if}
                            <ul>
                                {#each group.items as item (item)}
                                    <li>{item}</li>
                                {/each}
                            </ul>
                        {/each}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
        align-items: flex-start;
        gap: 20px;
    }

    .left-menu {
        position: sticky;
        top: 0;
        width: 170px;
    }

    .contact-panel {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px;
        gap: 4px;
    }

    .cat-gif {
        position: absolute;
        right: 4px;
        bottom: 0px;
        width: 24px;
        height: 25px;
        object-fit: contain;
    }

    .avatar {
        width: 150px;
        height: 150px;
        object-fit: cover;
        image-rendering: auto;
        padding: 2px;
    }

    .handle {
        font-weight: 700;
        margin: 4px 0 6px;
    }

    .contact-heading {
        width: 100%;
        font-weight: 700;
        text-align: center;
        margin-bottom: 4px;
        padding-bottom: 4px;
    }

    .contacts {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .contact-row {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 5px 4px;
        cursor: pointer;
    }

    .contact-row + .contact-row {
        border-top: 1px solid var(--color-border-grey);
    }

    .contact-row:hover {
        background-color: var(--color-bg-grey);
    }

    .contact-icon {
        flex: 0 0 auto;
        width: 16px;
        height: 16px;
        object-fit: contain;
    }

    .main {
        flex: 1;
    }

    .content {
        max-width: 1000px;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .link {
        color: var(--color-blue);
        text-decoration: underline;
    }

    .section-container {
        columns: 280px;
        column-gap: 16px;
        /* Cancel the trailing margin of the bottom-most card so the gap to the
           contact panel (when stacked) isn't doubled. */
        margin-bottom: -16px;
    }

    .skill-section {
        /* Keep each section whole within a single column. */
        break-inside: avoid;
        /* inline-block + full width avoids cross-browser column-break quirks. */
        display: inline-block;
        width: 100%;
        margin-bottom: 16px;
        padding: 10px;
        background: var(--color-bg-light);
    }

    .skill-section h4 {
        margin-top: 8px;
        margin-bottom: 2px;
    }

    .skill-section ul {
        padding-left: 20px;
    }

    .contact-message-bottom {
        display: none;
    }

    .contact-heading {
        display: none;
    }

    @container app-window (max-width: 500px) or (max-height: 300px) {
        /* Stack the layout and move the contact box below the content. */
        section {
            flex-direction: column;
        }

        .left-menu {
            order: 1;
            position: static;
            width: 100%;
        }

        .avatar, .handle {
            display: none;
        }

        .contact-message {
            display: none;
        }

        .contact-message-bottom {
            display: block;
        }

        .contact-heading {
            display: block;
        }
    }
</style>
