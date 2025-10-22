import type { Handle } from '@sveltejs/kit';

export const handleAuth: Handle = async ({ event, resolve }) => {
	const auth = event.cookies.get('demo-auth');

	if (auth) {
		event.locals.auth = true;
	}

	const response = await resolve(event);
	return response;
};

export const handle: Handle = handleAuth;
