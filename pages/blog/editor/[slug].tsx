// import Post from "lib/mongoose/models/post";

import Page from "components/Page";
import PostEditor from "components/PostEditor";
import { AuthContext } from "lib/context/authContext";
import { PostT } from "lib/types";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useQuery } from "react-query";

type Props = {};

const getPostBySlug = (slug: string) =>
  fetch(`/api/blog/post/${slug}`).then((res) => res.json());

const EditPost = (props: Props) => {
  const router = useRouter();
  const { slug } = router.query;
  const { user } = useContext(AuthContext);

  const { isLoading, isError, isSuccess, data } = useQuery<PostT>(
    ["getPostBySlug", slug],
    () => getPostBySlug(slug as string)
  );

  const handleSubmit = (a) => {
    console.log(a);
  };

  return (
    <Page>{data && <PostEditor post={data} onSubmit={handleSubmit} />}</Page>
  );
};

export default EditPost;
