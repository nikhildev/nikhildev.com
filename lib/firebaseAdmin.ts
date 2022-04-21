import * as firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {
  const privateKey =
    process.env.FIREBASE_ADMIN_PRIVATE_KEY &&
    JSON.parse(process.env.FIREBASE_ADMIN_PRIVATE_KEY)["privateKey"];
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: privateKey,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    }),
  });
}

export { firebaseAdmin };
