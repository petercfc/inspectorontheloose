//material-ui
import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";

//custom theme object
const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500]
    },
    secondary: {
      main: red[500]
    },
    error: {
      main: red[500]
    },
    background: {
      default: "#fff"
    }
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 8
      }
    },
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: 8
      }
    },
    MuiFab: {
      root: {
        textTransform: "none",
        backgroundColor: "#fff",
        color: red[500]
      }
    }
  }
});

export default theme;
