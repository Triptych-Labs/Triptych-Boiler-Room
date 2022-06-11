import { createGlobalStyle } from "styled-components";
import Theme from "./theme/theme";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Silkscreen';
  src: url(${Theme.typography.url}) format('woff2');
}

.MuiTypography-caption {
  font-family: 'Silkscreen' !important;
  color: ${Theme.typography.body1.color} !important;
}
.MuiTypography-body2 {
  font-family: 'Silkscreen' !important;
}
button[class*="CTAButton"] {
  font-family: 'Silkscreen' !important;
  background: ${Theme.palette.secondary.main} !important;
  color: ${Theme.typography.body1.color} !important;
}
.MuiTypography-colorTextSecondary {
  font-family: 'Silkscreen' !important;
  color: ${Theme.typography.body1.color} !important;
}
.MuiTypography-colorTextPrimary {
  font-family: 'Silkscreen' !important;
  color: ${Theme.typography.body1.color} !important;
}

.wallet-adapter-button {
  font-family: "Silkscreen" !important;
  color: ${Theme.typography.body1.color} !important;
  background-color: ${Theme.palette.secondary.main} !important;
}
.wallet-adapter-button-trigger {
  background-color: ${Theme.palette.secondary.main} !important;
}
.wallet-adapter-modal-wrapper {
  font-family: "Silkscreen" !important;
  background-color: ${Theme.palette.primary.main} !important;
  color: ${Theme.typography.body1.color} !important;
}

#cmui-modal {
  font-family: "Silkscreen" !important;
  background-color: ${Theme.palette.secondary.light};
  box-shadow: 0px 0px 40px 10px ${Theme.palette.secondary.main} !important;
}
.bg {
  background: url("${process.env.NEXT_PUBLIC_BACKGROUND_FILE}");
  min-height: 100vh;
}
.mint-container {
  width: 100vw;
  @media (min-width: 600px) {
    padding-top: 80px;
  }
}
.App-header {
  @media (max-width: 600px) {
    background: url("${process.env.NEXT_PUBLIC_BACKGROUND_MOBILE_FILE}");
    background-size: cover;
    background-position: center;
  }
  @media (min-width: 600px) {
    background: url("${process.env.NEXT_PUBLIC_BACKGROUND_FILE}");
    background-size: cover;
    background-position: center;
  }
  background-color: ${Theme.palette.primary.main};
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
    rgba(0, 255, 163, 0.15) 100%
  );
  color: ${Theme.typography.body1.color};
}
#matrixrain-column {
  font-family: "Silkscreen" !important;
  color: ${Theme.palette.secondary.main};
}
#matrixrain-bg {
  background: ${Theme.palette.primary.main};
}

h2, p {
  color: ${Theme.typography.body1.color} !important;
}

html,
body {
  font-family: "Silkscreen" !important;
  letter-spacing: -3px !important;
  padding: 0;
  margin: 0;
}

`;
