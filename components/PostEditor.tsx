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
  onSubmit: (postContent: string) => void;
};

const NewPostEditor = (props: Props) => {
  const [postContent, setPostContent] = useState("");

  const handlePostSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(postContent);
  };

  const handlePostContentChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setPostContent(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col grow">
      <h1 className="text-3xl m-4">New post</h1>
      <div className="grid grid-cols-2 gap-4 p-4 grow">
        <div className="rounded-box flex">
          <form onSubmit={handlePostSubmit} className="flex flex-col grow">
            <textarea
              name="postContent"
              id="postContent"
              className="textarea grow bg-slate-800 text-white border-none font-mono"
              onChange={handlePostContentChange}
            ></textarea>
            <button type="submit" className="btn btn-primary mt-1">
              Post
            </button>
          </form>
        </div>
        <div className="bg-base-300 rounded-md px-6 py-4">
          <ReactMarkdown
            children={postContent}
            components={markdownComponents}
          />
        </div>
      </div>
    </div>
  );
};

export default NewPostEditor;
