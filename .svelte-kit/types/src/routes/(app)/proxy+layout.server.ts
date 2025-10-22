// @ts-nocheck
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = async (event: Parameters<LayoutServerLoad>[0]) => {
	if (!event.locals.auth) {
		redirect(302, '/login');
	}

	return {
		auth: event.locals.auth
	};
};
