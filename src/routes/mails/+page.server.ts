import { db } from '$lib/db';
import dotenv from 'dotenv';

dotenv.config();

export const actions = {
	default: async ({ request }) => {
    const data = await request.formData();
    const pass = data.get('password');

    console.log(pass, process.env.ACCESS_CODE)

    if (pass !== process.env.ACCESS_CODE) {
      return {
        status: 200,
        body: {
          mails: [],
          login: false,
          failed: 'Invalid Code'
        }
      };
    }

		const ref = db.ref('mails');
		const snapshot = await ref.once('value');
		const mails = snapshot.val();

		return {
			status: 200,
			body: {
				mails,
				login: true
			}
		};
	}
};
