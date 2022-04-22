import Link from "next/link";
import RichText from "./RichText";

type Props = {
  title: string;
  body: string;
  slug: string;
  updatedAt: Date;
};

const PostCard = (props: Props) => {
  return (
    <div className="card w-100 outline-2 bg-cyan-500 text-primary-content shadow-xl m-5">
      <div className="card-body">
        <Link href={`/blog/post/${props.slug}`} passHref>
          <h2 className="card-title link link-hover text-white">
            {props.title}
          </h2>
        </Link>
        <div className="card-actions justify-between">
          <span className="text-xs my-auto text-cyan-200">
            <i>Posted on {new Date(props.updatedAt).toLocaleDateString()}</i>
          </span>
          <span className="btn btn-secondary btn-sm">
            <Link href={`/blog/post/${props.slug}`} passHref>
              View
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
