import { PostT } from "../../utils/types";

const PostCard = (props: PostT) => {
  return (
    <div className="card w-96 bg-slate-900 m-5">
      <div className="card-body">
        <h2 className="card-title text-green-400">{props.title}</h2>
        <p className="text-green-200">{props.body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-link">View</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
