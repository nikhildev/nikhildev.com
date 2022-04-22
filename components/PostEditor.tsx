import { PostT } from "lib/types";
import { FormEvent, useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "styles/PostEditor.module.scss";

const markdownComponents = {
  h1: ({ ...props }) => <h1 className={styles.h1} {...props} />,
  h2: ({ ...props }) => <h2 className={styles.h2} {...props} />,
  h3: ({ ...props }) => <h3 className={styles.h3} {...props} />,
  li: ({ ...props }) => <li className={styles.li} {...props} />,
  p: ({ ...props }) => <p className={styles.p} {...props} />,
  ul: ({ ...props }) => <ul className={styles.ul} {...props} />,
  ol: ({ ...props }) => <ol className={styles.ol} {...props} />,
};

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
    <div className="flex flex-col grow">
      <h1 className="text-3xl m-4">New post</h1>
      <div className="grid grid-cols-2 gap-4 p-4 grow">
        <div className="rounded-box flex">
          <form onSubmit={handlePostSubmit} className="flex flex-col grow">
            <input onChange={handleTitleChange} />
            <textarea
              name="postContent"
              id="postContent"
              className="textarea grow bg-slate-800 text-white border-none font-mono"
              onChange={handleBodyChange}
            ></textarea>
            <button type="submit" className="btn btn-primary mt-1">
              Post
            </button>
          </form>
        </div>
        <div className="bg-base-300 rounded-md px-6 py-4">
          <ReactMarkdown components={markdownComponents}>{body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default NewPostEditor;
