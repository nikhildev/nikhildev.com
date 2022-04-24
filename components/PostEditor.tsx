import { EditablePostContent, PostT } from "lib/types";
import { useEffect } from "react";
import { FormEvent, useState } from "react";
import RichText from "./RichText";

type Props = {
  mode: "create" | "edit";
  post?: PostT;
  onSubmit: (post: EditablePostContent) => void;
};

const PostEditor = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [isPublished, setIsPublished] = useState<boolean>(false);

  useEffect(() => {
    if (props.post) {
      setTitle(props.post?.title);
      setBody(props.post?.body);
      setIsPublished(props.post.isPublished);
    }
  }, [props.post]);

  const handlePublish = (e: FormEvent) => {
    e.preventDefault();
    setIsPublished(true);

    props.onSubmit({
      title,
      body,
      isPublished: true,
    });
  };

  const handleSaveAsDraft = (e: FormEvent) => {
    e.preventDefault();
    setIsPublished(false);

    props.onSubmit({
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
            className="btn btn-outline btn-secondary hover:btn-secondary"
            onClick={handleSaveAsDraft}
          >
            Save as draft
          </button>
          <button
            type="button"
            onClick={handlePublish}
            className="btn btn-wide btn-accent hover:bg-accent"
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
  );
};

export default PostEditor;
