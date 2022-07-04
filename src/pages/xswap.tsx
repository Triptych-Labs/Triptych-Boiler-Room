import {FC} from "react";
import {Navbar} from "../components/navbar/navbar";
import {XSwap} from "../containers/XSwap";

export const XSwapPage: FC = () => {
  return (
    <>
      <Navbar />
      <div className="xquestingbg">
        <XSwap />
      </div>
    </>
  );
};

export default XSwapPage;
