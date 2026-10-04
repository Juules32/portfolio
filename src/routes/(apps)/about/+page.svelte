<script lang="ts">
    import { resolve } from "$app/paths";
    import { skillSections } from "$lib/skills";
    import githubIcon from "$lib/assets/icons/github.svg";
    import linkedinIcon from "$lib/assets/icons/linkedin.svg";
    import mailIcon from "$lib/assets/icons/mail.svg";
    import itchIcon from "$lib/assets/icons/itch-red.svg";
    import catGif from "$lib/assets/gifs/cat.gif";
    import smileyGif from "$lib/assets/gifs/smiley.gif";
    import avatar from "$lib/assets/avatar.png";
    import { onMount } from "svelte";

    const contacts = [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/benjamin-jensen-476701373/", icon: linkedinIcon},
        { label: "GitHub", href: "https://github.com/Juules32", icon: githubIcon},
        { label: "Itch.io", href: "https://juules32.itch.io", icon: itchIcon},
    ];

    // Email assembled on mount to make web-scraping difficult
    const emailUser = "BenjaminByvej";
    const emailDomain = "gmail.com";

    let email = $state("");
    let mailHref = $state<string | undefined>(undefined);
    let copied = $state(false);
    let copyTimer: ReturnType<typeof setTimeout>;

    const emailLabel = $derived(copied ? "Copied to clipboard!" : email || "Email");

    onMount(() => {
        email = `${emailUser}@${emailDomain}`;
        mailHref = `mailto:${email.toLowerCase()}`;
    });

    async function copyEmail(event: Event) {
        event.preventDefault();
        try {
            await navigator.clipboard.writeText(email);
        } catch {
            // Clipboard API unavailable (ignore)
        }
        copied = true;
        clearTimeout(copyTimer);
        copyTimer = setTimeout(() => (copied = false), 1000);
    }
</script>

<section>
    <div class="left-menu">
        <nav class="contact-panel innie">
            <img class="avatar innie" src={avatar} alt="Juules32" />
            <h2 class="handle">Juules32</h2>
            <p class="contact-heading">Contact Methods</p>
            <div class="contacts">
                <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- mailto is assembled client-side; copy is handled in JS -->
                <a class="contact-row r10" href={mailHref} onclick={copyEmail}>
                    <img class="contact-icon" src={mailIcon} alt="" />
                    <span class="link">{emailLabel}</span>
                </a>
                {#each contacts as contact (contact.label)}
                    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL; resolve() is only for internal app routes -->
                    <a class="contact-row r10" href={contact.href} target="_blank" rel="noopener noreferrer" aria-label={contact.label}>
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
                Hiya! I'm Ben, but I go by Juules32 online. I'm a software developer with a MSc in Games Technology. Welcome to my portfolio website! <img src={smileyGif} alt="" />
            </p>
            <p class="contact-message">
                For education and professional experience, contact me using the panel on the left.
            </p>
            <p class="contact-message-bottom">
                For education and professional experience, contact me using the panel at the bottom.
            </p>
            <p>
                If you're here for the r&eacute;sum&eacute; bits, the
                languages, tools, and other skills I use are laid out
                right below, and my favourite projects are on display over in the
                <a class="link" href={resolve('/(apps)/showcase')}>Showcase</a>.
            </p>

            <div class="section-container">
                {#each skillSections as section (section.title)}
                    <div class="skill-section outie">
                        <h4>{section.title}</h4>
                        {#each section.groups as group, i (group.subtitle ?? i)}
                            {#if group.subtitle}
                                <p class="r10">{group.subtitle}</p>
                            {/if}
                            <ul>
                                {#each group.items as item (item)}
                                    <li class="r10">{item}</li>
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
        width: 214px;
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
        pointer-events: none;
    }

    .avatar {
        width: 170px;
        height: 170px;
        object-fit: cover;
        padding: 2px;
    }

    .handle {
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

    /* The global `*` font-size would otherwise override inheritance. */
    .contact-row span {
        font-family: inherit;
        font-size: inherit;
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

    @container app-window (width <= 500px) or (height <= 320px) {
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
