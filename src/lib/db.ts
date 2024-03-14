import admin from 'firebase-admin';

const serviceAccount = 'secret.json';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://its-me-tahazzot-default-rtdb.asia-southeast1.firebasedatabase.app'
  });
}

export const db = admin.database();