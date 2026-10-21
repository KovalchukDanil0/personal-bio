import type { Theme } from "#lib/themes.js";

export function load({ cookies }) {
	const theme = cookies.get("theme") as Theme | undefined;

	return { theme };
}
