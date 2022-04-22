import { dateStringToReadable } from "lib/common/helpers";
import Link from "next/link";
import Avatar from "./Avatar";
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
          <div className="flex flex-row">
            <Avatar
              displayName="{props.author}"
              src="/me_square.jpg"
              className="my-auto"
            />
            <div className="flex flex-col ml-2">
              <span className="text-cyan-100 text-sm">
                <strong>Nikhil Dev Chunchu</strong>
              </span>
              <span className="text-xs text-cyan-200">
                {dateStringToReadable(props.updatedAt)}
              </span>
            </div>
          </div>
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
