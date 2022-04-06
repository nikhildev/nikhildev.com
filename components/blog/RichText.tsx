type Props = {
  text: string;
};

const RichText = (props: Props) => {
  const paragraphs = props.text.split("\\n");

  return (
    <div>
      {paragraphs.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
};

export default RichText;
