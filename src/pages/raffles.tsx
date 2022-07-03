import {FC} from "react";
import {Navbar} from "../components/navbar/navbar";
import {Raffles} from "../containers/Raffles/index";

export const RafflesPage: FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-solid">
        <Raffles />
      </div>
    </>
  );
};

export default RafflesPage;
