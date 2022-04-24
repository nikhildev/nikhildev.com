// import Post from "lib/mongoose/models/post";

import Page from "components/Page";
import PostEditor from "components/PostEditor";
import { AuthContext } from "lib/context/authContext";
import { EditablePostContent, PostT, RequestMethods } from "lib/types";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useMutation, useQuery } from "react-query";

type Props = {
  post: PostT;
};

const getPostBySlug = (slug: string) =>
  fetch(`/api/blog/post/${slug}`).then((res) => res.json());

const EditPost = (props: Props) => {
  const router = useRouter();
  const { slug } = router.query;
  const { idToken } = useContext(AuthContext);

  const { isLoading, isError, isSuccess, data } = useQuery<PostT>(
    ["getPostBySlug", slug],
    () => getPostBySlug(slug as string)
  );

  const mutation = useMutation(
    async (updatedPost: EditablePostContent): Promise<PostT> => {
      const body = JSON.stringify(updatedPost);

      const res = await fetch(`/api/blog/post/${slug}`, {
        method: RequestMethods.PATCH,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body,
      });
      return res.json();
    },
    {
      onSuccess: async (data: PostT) => {
        router.replace(`/blog/post/${data.slug}`);
      },
    }
  );

  const handleSubmit = (post: EditablePostContent) => {
    mutation.mutate(post);
  };

  return (
    <Page>
      {data && <PostEditor post={data} mode="edit" onSubmit={handleSubmit} />}
    </Page>
  );
};

export default EditPost;
