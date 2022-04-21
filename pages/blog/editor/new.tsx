import ErrorAlert from "components/Error";
import Page from "components/Page";
import PostEditor from "components/PostEditor";
import { AuthContext } from "lib/context/authContext";
import { PostT, RequestMethods } from "lib/types";
import { useContext } from "react";
import { useMutation } from "react-query";

type Props = {};

const NewPostEditor = () => {
  const { user, idToken } = useContext(AuthContext);

  const mutation = useMutation(
    async (newPost: Pick<PostT, "title" | "body">) => {
      return await fetch("/api/blog/post", {
        method: RequestMethods.POST,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(newPost),
      });
    }
  );

  const onPostSumit = (post: Pick<PostT, "title" | "body">) => {
    mutation.mutate(post);
  };

  return (
    <Page>
      {user ? (
        <PostEditor onSubmit={onPostSumit} />
      ) : (
        <ErrorAlert text="You must be logged in to post" />
      )}
    </Page>
  );
};

export default NewPostEditor;
