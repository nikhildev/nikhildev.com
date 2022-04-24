import ErrorAlert from "components/Error";
import Page from "components/Page";
import PostEditor from "components/PostEditor";
import { AuthContext } from "lib/context/authContext";
import { PostT, RequestMethods } from "lib/types";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useMutation } from "react-query";

type Props = {};

const NewPostEditor = () => {
  const { user, idToken } = useContext(AuthContext);
  const router = useRouter();

  const mutation = useMutation(
    async (newPost: Pick<PostT, "title" | "body">): Promise<PostT> => {
      const res = await fetch("/api/blog/post", {
        method: RequestMethods.POST,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(newPost),
      });
      return res.json();
    },
    {
      onSuccess: async (data: PostT) => {
        router.replace(`/blog/post/${data.slug}`);
      },
    }
  );

  const onPostSbumit = (post: Pick<PostT, "title" | "body">) => {
    mutation.mutate(post);
  };

  return (
    <Page>
      {user ? (
        <div>
          {mutation.isError && (
            <ErrorAlert
              text="There was a problem saving the post"
              className="m-4"
            />
          )}
          <PostEditor mode="create" onSubmit={onPostSbumit} />
        </div>
      ) : (
        <ErrorAlert text="You must be logged in to post" />
      )}
    </Page>
  );
};

export default NewPostEditor;
