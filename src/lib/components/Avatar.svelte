<script lang="ts">
	import { m } from "#lib/paraglide/messages.js";
	import { asset } from "$app/paths";
	import type { HTMLAttributes } from "svelte/elements";
	import { LangToggle, ThemeToggle } from ".";

	type Props = HTMLAttributes<EventTarget>;

	let props: Props = $props();
</script>

<div {...props} class="profile-picture animate-appear animate-grow">
	<img src={asset("me.jpg")} alt={m["profile_img_alt"]()} />

	<ThemeToggle />
	<LangToggle />
</div>

<style lang="scss">
	.profile-picture {
		position: relative;
	}

	img {
		border-radius: 100%;
		border-style: none;
		border-color: unset;
		object-fit: cover;
		width: 20vh;

		box-shadow: 0.3em 0.3em 1em black;
	}
</style>
