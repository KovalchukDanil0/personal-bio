<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	type Variants = "theme-toggle" | "lang-toggle" | "arrow-right";

	export interface Props extends HTMLButtonAttributes {
		children: Snippet;
		variant?: Variants;
	}

	let { children, variant, ...restProps }: Props = $props();
</script>

<button
	{...restProps}
	class={[variant, ["lang-toggle", "theme-toggle"].includes(variant ?? "") && "toggle"]}
>
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

		&.toggle {
			position: absolute;

			padding: 6px;
			width: 17%;
			height: 17%;
			border-radius: 100%;
			background-color: var(--background-color);
			box-shadow: 0.3em 0.3em 1.5em black;
		}

		&.theme-toggle {
			top: -4%;
			right: 10%;
		}

		&.lang-toggle {
			top: 12%;
			right: -5%;
		}
	}
</style>
