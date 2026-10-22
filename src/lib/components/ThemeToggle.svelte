<script lang="ts">
	import { getTheme } from "#lib/context.js";
	import { setThemeCookie, type Theme } from "#lib/themes.js";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import Moon from "virtual:icons/bx/moon";
	import Sun from "virtual:icons/bx/sun";
	import { Button } from ".";

	type Props = Omit<HTMLButtonAttributes, "children">;

	let props: Props = $props();

	let themeGetter = $state(getTheme());
	let theme = $derived(themeGetter());
	let newTheme = $state<Theme>();

	$effect(() => {
		newTheme = theme === "dark" ? "light" : "dark";
	});
</script>

<Button
	variant="theme-toggle"
	aria-label="Change theme to {newTheme}"
	onclick={() => {
		if (!newTheme) {
			return;
		}

		theme = newTheme;
		setThemeCookie(newTheme);
	}}
	{...props}
>
	{#if theme === "dark"}
		<Moon width="auto" height="auto" />
	{:else}
		<Sun width="auto" height="auto" />
	{/if}
</Button>
