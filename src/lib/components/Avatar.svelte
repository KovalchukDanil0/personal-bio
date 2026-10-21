<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { ThemeToggle } from ".";

	type Props = HTMLAttributes<EventTarget>;

	let props: Props = $props();
</script>

<div {...props} class="profile-picture">
	<img src="https://avatars.githubusercontent.com/u/105009706?v=4" alt="Profile" />
	<ThemeToggle />
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
