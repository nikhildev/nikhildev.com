type Props = {
  text: string;
};

const Loading = (props: Props) => {
  return <button className="btn loading">{props.text}</button>;
};

export default Loading;
