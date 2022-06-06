import HomePage from "../src/pages/home";
import { CreateTheme } from "../src/utils/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";

const Index = () => {
  const theme = CreateTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </>
  );
};

export default Index;
