import { Linktree } from "../components/cards";
import MatrixRain from "../../vendor_modules/matrixrain/src/MatrixRain";
import { Grid } from "@mui/material";

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
        <Grid item xs={4}>
          <Linktree
            i={0}
            title={"Artifacts"}
            subtitle={"Mint your very own Artifact!"}
            link={"/mint"}
            cover={"/github.png"}
          />
        </Grid>
        <Grid item xs={4}>
          <Linktree
            i={1}
            title={"Storefront"}
            subtitle={"Buy NFTs for FedCoin!"}
            link={"/storefront"}
            cover={"/github.png"}
          />
        </Grid>
        <Grid item xs={4}>
          <Linktree
            i={2}
            title={"P2P Marketplace"}
            subtitle={"Buy and Sell your NFT for FedCoin!"}
            link={"/marketplace"}
            cover={"/github.png"}
          />
        </Grid>
        <Grid item xs={4}>
          <Linktree
            i={3}
            title={"Questing"}
            subtitle={"A P2E Staking Game!"}
            link={"/questing"}
            cover={"/github.png"}
          />
        </Grid>
        <Grid item xs={4}>
          <Linktree
            i={4}
            title={"Raffles"}
            subtitle={"Raffle Opportunities!"}
            link={"/raffles"}
            cover={"/github.png"}
          />
        </Grid>
      </Grid>
      <div style={{ zIndex: -1 }}>
        <MatrixRain />
      </div>
    </div>
  );
};
