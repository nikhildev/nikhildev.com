import { AuthContext } from "lib/context/authContext";
import { PostT } from "lib/types";
import { useContext } from "react";
import { useQuery } from "react-query";
import ErrorAlert from "components/Error";
import Loading from "components/Loading";
import Page from "components/Page";
import PostCard from "components/PostCard";

const BlogHome = () => {
  const { idToken } = useContext(AuthContext);
  const getMyPosts = () =>
    fetch("/api/blog/post/me", {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    }).then((res) => res.json());

  const {
    isLoading: isLoadingPosts,
    isError,
    data: postsData,
  } = useQuery(["getMyPosts", idToken], getMyPosts, {
    enabled: idToken !== null,
  });

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
      {idToken === null && <div>Not logged in</div>}
      {isError && <ErrorAlert text="Error loading posts" />}
    </Page>
  );
};

export default BlogHome;
