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
.bg {
  background: url("${process.env.NEXT_PUBLIC_BACKGROUND_FILE}");
  min-height: 100vh;
}
.App-header {
  background: url("${process.env.NEXT_PUBLIC_BACKGROUND_FILE}");
  background-color: ${Theme.palette.primary.main};
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 40px 50px 50px 40px;
}
#topbar {
  background: linear-gradient(
    180deg,
    ${Theme.palette.primary.main} 40%,
    rgba(0, 255, 163, 0.3) 100%
  );
  color: ${Theme.typography.body1.color};
}
#matrixrain-column {
  font-family: "VT323" !important;
  color: ${Theme.palette.secondary.main};
}
#matrixrain-bg {
  background: #00FFA3;
}

h2, p {
  color: ${Theme.typography.body1.color} !important;
}
`;
