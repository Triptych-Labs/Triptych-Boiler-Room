import {FC} from "react";
import {Navbar} from "../components/navbar/navbar";
import {Raffle} from "../containers/Raffles/raffle";

export const RafflePage: FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-solid">
        <Raffle />
      </div>
    </>
  );
};

export default RafflePage;
