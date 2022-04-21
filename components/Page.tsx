import Image from "next/image";
import { FC, useContext } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { FIREBASE_UI_CONFIG } from "lib/firebase.config";
import { AuthContext } from "lib/context/authContext";
import { FIREBASE_AUTH } from "pages/_app";

const Page: FC = ({ children }) => {
  const { user } = useContext(AuthContext);

  return (
    <main className="container mx-auto">
      <nav>
        {user ? (
          <div className="flex flex-row">
            <div className="avatar">
              <div className=" rounded-full">
                <Image src={user.photoURL} width="48" height="48" />
              </div>
            </div>
            <div>{user?.displayName}</div>
          </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={FIREBASE_UI_CONFIG}
            firebaseAuth={FIREBASE_AUTH}
          />
        )}
      </nav>
      {children}
    </main>
  );
};

export default Page;
