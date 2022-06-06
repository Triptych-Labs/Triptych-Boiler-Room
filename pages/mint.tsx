import MintPage from "../src/pages/mint";
import { CreateTheme } from "../src/utils/theme/theme";
import { ThemeProvider } from "@mui/material/styles";

const Mint = () => {
  const theme = CreateTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="App-header">
        <MintPage />
      </div>
    </ThemeProvider>
  );
};

export default Mint;

