import { useQuery } from "react-query";
import { PostT } from "../../utils/types";
import Loading from "../Loading";
import Post from "./PostCard";

const getAllPosts = () => fetch("/api/blog").then((res) => res.json());

const Home = () => {
  const { isLoading, error, data } = useQuery("/api", getAllPosts);
  return (
    <div className="flex place-content-center md:flex-col flex-wrap">
      {isLoading && <Loading text="Loading posts" />}
      {data && data.map((post: PostT) => <Post {...post} />)}
      {error && <div>error</div>}
    </div>
  );
};

export default Home;
