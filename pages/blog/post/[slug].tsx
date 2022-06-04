import { useRouter } from "next/router";
import { useQuery } from "react-query";
import RichText from "components/RichText";
import ErrorAlert from "components/Error";
import Loading from "components/Loading";
import { PostT } from "lib/types";
import Page from "components/Page";
import Avatar from "components/Avatar";
import { dateStringToReadable } from "lib/common/helpers";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "lib/context/authContext";

const BlogHome = () => {
  const { idToken } = useContext(AuthContext);
  const getPostBySlug = (slug: string) =>
    fetch(`/api/blog/post/${slug}`, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    }).then((res) => res.json());
  const router = useRouter();
  const { slug } = router.query;
  const { user } = useContext(AuthContext);

  const { isLoading, isError, isSuccess, data } = useQuery<PostT>(
    ["getPostBySlug", slug, idToken],
    () => getPostBySlug(slug as string)
  );

  return (
    <Page>
      <div className="text-center">
        {isLoading && <Loading text="Loading post" showSpinner />}
      </div>
      {isSuccess && (
        <div className="mt-10 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-40 2xl:mx-64">
          <h1 className="text-5xl text-yellow-500">
            <strong>{data.title}</strong>
          </h1>
          <div className="my-6 text-sm flex flex-row">
            <div className="flex flex-row grow">
              <Avatar
                displayName={data?.author?.displayName}
                src="/me_square.jpg"
                className="my-auto"
              />
              <div className="flex flex-col ml-2 my-auto">
                <span className="text-primary-content">
                  <strong>{data?.author?.displayName || "User"}</strong>
                </span>
                <span className="text-xs text-secondary-content">
                  {dateStringToReadable(data.updatedAt)}
                </span>
              </div>
            </div>
            {data?.author?.uid === user?.uid && (
              <span className="btn btn-outline btn-small btn-secondary w-auto">
                <Link href={`/blog/editor/${data.slug}`}>Edit post</Link>
              </span>
            )}
          </div>
          <RichText content={data.body} />
        </div>
      )}

      {isError && <ErrorAlert text="Error loading posts" />}
    </Page>
  );
};

export default BlogHome;
