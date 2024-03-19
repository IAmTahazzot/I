import { db } from '$lib/db.js';

export const POST = async ({ request }) => {
	// getting user public ip for statistics
	const response = await fetch('http://ipinfo.io/ip');
	const ip: string = await response.text();

	const data = await request.json();

	const ref = db.ref('mails');
	const MailRef = ref.push();

	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

	if (!data.name || !data.email) {
		return Response.json({ error: 'Name and email are required' });
	} else if (!emailRegex.test(data.email)) {
		return Response.json({ error: 'Invalid email' });
	}

	const result = await MailRef.set({
		...data,
		ip,
		timestamp: Date.now()
	})
		.then(() => {
			return Response.json({ success: 'Congratulations, Your message has been sent!' });
		})
		.catch((error) => {
			return Response.json({ error: error.message });
		});

	return result;
};
