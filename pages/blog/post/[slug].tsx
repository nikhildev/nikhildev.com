import { useRouter } from "next/router";
import { useQuery } from "react-query";
import RichText from "../../../components/blog/RichText";
import ErrorAlert from "../../../components/common/Error";
import Loading from "../../../components/Loading";
import { PostT } from "../../../lib/types";

const getPostBySlug = (slug: string) =>
  fetch(`/api/blog/post/${slug}`).then((res) => res.json());

const BlogHome = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { isLoading, isError, isSuccess, data } = useQuery<PostT>(
    ["getPostBySlug", slug],
    () => getPostBySlug(slug as string)
  );

  return (
    <div className="container mx-auto">
      {isLoading && <Loading text="Loading" />}
      {isSuccess && (
        <div className="mt-10">
          <h1 className="text-6xl text-slate-600 my-5">{data.title}</h1>
          <RichText text={data.body} />
        </div>
      )}

      {isError && <ErrorAlert text="Error loading posts" />}
    </div>
  );
};

export default BlogHome;
