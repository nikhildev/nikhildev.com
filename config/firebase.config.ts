import firebase from "firebase/compat/app";

export const FIREBASE_CREDENTIALS = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

export const FIREBASE_UI_CONFIG = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: (
      userCredential: firebase.auth.UserCredential
    ) => {
      if (userCredential !== null) {
        userCredential.user?.getIdToken().then((idToken) => {
          console.log(idToken);
        });
      }
      return false;
    },
  },
};
