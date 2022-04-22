import { AuthContext, AuthUser } from "lib/context/authContext";
import { FIREBASE_UI_CONFIG } from "lib/firebase.config";
import Image from "next/image";
import Link from "next/link";
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
    <nav className="navbar bg-slate-800">
      <div className="inline-flex flex-row align-middle">
        <div className="avatar link">
          <div className="w-16 mask mask-hexagon">
            <Link href="/" passHref>
              <Image
                alt="Nikhil Dev Chunchu"
                src="/me_square.jpg"
                height={24}
                width={24}
                layout="responsive"
              />
            </Link>
          </div>
        </div>
        <span className="m-auto ml-3 text-green-400 text-xl">
          <strong>Nikhil Dev</strong>
        </span>
      </div>
      <div className="grow"></div>
      <div className="flex-none gap-2">
        {props.user ? (
          <div className="dropdown dropdown-end">
            <div className="avatar link">
              <div
                tabIndex={0}
                className="w-8 rounded-full ring-2 ring-green-500"
              >
                <Image
                  alt={props.user.displayName}
                  src={props.user.photoURL}
                  height={24}
                  width={24}
                  layout="responsive"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-secondary rounded-box w-52 text-white text-sm"
            >
              <li>
                <Link href="/blog/editor/new">New Post</Link>
              </li>
              <li>
                <a onClick={handleSignOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={FIREBASE_UI_CONFIG}
            firebaseAuth={FIREBASE_AUTH}
          />
        )}
        <div className="dropdown dropdown-end"></div>
      </div>
    </nav>
  );
};

export default Navbar;
