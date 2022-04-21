import React, { createContext, FC, useEffect, useState } from "react";
import { FIREBASE_AUTH } from "pages/_app";
import { UserT } from "lib/types";

export type AuthUser = Pick<UserT, "displayName" | "photoURL" | "uid">;

export type AuthState = {
  idToken: string | null;
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
  setIdToken: (idToken: string | null) => void;
};

const defaultValues: AuthState = {
  user: null,
  idToken: null,
  setUser: () => {},
  setIdToken: () => {},
};

export const AuthContext = createContext<AuthState>(defaultValues);

const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>(defaultValues);

  const setUser = (user: AuthUser | null) =>
    setAuth((auth) => ({ ...auth, user: user }));
  const setIdToken = (idToken: string | null) =>
    setAuth((auth) => ({ ...auth, idToken: idToken }));

  useEffect(() => {
    FIREBASE_AUTH.onAuthStateChanged(
      async (user) => {
        if (user) {
          const idToken = await user.getIdToken();
          setUser({
            displayName: user?.displayName || "",
            photoURL: user?.photoURL || "",
            uid: user.uid,
          });
        }
      },
      (err) => {
        console.error("Failed to reauthenticate");
      }
    );
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: auth.user,
        idToken: auth.idToken,
        setUser,
        setIdToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
