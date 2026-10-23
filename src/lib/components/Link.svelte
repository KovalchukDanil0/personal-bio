<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	type Variants = "bottom-link" | "social-icon";

	interface Props extends Omit<HTMLAnchorAttributes, "target"> {
		children: Snippet;
		newTab?: boolean;
		variant?: Variants | false;
	}

	let { class: className, children, variant, newTab, ...restProps }: Props = $props();
</script>

<a
	{...restProps}
	target={newTab ? "_blank" : "_self"}
	class={[className?.toString(), variant, variant === "bottom-link" && "animate-appear"]}
	>{@render children()}</a
>

<style lang="scss">
	a {
		text-decoration: none;
		width: fit-content;
		text-align: center;

		&:hover {
			color: var(--secondary-color);
		}

		&.bottom-link {
			transition-delay: 0.9s;
			display: flex;
			flex-direction: column;

			&::after {
				content: "˅ ˅ ˅";
				font-weight: bold;

				animation: name;
				animation-duration: 1s;
				animation-iteration-count: infinite;
				animation-timing-function: ease-in;
				animation-direction: alternate;
			}

			@keyframes name {
				0% {
					transform: translateY(0);
				}

				100% {
					transform: translateY(10);
				}
			}
		}

		&.social-icon {
			transition-property: transform;
			transition-duration: 0.5s;
			transition-timing-function: ease;

			width: 1.2em;
			height: 1.2em;

			&:hover {
				transform: scale(1.3);
			}
		}
	}
</style>
