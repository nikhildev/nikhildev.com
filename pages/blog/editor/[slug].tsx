import Page from "components/Page";
import PostEditor from "components/PostEditor";
import { AuthContext } from "lib/context/authContext";
import { PostT } from "lib/types";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useQuery } from "react-query";

const getPostBySlug = (slug: string): Promise<PostT> =>
  fetch(`/api/blog/post/${slug}`).then((res) => res.json());

const EditPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { idToken } = useContext(AuthContext);

  const { data } = useQuery<PostT>(["getPostBySlug", slug], () =>
    getPostBySlug(slug as string)
  );

  const handleOnSaveSuccess = () => {
    router.replace(`/blog/post/${data?.slug}`);
  };

  return (
    <>
      {data && (
        <PostEditor
          post={data}
          idToken={idToken}
          onSaveSuccess={handleOnSaveSuccess}
        />
      )}
    </>
  );
};

export default EditPost;
