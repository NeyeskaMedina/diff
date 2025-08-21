// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {

    //  colores personalizado
    custom: {
      main: "rgb(128, 237, 69)", 
      contrastText: "#fff",
    },

    // header: {
    //   main: "var(--header-bg)",
    //   contrastText: "#fff",
    // },
  },
});

export default theme;
