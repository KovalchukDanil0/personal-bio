<script lang="ts">
	import { Avatar, SocialLinks } from "#components";
</script>

<Avatar />

<h1>Danylo</h1>
<h2>Software Engineer</h2>

<section class="social-links">
	<SocialLinks />
</section>

<style lang="scss">
	h1 {
		margin-bottom: 0;
	}

	h2 {
		margin-top: 0;
	}

	.social-links {
		display: flex;
		flex-direction: row;
		gap: 12px;
	}
</style>
