import { db } from '$lib/db';
import dotenv from 'dotenv';

dotenv.config();

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const pass = data.get('password');

		console.log(pass, process.env.ACCESS_CODE);

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
		let mails = snapshot.val();

    if (!mails) {
      return {
        status: 200,
        body: {
          mails: [],
          login: true
        }
      }
    }

		// Convert the object to an array
		mails = Object.keys(mails).map((key) => ({
			...mails[key],
			id: key
		}));

		// Sort the mails in descending order of timestamp
		mails.sort((a, b) => b.timestamp - a.timestamp);

		return {
			status: 200,
			body: {
				mails,
				login: true
			}
		};
	}
};
