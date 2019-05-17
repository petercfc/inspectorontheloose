//other
import React, { useState } from "react";
import MapGL, { GeolocateControl } from "react-map-gl";

//material-ui
import { makeStyles } from "@material-ui/core/styles";

//components
import Report from "./Report";

//material-ui styles
const useStyles = makeStyles(theme => ({
  map: {}
}));

//mapbox geolocate button style
const geolocateStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  margin: 10
};

//main export
export default function Map() {
  //material-ui hook
  const classes = useStyles();

  //viewport state hook
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: 96,
    zoom: 3,
    bearing: 0,
    pitch: 0
  });

  //viewport change handler
  const _onViewportChange = viewport => {
    setViewport(viewport);
  };

  //main return
  return (
    <MapGL
      className={classes.map}
      {...viewport}
      onViewportChange={_onViewportChange}
      width={"100%"}
      height={"100vh"}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxApiAccessToken={
        "pk.eyJ1IjoicGV0ZXJjYWdlZnJlZWNsaW1iaW5nIiwiYSI6ImNqdnM5MTY1czFsbDQzem8xd3J3MXMzMGkifQ.F9rpR7C-Ey2pCheG2yjQXA"
      }
    >
      <Report />
      <GeolocateControl
        style={geolocateStyle}
        onViewportChange={_onViewportChange}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
    </MapGL>
  );
}
