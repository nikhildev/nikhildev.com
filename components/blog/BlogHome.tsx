import Router from "next/router";
import { useQuery } from "react-query";
import { PostT } from "../../utils/types";
import ErrorAlert from "../common/Error";
import Loading from "../Loading";
import PostCard from "./PostCard";

const getAllPosts = () =>
  fetch("/api/blog/post/all?preview=true").then((res) => res.json());

const BlogHome = () => {
  const {
    isLoading: isLoadingPosts,
    isError,
    data: postsData,
  } = useQuery("getAllPosts", getAllPosts);

  const handlePostView = (slug: string) => {
    Router.push(`/post/${slug}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-primary m-5">Blog</h1>
      {isLoadingPosts && <Loading text="Loading posts" />}
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        {postsData &&
          postsData.map((post: PostT) => (
            <PostCard
              key={post._id.toString()}
              title={post.title}
              body={post.body}
              slug={post.slug}
            />
          ))}
      </div>
      {isError && <ErrorAlert text="Error loading posts" />}
    </div>
  );
};

export default BlogHome;
