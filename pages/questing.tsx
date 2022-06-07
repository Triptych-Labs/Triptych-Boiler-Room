import MintPage from "../src/pages/mint";
import { CreateTheme } from "../src/utils/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import {
  useQuestingWasm,
  useSomeplaceWasm,
} from "../src/utils/wasm_loader_hooks";

const Questing = () => {
  const theme = CreateTheme();
  const questing = useQuestingWasm();
  const storefront = useSomeplaceWasm();

  return (
    <ThemeProvider theme={theme}>
      {questing === "ready" && questing === storefront && <MintPage />}
    </ThemeProvider>
  );
};

export default Questing;
