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
</script>

<Button
	variant="theme-toggle"
	onclick={() => {
		const newTheme: Theme = theme === "dark" ? "light" : "dark";
		theme = newTheme;
		setThemeCookie(newTheme);
	}}
	{...props}
>
	{#if theme === "dark"}
		<Moon />
	{:else}
		<Sun />
	{/if}
</Button>
