import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import type { AppProps } from "next/app";
import { useContext } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  FIREBASE_CREDENTIALS,
  FIREBASE_UI_CONFIG,
} from "../lib/firebase.config";
import AuthProvider, { AuthContext } from "../lib/context/authContext";
import "../styles/globals.css";

//////////// FIREBASE AUTH ///////////////
export const firebaseApp = firebase.initializeApp(FIREBASE_CREDENTIALS);

export const FIREBASE_AUTH = firebase.auth();

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
