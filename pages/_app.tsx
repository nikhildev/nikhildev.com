import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {
  FIREBASE_CREDENTIALS,
  FIREBASE_UI_CONFIG,
} from "../config/firebase.config";
import React from "react";

firebase.initializeApp(FIREBASE_CREDENTIALS);

export const FIREBASE_AUTH = firebase.auth();

// FIREBASE_AUTH.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
FIREBASE_AUTH.onAuthStateChanged(
  async (user) => {
    if (user) {
      const idToken = await user.getIdToken();
      const refreshToken = user.refreshToken;
    }
  },
  (err) => {
    console.error("Failed to reauthenticate");
  }
);

const AuthContext = React.createContext({
  uid: null,
});

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const handleAuthCallback = (whatever) => {
    console.log(whatever);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <nav>
        <StyledFirebaseAuth
          uiConfig={FIREBASE_UI_CONFIG}
          firebaseAuth={firebase.auth()}
          uiCallback={handleAuthCallback}
        />
      </nav>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
