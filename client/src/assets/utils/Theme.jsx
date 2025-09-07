// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {

    //  colores personalizado
    custom: {
      main: "rgb(128, 237, 69)", 
      contrastText: "#fff",
    },
  },
   customGradients: {
    store: "linear-gradient(90deg, #bababa 0%, #f4faef 50%, #d0edc1 100%)",
  },
  components: {
    MuiSvgIcon: {
      variants: [
        {
          props: { fontSize: "xl_pzl" },
          style: {
            fontSize: "32px", 
          },
        },
      ],
    },
  },

});

export default theme;
