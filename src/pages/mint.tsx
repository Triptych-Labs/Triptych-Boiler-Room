import { FC } from "react";
import * as anc from "@project-serum/anchor";
import Mint from "../containers/Mint";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Navbar } from "../components/navbar/navbar";
import { useWallet } from "@solana/wallet-adapter-react";

export const MintPage: FC = () => {
  const { publicKey } = useWallet();
  const candyMachineId = new anc.web3.PublicKey(
    "6yvXsPY88f2BDRP3ZGhFC9rMt59K2yNdahFfXdRMy9gc"
  );
  const network = "devnet" as WalletAdapterNetwork;
  const rpcHost = "https://psytrbhymqlkfrhudd.dev.genesysgo.net:8899/";
  const connection = new anc.web3.Connection(
    rpcHost ? rpcHost : anc.web3.clusterApiUrl("mainnet-beta")
  );

  return (
    <>
      <Navbar />
      {publicKey && (
        <Mint
          candyMachineId={candyMachineId}
          connection={connection}
          rpcHost={rpcHost}
          network={network}
        />
      )}
    </>
  );
};

export default MintPage;
