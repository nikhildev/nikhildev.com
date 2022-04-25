import PostEditor from "components/PostEditor";
import { AuthContext } from "lib/context/authContext";
import { useRouter } from "next/router";
import { useContext } from "react";

const EditPost = () => {
  const router = useRouter();
  const { idToken } = useContext(AuthContext);

  const handleOnSaveSuccess = (slug: string) => {
    router.replace(`/blog/post/${slug}`);
  };

  return <PostEditor idToken={idToken} onSaveSuccess={handleOnSaveSuccess} />;
};

export default EditPost;
