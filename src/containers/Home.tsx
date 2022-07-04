import {Linktree} from "../components/cards";
import MatrixRain from "../../vendor_modules/matrixrain/src/MatrixRain";
import {Grid} from "@mui/material";

export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Grid
        container
        style={{
          display: "fixed",
          padding: "10%",
          width: "100vw",
        }}
      >
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={5}>
          <Linktree
            i={3}
            title={"xQuesting"}
            subtitle={"A P2E Staking Game!"}
            link={"/questing"}
            cover={"/github.png"}
          />
        </Grid>
        <Grid item xs={5}>
          <Linktree
            i={3}
            title={"xSwap"}
            subtitle={"Swap Utility Tokens for Project Tokens!"}
            link={"/xswap"}
            cover={"/github.png"}
          />
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
      <div style={{zIndex: -1}}>
        <MatrixRain />
      </div>
    </div>
  );
};
