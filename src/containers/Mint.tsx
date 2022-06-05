import Home from "../vendor/cmui/Home";
import { Box } from "@mui/material";

// @ts-ignore
export const Mint = ({ candyMachineId, connection, rpcHost, network }) => {
  return (
    <>
      <Home
        candyMachineId={candyMachineId}
        connection={connection}
        txTimeout={6000}
        rpcHost={rpcHost}
        network={network}
      />
    </>
  );
};

export default Mint;
