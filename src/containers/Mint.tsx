import { Box } from "@mui/material";
import Home from "../../vendor_modules/cmui/Home";

// @ts-ignore
export const Mint = ({ candyMachineId, connection, rpcHost, network }) => {
  return (
    <Box className="mint-container">
      <Home
        candyMachineId={candyMachineId}
        connection={connection}
        txTimeout={6000}
        rpcHost={rpcHost}
        network={network}
      />
    </Box>
  );
};

export default Mint;
