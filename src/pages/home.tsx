import { FC } from "react";
import { Navbar } from "../components/navbar/navbar";
import { Home } from "../containers/Home";

export const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default HomePage;
