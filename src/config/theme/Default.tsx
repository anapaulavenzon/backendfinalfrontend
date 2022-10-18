import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#A68C76",
      main: "#8C4130",
    },
    secondary: {
      light: "#A68C76",
      main: "#734E38",
    },
    error: {
      light: "#A68C76",
      main: "#8C4130",
    },
  },
});

export default defaultTheme;
