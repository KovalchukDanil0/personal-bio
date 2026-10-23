<script lang="ts">
	import { setTheme } from "#lib/context.js";
	import "#styles";
	import { MetaTags } from "svelte-meta-tags";

	let { data, children } = $props();
	let { theme } = $derived(data);

	setTheme(() => theme);
</script>

<MetaTags title="Danylo - Bio" />

<main>
	{@render children()}
</main>

<style lang="scss">
	@use "#styles/mixins" as m;

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 25vw;
		gap: 20px;
		width: 100%;
		min-height: 100dvh;

		@include m.screen-small {
			padding: 0;
		}
	}
</style>
