type Props = {
  text: string;
  showSpinner?: boolean;
};

const Loading = (props: Props) => {
  return (
    <button className={`btn ${props.showSpinner && "loading"}`}>
      {props.text}
    </button>
  );
};

export default Loading;
