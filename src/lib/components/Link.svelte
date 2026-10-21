<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	interface Props extends HTMLAnchorAttributes {
		children: Snippet;
	}

	let { children, ...restProps }: Props = $props();
</script>

<a {...restProps} href="mailto:test@gmail.com">{@render children()}</a>

<style lang="scss">
	a {
		text-decoration: none;
		width: 100%;
		text-align: center;

		border-color: gray;
		border-style: solid;
		border-radius: 5px;
		padding: 6px 4px;
	}
</style>
