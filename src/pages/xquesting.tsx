import {FC} from "react";
import {Navbar} from "../components/navbar/navbar";
import {XQuesting} from "../containers/xQuesting/index";

export const XQuestingPage: FC = () => {
  return (
    <>
      <Navbar />
      <div className="xquestingbg">
        <XQuesting />
      </div>
    </>
  );
};

export default XQuestingPage;
