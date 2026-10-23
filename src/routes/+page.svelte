<script lang="ts">
	import { Avatar, Link, SocialLinks } from "#components";
	import { m } from "#lib/paraglide/messages.js";
</script>

<Avatar />

<div class="info animate-appear">
	<h1><b>Danylo</b></h1>
	<h2>{m["headline"]()}</h2>
</div>

<section class="social-links animate-appear">
	<SocialLinks />
</section>

<Link href="https://danylo-kovalchuk.link" variant="bottom-link">{m["bottom_link"]()}</Link>

<style lang="scss">
	h1,
	h2 {
		margin: 0;
	}

	.info {
		text-align: center;
		margin: 24px;

		display: flex;
		flex-direction: column;
		gap: 12px;

		transition-delay: 0.3s;
	}

	.social-links {
		display: flex;
		flex-direction: row;
		gap: 12px;

		transition-delay: 0.6s;
	}
</style>
