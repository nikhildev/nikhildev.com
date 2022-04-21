import { AuthContext, AuthUser } from "lib/context/authContext";
import { FIREBASE_UI_CONFIG } from "lib/firebase.config";
import Image from "next/image";
import { FIREBASE_AUTH } from "pages/_app";
import { useContext } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

type Props = { user: AuthUser | null };

const Navbar = (props: Props) => {
  const { user, setIdToken, setUser } = useContext(AuthContext);

  const handleSignOut = () => {
    setIdToken(null);
    setUser(null);
    FIREBASE_AUTH.signOut();
  };

  return (
    <nav className="inline-flex flex-row p-4 min-w-full">
      <div className="inline-flex flex-row align-middle">
        <div className="avatar">
          <div className="w-20 mask mask-hexagon">
            <img src="/me_square.jpg" width="24" height="24" />
          </div>
        </div>
        <span className="m-auto ml-3 text-green-400 text-lg">
          <strong>Nikhil Dev</strong>
        </span>
      </div>
      <div className="grow"></div>
      <div className="m-auto">
        {props.user ? (
          <div className="inline-flex">
            <div className="avatar mr-4">
              <div className="w-8 rounded-full ring-white ring-2">
                <img src={props.user.photoURL} />
              </div>
            </div>
            <button
              className="btn btn-outline btn-sm btn-secondary"
              onClick={handleSignOut}
            >
              Logout
            </button>
          </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={FIREBASE_UI_CONFIG}
            firebaseAuth={FIREBASE_AUTH}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
