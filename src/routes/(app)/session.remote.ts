import { command, getRequestEvent } from '$app/server';

export const signOut = command(async () => {
	const event = getRequestEvent();

	event.cookies.delete('demo-auth', { path: '/' });

	return { ok: true };
});
