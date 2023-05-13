import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0057FF",
    },
    secondary: {
      main: "#FFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
          backgroundColor: "primary",
          "&:hover": {
            backgroundColor: "primary",
          },
        },
      },
    },
  },
});

export default theme;
