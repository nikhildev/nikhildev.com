import Router from "next/router";
import { useQuery } from "react-query";
import { FIREBASE_AUTH } from "../../pages/_app";
import { PostT } from "../../lib/types";
import ErrorAlert from "../common/Error";
import Loading from "../Loading";
import PostCard from "./PostCard";
import { useContext } from "react";
import { AuthContext } from "../../lib/contexts/authContext";
import Page from "../common/Page";

const getAllPosts = () =>
  fetch("/api/blog/post/all?preview=true").then((res) => res.json());

const BlogHome = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading: isLoadingPosts,
    isError,
    data: postsData,
  } = useQuery("getAllPosts", getAllPosts);

  const handlePostView = (slug: string) => {
    Router.push(`/post/${slug}`);
  };

  return (
    <Page>
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
    </Page>
  );
};

export default BlogHome;
