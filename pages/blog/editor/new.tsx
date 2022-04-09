import PostEditor from "../../../components/blog/PostEditor";

type Props = {};

const NewPostEditor = (props: Props) => {
  const onPostSumit = (text: string) => {
    console.log(text);
  };
  return <PostEditor onSubmit={onPostSumit} />;
};

export default NewPostEditor;
