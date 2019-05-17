import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MapGL from "react-map-gl";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3)
  }
}));

export default function Map() {
  return (
    <MapGL
      width={"100%"}
      height={"100vh"}
      latitude={43.188576}
      longitude={-71.826244}
      zoom={12}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken={
        "pk.eyJ1IjoicGV0ZXJjYWdlZnJlZWNsaW1iaW5nIiwiYSI6ImNqdnM5MTY1czFsbDQzem8xd3J3MXMzMGkifQ.F9rpR7C-Ey2pCheG2yjQXA"
      }
    />
  );
}
