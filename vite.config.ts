import { paraglideVitePlugin } from "@inlang/paraglide-js";
import adapter from "@sveltejs/adapter-cloudflare";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import unpluginIcons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		sveltekit({
			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter(),
			preprocess: vitePreprocess(),
		}),
		unpluginIcons({ compiler: "svelte" }),
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/lib/paraglide",
			emitTsDeclarations: true,
		}),
	],

	build: {
		minify: "oxc",
		cssMinify: "lightningcss",
	},
	css: {
		transformer: "lightningcss",
		lightningcss: {
			targets: browserslistToTargets(browserslist(">= 0.25%")),
		},
	},
});
