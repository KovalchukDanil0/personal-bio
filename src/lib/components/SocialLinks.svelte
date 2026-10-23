<script lang="ts">
	import { Link } from "#components";
	import { m } from "#lib/paraglide/messages.js";
	import GitHub from "virtual:icons/cib/github";
	import GMail from "virtual:icons/cib/gmail";
	import GoogleChrome from "virtual:icons/cib/google-chrome";
	import ItchIo from "virtual:icons/cib/itch-io";
	import KoFi from "virtual:icons/cib/ko-fi";
	import FireFox from "virtual:icons/cib/mozilla-firefox";

	const githubTitle = m["github_icon_title"]();
	const chromeTitle = m["chrome_icon_title"]();
	const firefoxTitle = m["firefox_icon_title"]();
	const itchIoTitle = m["itch_io_icon_title"]();
	const koFiTitle = m["ko_fi_icon_title"]();
	const emailTitle = m["email_icon_title"]();
</script>

<Link
	href="https://github.com/KovalchukDanil0"
	variant="social-icon"
	title={githubTitle}
	aria-label={githubTitle}
	newTab
>
	<GitHub width="auto" height="auto" />
</Link>

<Link
	href="https://chrome-stats.com/a/dTVjZDY1NDQ3ZmYyNTYxYjcxNDg2ZDAyNmEyODQ2MDQw"
	variant="social-icon"
	aria-label={chromeTitle}
	title={chromeTitle}
	newTab
>
	<GoogleChrome width="auto" height="auto" />
</Link>

<Link
	href="https://addons.mozilla.org/user/17453121"
	variant="social-icon"
	aria-label={firefoxTitle}
	title={firefoxTitle}
	newTab
>
	<FireFox width="auto" height="auto" />
</Link>

<Link
	href="https://danylo-kovalchuk.itch.io"
	variant="social-icon"
	aria-label={itchIoTitle}
	title={itchIoTitle}
	newTab
>
	<ItchIo width="auto" height="auto" />
</Link>

<Link
	href="https://ko-fi.com/danylokovalchuk"
	variant="social-icon"
	aria-label={koFiTitle}
	title={koFiTitle}
	newTab
>
	<KoFi width="auto" height="auto" />
</Link>

<Link
	href="mailto:danilkovalchuk0@gmail.com"
	variant="social-icon"
	aria-label={emailTitle}
	title={emailTitle}
	newTab
>
	<GMail width="auto" height="auto" />
</Link>
