<script lang="ts">
	import { setTheme } from "$lib/context";
	import "$styles/_index.scss";

	let { data, children } = $props();
	let { theme } = $derived(data);

	setTheme(() => theme);
</script>

<main>
	{@render children()}
</main>

<style lang="scss">
	@use "$styles/variables" as v;

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 25vw;
		gap: 20px;
		width: 100%;
		min-height: calc(100dvh - (2 * v.$body-padding));
	}
</style>
