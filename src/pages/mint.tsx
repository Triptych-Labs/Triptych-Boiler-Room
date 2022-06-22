import { FC } from "react";
import * as anc from "@project-serum/anchor";
import Mint from "../containers/Mint";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Navbar } from "../components/navbar/navbar";
import { useWallet } from "@solana/wallet-adapter-react";

export const MintPage: FC = () => {
  const { publicKey } = useWallet();
  const candyMachineId = new anc.web3.PublicKey(
    "3PpmvYVh1Fabhvr3HZ9yYKoazMCvZ42E5TdzRxKXNwdQ"
  );
  const network = "mainnet-beta" as WalletAdapterNetwork;
  const rpcHost = "https://ssc-dao.genesysgo.net";
  const connection = new anc.web3.Connection(
    rpcHost ? rpcHost : anc.web3.clusterApiUrl("mainnet-beta")
  );

  return (
    <>
      <Navbar />
      <div className="App-header">
        {publicKey && (
          <Mint
            candyMachineId={candyMachineId}
            connection={connection}
            rpcHost={rpcHost}
            network={network}
          />
        )}
      </div>
    </>
  );
};

export default MintPage;
