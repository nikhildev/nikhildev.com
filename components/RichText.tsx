import ReactMarkdown from "react-markdown";
import styles from "styles/Richtext.module.scss";

type Props = {
  content: string;
};

const markdownComponents = {
  h1: ({ ...props }) => <h1 className={styles.h1} {...props} />,
  h2: ({ ...props }) => <h2 className={styles.h2} {...props} />,
  h3: ({ ...props }) => <h3 className={styles.h3} {...props} />,
  li: ({ ...props }) => <li className={styles.li} {...props} />,
  p: ({ ...props }) => <p className={styles.p} {...props} />,
  ul: ({ ...props }) => <ul className={styles.ul} {...props} />,
  ol: ({ ...props }) => <ol className={styles.ol} {...props} />,
};

const RichText = (props: Props) => {
  return (
    <div className="text-white text-xl">
      <ReactMarkdown components={markdownComponents}>
        {props.content}
      </ReactMarkdown>
    </div>
  );
};

export default RichText;
