<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	interface Props extends Omit<HTMLAnchorAttributes, "target"> {
		children: Snippet;
		newTab?: boolean;
	}

	let { children, newTab, ...restProps }: Props = $props();
</script>

<a {...restProps} target={newTab ? "_blank" : "_self"}>{@render children()}</a>

<style lang="scss">
	a {
		text-decoration: none;
		width: fit-content;
		text-align: center;
	}
</style>
