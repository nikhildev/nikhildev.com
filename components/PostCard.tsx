import Link from "next/link";
import RichText from "./RichText";

type Props = {
  title: string;
  body: string;
  slug: string;
};

const PostCard = (props: Props) => {
  return (
    <div className="card w-100 bg-primary text-primary-content shadow-xl m-5">
      <div className="card-body">
        <Link href={`/blog/post/${props.slug}`} passHref>
          <h2 className="card-title">{props.title}</h2>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
