import admin from 'firebase-admin';
import env from 'dotenv'

env.config();

if (!admin.apps.length) {
  try {
    if (!process.env.SECRET) {
      throw new Error('FIREBASE_SECRET is not set');
    }

    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(process.env.SECRET)),
      databaseURL: 'https://its-me-tahazzot-default-rtdb.asia-southeast1.firebasedatabase.app'
    });
  } catch (error ){
    console.log('Unable to initialize Firebase: ', error)
  }
}

export const db = admin.database();