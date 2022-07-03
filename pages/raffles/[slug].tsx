import {useRouter} from 'next/router'
import {CreateTheme} from "../../src/utils/theme/theme";
import {ThemeProvider} from "@mui/material/styles";
import RafflePage from "../../src/pages/raffle";
import {
  useQuestingWasm,
  useSomeplaceWasm,
} from "../../src/utils/wasm_loader_hooks";


const Raffle = () => {
  const router = useRouter();
  const slug = router.query.slug || [];

  const theme = CreateTheme();
  const questing = useQuestingWasm();
  const storefront = useSomeplaceWasm();

  return (
    <ThemeProvider theme={theme}>
      {questing === "ready" && questing === storefront && <RafflePage />}
    </ThemeProvider>
  );
}

export default Raffle;
