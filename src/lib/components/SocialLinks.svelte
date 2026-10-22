<script lang="ts">
	import { Link } from "#components";
	import GitHub from "virtual:icons/cib/github";
	import GMail from "virtual:icons/cib/gmail";
	import GoogleChrome from "virtual:icons/cib/google-chrome";
	import ItchIo from "virtual:icons/cib/itch-io";
	import KoFi from "virtual:icons/cib/ko-fi";
	import FireFox from "virtual:icons/cib/mozilla-firefox";
</script>

<Link href="https://github.com/KovalchukDanil0" aria-label="Check out my GitHub" newTab>
	<GitHub />
</Link>

<Link
	href="https://chrome-stats.com/a/dTVjZDY1NDQ3ZmYyNTYxYjcxNDg2ZDAyNmEyODQ2MDQw"
	aria-label="Visit my chrome extension store"
	newTab
>
	<GoogleChrome />
</Link>

<Link
	href="https://addons.mozilla.org/user/17453121"
	aria-label="Visit my firefox extension store"
	newTab
>
	<FireFox />
</Link>

<Link href="https://danylo-kovalchuk.itch.io" aria-label="Check out my games on itch.io" newTab>
	<ItchIo />
</Link>

<Link href="https://ko-fi.com/danylokovalchuk" aria-label="Support me on ko-fi.com" newTab>
	<KoFi />
</Link>

<Link href="mailto:test@gmail.com" aria-label="Write an email" newTab>
	<GMail />
</Link>
