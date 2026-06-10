import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            fallback: '404.html'
        }),
        alias: {
            $components: 'src/components'
        },
       	paths: {
			base: process.env.BASE_PATH,
			// Absolute (non-relative) asset paths so %sveltekit.assets% resolves
			// the same on every route — needed by the wallpaper inline script in
			// app.html, which builds /wallpapers/<name>.jpg URLs by hand.
			relative: false
		},
		prerender: {
			// Dynamic routes ([...catchall], showcase/[project]/demo) aren't
			// crawlable, so they can't be prerendered — they're served via the
			// 404.html SPA fallback at runtime instead.
			handleUnseenRoutes: 'ignore'
		}
    }
};

export default config;
