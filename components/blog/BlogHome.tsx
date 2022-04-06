import { useQuery } from "react-query";
import { PostT, UserT } from "../../utils/types";
import Loading from "../Loading";
import PostCard from "./PostCard";

const getAllPosts = () =>
  fetch("/api/blog/post/all?preview=true").then((res) => res.json());

const BlogHome = () => {
  const {
    isLoading: isLoadingPosts,
    error: postsError,
    data: postsData,
  } = useQuery("getAllPosts", getAllPosts);

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-primary m-5">Blog</h1>
      {isLoadingPosts && <Loading text="Loading posts" />}
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        {postsData &&
          postsData.map((post: PostT) => (
            <PostCard key={post._id.toString()} {...post} />
          ))}
      </div>
      {postsError && <div>postsError</div>}
    </div>
  );
};

export default BlogHome;
