import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
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
        <span className="m-auto ml-3 text-zinc-700 text-xl">
          <strong>Nikhil Dev</strong>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
