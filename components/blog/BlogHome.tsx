import { useQuery } from "react-query";
import { PostT, UserT } from "../../utils/types";
import Loading from "../Loading";
import PostCard from "./PostCard";

const getAllPosts = () => fetch("/api/blog/post/all").then((res) => res.json());

const BlogHome = () => {
  const {
    isLoading: isLoadingPosts,
    error: postsError,
    data: postsData,
  } = useQuery("getAllPosts", getAllPosts);

  return (
    <div className="flex sm:place-content-center sm:flex-col md:flex-row flex-wrap">
      {isLoadingPosts && <Loading text="Loading posts" />}
      {postsData &&
        postsData.map((post: PostT) => (
          <PostCard key={post._id.toString()} {...post} />
        ))}
      {postsError && <div>postsError</div>}
    </div>
  );
};

export default BlogHome;
