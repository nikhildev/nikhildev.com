import * as firebaseAdmin from "firebase-admin";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

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

const decodeFirebaseToken = async (
  idToken: string
): Promise<DecodedIdToken> => {
  const verified = firebaseAdmin.auth().verifyIdToken(idToken);
  return verified;
};

export { firebaseAdmin, decodeFirebaseToken as verifyFirebaseToken };
