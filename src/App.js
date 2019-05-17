import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Map from "./Map";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="sm">
      <Box>
        <Map />
      </Box>
    </Container>
  );
}
