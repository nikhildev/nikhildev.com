import { PostT } from "../../utils/types";
import RichText from "./RichText";

const MAX_BODY_PREVIEW = 500;
const TRAILING_THING = "...";

const PostCard = (props: PostT) => {
  return (
    <div className="card w-100 bg-primary text-primary-content shadow-xl m-5">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <RichText text={props.body} />
      </div>
    </div>
  );
};

export default PostCard;
