import ReactLoading from "react-loading";
import { Backdrop } from "../ZStyles/AtomStyles";
import { LoadingStyle } from "../ZStyles/MoleculeStyles";

const Loading = ({content}) => {
  return (
    <>
      <LoadingStyle>
        <ReactLoading type={"spin"} color={"var(--orange200)"} height={80} width={80} />
        <div>Loading...</div>
        <div>{content}</div>
      </LoadingStyle>
      <Backdrop />
    </>
  );
};

export default Loading;
