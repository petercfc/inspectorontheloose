//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

//components
import Map from "./Map";

//material-ui styles
const useStyles = makeStyles(theme => ({
  root: {
    padding: 0
  }
}));

//main export
export default function App() {
  //material-ui hook
  const classes = useStyles();

  //main return
  return (
    <Container className={classes.root} maxWidth="sm">
      <Box>
        <Map />
      </Box>
    </Container>
  );
}
