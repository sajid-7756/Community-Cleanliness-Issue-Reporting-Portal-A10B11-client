import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-neutral ">
      <RingLoader size={100} color="green" />
    </div>
  );
};

export default Loading;
