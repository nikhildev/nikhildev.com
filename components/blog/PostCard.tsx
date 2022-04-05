import { PostT } from "../../utils/types";

const MAX_BODY_PREVIEW = 200;
const TRAILING_THING = "...";

const PostCard = (props: PostT) => {
  const displayBody =
    props.body.length > 100
      ? props.body.substring(0, MAX_BODY_PREVIEW - TRAILING_THING.length) +
        TRAILING_THING
      : props.body;
  return (
    <div className="card w-100 bg-slate-900 m-5">
      <div className="card-body">
        <h2 className="card-title text-green-400">{props.title}</h2>
        <p className="text-green-200">{displayBody}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-link">View</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
