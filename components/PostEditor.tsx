import { PostT } from "lib/types";
import { FormEvent, useState } from "react";
import RichText from "./RichText";

type Props = {
  post?: PostT;
  onSubmit: (post: Pick<PostT, "title" | "body">) => void;
};

const NewPostEditor = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handlePostSubmit = (e: FormEvent) => {
    e.preventDefault();
    title &&
      body &&
      props.onSubmit({
        title,
        body,
      });
  };

  const handleTitleChange = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleBodyChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setBody(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col grow h-100">
      <form onSubmit={handlePostSubmit} className="flex flex-col gap-4 p-4">
        <div className="flex">
          <input
            className="input grow"
            placeholder="Post title"
            onChange={handleTitleChange}
          />
        </div>
        <div className="flex flex-col">
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
        <div className="grid grid-cols-2 rounded-box flex gap-2">
          <textarea
            name="postContent"
            id="postContent"
            className="textarea bg-slate-800 text-white border-none font-mono"
            onChange={handleBodyChange}
          ></textarea>
          <div className="outline outline-accent outline-1 rounded-md px-6 py-4 text-white">
            <RichText content={body} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPostEditor;
