import { GoogleAuthProvider, UserCredential } from "firebase/auth";

export const FIREBASE_CREDENTIALS = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

export const FIREBASE_UI_CONFIG = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: (userCredential: UserCredential) => {
      if (userCredential !== null) {
        userCredential.user?.getIdToken().then((idToken) => {
          console.log(idToken);
        });
      }
      return false;
    },
  },
};
