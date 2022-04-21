import PostEditor from "../../../components/PostEditor";

type Props = {};

const NewPostEditor = (props: Props) => {
  const onPostSumit = (text: string) => {
    console.log(text);
  };
  return (
    <main className=" min-h-screen flex flex-col">
      <PostEditor onSubmit={onPostSumit} />
    </main>
  );
};

export default NewPostEditor;
