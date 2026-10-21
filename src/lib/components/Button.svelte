<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	type Variants = "theme-toggle" | "arrow-right";

	export interface Props extends HTMLButtonAttributes {
		children: Snippet;
		variant?: Variants;
	}

	let { children, variant, ...restProps }: Props = $props();
</script>

<button {...restProps} class={variant}>
	{@render children()}
</button>

<style lang="scss">
	button {
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: center;

		border: none;
		color: var(--button-text-color);

		cursor: pointer;

		&.theme-toggle {
			position: absolute;
			top: 0;
			right: 0;

			width: 20%;
			height: 20%;
			border-radius: 100%;
		}
	}
</style>
