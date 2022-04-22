import { useRouter } from "next/router";
import { useQuery } from "react-query";
import RichText from "components/RichText";
import ErrorAlert from "components/Error";
import Loading from "components/Loading";
import { PostT } from "lib/types";
import Page from "components/Page";

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
    <Page>
      {isLoading && <Loading text="Loading" />}
      {isSuccess && (
        <div className="mt-10 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-40 2xl:mx-64">
          <h1 className="text-5xl text-yellow-500">
            <strong>{data.title}</strong>
          </h1>
          <div className="my-6 text-cyan-400 text-sm">
            <i>
              Posted by {data.author} on {data.updatedAt}
            </i>
          </div>
          <RichText text={data.body} />
        </div>
      )}

      {isError && <ErrorAlert text="Error loading posts" />}
    </Page>
  );
};

export default BlogHome;
