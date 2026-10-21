<script lang="ts">
	import { Avatar, Link } from "$lib/components";
	import GMail from "virtual:icons/cib/gmail";
	import ItchIo from "virtual:icons/cib/itch-io";
	import KoFi from "virtual:icons/cib/ko-fi";
</script>

<Avatar />

<section class="social-links">
	<Link href="mailto:test@gmail.com" aria-label="Write an email" newTab><GMail /></Link>
	<Link href="https://danylo-kovalchuk.itch.io" aria-label="Check out my games on itch.io" newTab>
		<ItchIo />
	</Link>
	<Link href="https://ko-fi.com/danylokovalchuk" aria-label="Support me on ko-fi.com" newTab>
		<KoFi />
	</Link>
</section>

<style lang="scss">
	.social-links {
		display: flex;
		flex-direction: row;
		gap: 12px;
	}
</style>
