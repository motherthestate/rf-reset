import { form, getRequestEvent } from '$app/server';
import { redirect } from '@sveltejs/kit';
import { z } from 'zod';

export const login = form(
	z.object({
		email: z.string(),
		password: z.string()
	}),
	async ({ email, password }, invalid) => {
		const valid = email === 'email@example.com' && password === 'password';

		if (!valid) {
			invalid({
				message: 'Wrong email or password.'
			});

			return { success: false };
		}

		const event = getRequestEvent();

		event.cookies.set('demo-auth', 'true', {
			path: '/'
		});

		redirect(303, '/');
	}
);
