import { PostT } from "../../utils/types";

const post = (props: PostT) => {
  return (
    <div className="card w-96 bg-white m-5">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
};

export default post;
