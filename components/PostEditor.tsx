import { EditablePostContent, PostT, RequestMethods } from "lib/types";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { useMutation } from "react-query";
import Page from "./Page";
import RichText from "./RichText";

type Props = {
  idToken: string | null;
  post?: PostT;
  onSaveSuccess?: (slug: string) => void;
};

const PostEditor = (props: Props) => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [isPublished, setIsPublished] = useState<boolean>(false);
  const [savingDraft, setSavingDraft] = useState<boolean>(false);
  const [publishingPost, setPublishingPost] = useState<boolean>(false);
  let requestMethod = RequestMethods.POST;

  useEffect(() => {
    if (props.post) {
      setTitle(props.post?.title);
      setBody(props.post?.body);
      setIsPublished(props.post.isPublished);
    }
  }, [props.post]);

  if (props.post) {
    requestMethod = RequestMethods.PATCH;
  }

  const mutation = useMutation(
    async (post: EditablePostContent): Promise<PostT> => {
      const body = JSON.stringify(post);

      const res = await fetch(
        props.post ? `/api/blog/post/${props.post?.slug}` : "/api/blog/post",
        {
          method: requestMethod,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${props.idToken}`,
          },
          body,
        }
      );
      return res.json();
    },
    {
      onSuccess: async (data: PostT) => {
        props.onSaveSuccess && props.onSaveSuccess(data.slug);
      },
    }
  );
  const handlePublish = (e: FormEvent) => {
    e.preventDefault();
    setIsPublished(true);
    setPublishingPost(true);

    mutation.mutate({
      title,
      body,
      isPublished: true,
    });
  };

  const handleSaveAsDraft = (e: FormEvent) => {
    e.preventDefault();
    setIsPublished(false);
    setSavingDraft(true);

    mutation.mutate({
      title,
      body,
      isPublished: false,
    });
  };

  const handleTitleChange = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleBodyChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setBody(e.currentTarget.value);
  };

  return (
    <Page>
      <div className="flex flex-col grow">
        <form className="flex flex-col gap-4 p-4 grow">
          <div className="flex">
            <input
              className="input grow text-2xl bg-transparent outline outline-0 text-yellow-500"
              placeholder="Post title"
              onChange={handleTitleChange}
              value={title}
            />
          </div>
          <div className="flex flex-row gap-2">
            <div className="grow inline-flex">
              {isPublished ? (
                <span className="badge badge-success uppercase my-auto">
                  published
                </span>
              ) : (
                <span className="badge badge-secondary uppercase my-auto">
                  draft
                </span>
              )}
            </div>
            <button
              role="button"
              className={`btn btn-outline btn-secondary hover:btn-secondary ${
                savingDraft && mutation.isLoading && "loading"
              }`}
              onClick={handleSaveAsDraft}
              disabled={mutation.isLoading}
            >
              Save as draft
            </button>
            <button
              type="button"
              onClick={handlePublish}
              disabled={mutation.isLoading}
              className={`btn btn-accent hover:btn-accent ${
                publishingPost && mutation.isLoading && "loading"
              }`}
            >
              Publish
            </button>
          </div>
          <div className="grid grid-cols-2 rounded-box gap-4 grow">
            <textarea
              name="postContent"
              id="postContent"
              className="textarea bg-slate-800 text-white border-none font-mono"
              onChange={handleBodyChange}
              value={body}
            ></textarea>
            <div className="outline outline-secondary outline-1 rounded-md px-6 py-4">
              <h1 className="text-5xl text-yellow-500">
                <strong>{title}</strong>
              </h1>
              <RichText content={body} />
            </div>
          </div>
        </form>
      </div>
    </Page>
  );
};

export default PostEditor;
