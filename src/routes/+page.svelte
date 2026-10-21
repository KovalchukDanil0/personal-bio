<script lang="ts">
	import { Link } from "$lib/components";
</script>

<img src="https://avatars.githubusercontent.com/u/105009706?v=4" alt="Avatar" />

<Link href="mailto:test@gmail.com">Email</Link>
<Link href="instagram">Instagram</Link>

<style lang="scss">
	img {
		width: 20vh;
		border-radius: 100%;
		border-style: none;
		border-color: unset;
		object-fit: cover;

		box-shadow:
			inset 0 -3em 3em rgb(0 200 0 / 30%),
			0 0 0 2px white,
			0.3em 0.3em 1em rgb(200 0 0 / 60%);
	}
</style>
