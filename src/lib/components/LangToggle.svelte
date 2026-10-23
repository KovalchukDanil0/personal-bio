<script lang="ts">
	import { m } from "#lib/paraglide/messages.js";
	import { getLocale, locales, setLocale, type Locale } from "#lib/paraglide/runtime.js";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { Button } from ".";

	type Props = Omit<HTMLButtonAttributes, "children">;

	let props: Props = $props();

	const currentLocale = getLocale();

	let title = $state<string>();

	$effect(() => {
		title = m["lang_toggle_title"]({ lang: currentLocale });
	});
</script>

<Button
	{...props}
	{title}
	variant="lang-toggle"
	aria-label={title}
	onclick={async () => {
		let locale: Locale = currentLocale === "cs" ? "en" : "cs";

		if (locales.includes(locale)) {
			await setLocale(locale);
		}
	}}
>
	{#if currentLocale === "en"}
		🇺🇸
	{:else if currentLocale === "cs"}
		🇨🇿
	{/if}
</Button>
