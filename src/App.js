import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Map from "./Map";

export default function App() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Inspector On The Loose
          </Typography>
        </Box>
      </Container>
      <Map />
    </React.Fragment>
  );
}
