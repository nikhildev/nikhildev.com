import { AuthContext } from "lib/context/authContext";
import { PostT } from "lib/types";
import { useContext } from "react";
import { useQuery } from "react-query";
import ErrorAlert from "./Error";
import Loading from "./Loading";
import Page from "./Page";
import PostCard from "./PostCard";

const getAllPosts = () =>
  fetch("/api/blog/post/all?preview=true").then((res) => res.json());

const BlogHome = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading: isLoadingPosts,
    isError,
    data: postsData,
  } = useQuery("getAllPosts", getAllPosts);

  return (
    <Page>
      {isLoadingPosts && <Loading text="Loading posts" />}
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-3 mt-10 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-40 2xl:mx-64">
        {postsData &&
          postsData.map((post: PostT) => (
            <PostCard
              key={post._id.toString()}
              title={post.title}
              body={post.body}
              slug={post.slug}
              updatedAt={post.updatedAt}
            />
          ))}
      </div>
      {isError && <ErrorAlert text="Error loading posts" />}
    </Page>
  );
};

export default BlogHome;
