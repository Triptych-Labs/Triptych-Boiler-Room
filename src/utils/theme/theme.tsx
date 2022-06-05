import { createTheme } from "@mui/material/styles";
import {
  red,
  orange,
  yellow,
  green,
  lightBlue,
  grey,
} from "@mui/material/colors";

export const Theme = {
  components: {
    MuiButton: {
      styleOverrides: {
        text: {},
        outlined: {},
        contained: {},
      },
    },
  },
  typography: {
    fontFamily: ["Helvetica", "arial"],
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    lineHeight: 1.5,
    h1: {
      fontFamily: "Lato",
      color: grey[100],
      fontSize: "6rem",
      fontWeight: 400,
      lineHeight: 1.167,
      lettingSpacing: "-0.01562em",
    },
    body1: {
      color: grey[800],
      fontSize: "2rem",
      fontWeight: 400,
    },
  },
  Button: {
    color: "#FFFFFFF",
  },

  palette: {
    mode: "light",
    primary: {
      main: orange[500],
    },
    secondary: {
      light: red[500],
      main: red[700],
      dark: red[900],
      contrastText: grey[50],
    },
    error: {
      light: red[400],
      main: red[500],
      dark: red[300],
      contrastText: grey[800],
    },
    success: {
      main: green[500],
    },
    warning: {
      main: yellow[500],
      contrastText: grey[800],
    },
    info: {
      main: lightBlue[500],
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
      disabled: grey[500],
    },
    action: {
      active: red[200],
      disabled: grey[700],
      disabledBackground: grey[200],
      hover: red[100],
      hoverOpacity: 0.7,
      focus: red[600],
      focusOpacity: 1,
      selected: red[300],
      selectedOpacity: 1,
    },
    background: {
      default: orange[300],
      paper: grey[200],
    },
    common: {
      black: grey[900],
      white: grey[200],
    },
    tonalOffset: 0.2,
  },
};

export const CreateTheme = () => {
  // @ts-ignore
  return createTheme(Theme);
};

export default Theme;

