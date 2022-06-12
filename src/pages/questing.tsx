import { FC } from "react";
import { Navbar } from "../components/navbar/navbar";
import { Questing } from "../containers/Questing/index";

export const QuestingPage: FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg">
        <Questing />
      </div>
    </>
  );
};

export default QuestingPage;
