import { message, superValidate } from 'sveltekit-superforms';
import { z } from 'zod';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/db.js';

const formSchema = z.object({
	name: z
		.string()
		.min(3, { message: 'Name must be at least contain 3 letters' })
		.max(255, { message: "Don't spam buddy! :)" }),
	address: z.string().max(255, { message: 'Seriously?' }).optional(),
	email: z.string().email({ message: 'You must provide a valid email address' }),
	message: z.string().max(1000).optional(),
	options: z.object({
		createApp: z.boolean().optional(),
		bugFix: z.boolean().optional(),
		other: z.boolean().optional()
	})
});

export const load = (async () => {
	const form = await superValidate(zod(formSchema));
	return { form };
});

export const actions = {
	default: async ({ request }) => {
		// getting user public ip for statistics
		const response = await fetch('http://ipinfo.io/ip');
		const ip: string = await response.text();

		const form = await superValidate(request, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const ref = db.ref('mails');
		const newData: typeof form.data | object = JSON.parse(JSON.stringify(form.data));

    const MailRef = ref.push();

		const result = await MailRef
			.set({
				...newData,
				ip,
				timestamp: Date.now()
			})
			.then(() => {
				return message(form, {
					success: 'Your message has been sent!'
				});
			})
			.catch((error) => {
				return message(form, {
					error: error.message
				});
			});

		return result;
	}
};
