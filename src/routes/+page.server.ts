import { error, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: () => {
		throw error(400, { code: 400, message: 'hey' });
	}
};
