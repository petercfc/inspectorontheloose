//material-ui
import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";

//custom theme object
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: pink[500]
    },
    error: {
      main: red[500]
    },
    background: {
      default: "#fff"
    }
  }
});

export default theme;
