import { createGlobalStyle } from "styled-components";
import Theme from "./theme/theme";

export const GlobalStyle = createGlobalStyle`
.MuiTypography-caption {
  color: ${Theme.typography.body1.color} !important;
}
button[class*="CTAButton"] {
  color: ${Theme.typography.body1.color} !important;
}
.MuiTypography-colorTextSecondary {
  color: ${Theme.typography.body1.color} !important;
}
.MuiTypography-colorTextPrimary {
  color: ${Theme.typography.body1.color} !important;
}

.wallet-adapter-button {
  color: ${Theme.typography.body1.color} !important;
}
.wallet-adapter-modal-wrapper {
  background-color: ${Theme.palette.primary.main} !important;
  color: ${Theme.typography.body1.color} !important;
}

#cmui-modal {
  background-color: ${Theme.palette.secondary.main};
}
.App-header {
  background-color: ${Theme.palette.primary.main};
  background: url("${process.env.PUBLIC_URL}/bac.png");
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 40px 50px 50px 40px;
}
`;
