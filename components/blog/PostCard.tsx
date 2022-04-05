import { PostT } from "../../utils/types";

const MAX_BODY_PREVIEW = 500;
const TRAILING_THING = "...";

const PostCard = (props: PostT) => {
  const displayBody =
    props.body.length > 100
      ? props.body.substring(0, MAX_BODY_PREVIEW - TRAILING_THING.length) +
        TRAILING_THING
      : props.body;
  return (
    <div className="card w-100 bg-primary text-primary-content shadow-xl m-5">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{displayBody}</p>
      </div>
    </div>
  );
};

export default PostCard;
