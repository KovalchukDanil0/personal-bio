import { getTextDirection } from "#lib/paraglide/runtime.js";
import { paraglideMiddleware } from "#lib/paraglide/server.js";
import type { Theme } from "#lib/themes.js";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) =>
				html
					.replace("%paraglide.lang%", locale)
					.replace("%paraglide.dir%", getTextDirection(locale)),
		});
	});

export const handleTheme: Handle = async ({ event, resolve }) => {
	const theme = (event.cookies.get("theme") as Theme | undefined) ?? "dark";

	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%theme%", theme),
	});
};

export const handle = sequence(handleParaglide, handleTheme);
