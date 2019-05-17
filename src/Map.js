//other
import React, { useState } from "react";
import MapGL, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl
} from "react-map-gl";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";

//components
import Report from "./Report";
import ReportPin from "./ReportPin";
import ReportPopup from "./ReportPopup";

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

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

const reports = [
  {
    id: "111",
    timestamp: "11:00am",
    user: "Anonymous",
    message: "Yo mang.",
    latitude: 40.6643,
    longitude: -73.9385
  },
  {
    id: "222",
    user: "Anonymous",
    message: "Sick bird.",
    latitude: 42.6643,
    longitude: -71.9385
  }
];

//main export
export default function Map() {
  //material-ui hook
  const classes = useStyles();

  //viewport state hook
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 0,
    bearing: 0,
    pitch: 0
  });

  //viewport state hook
  const [popupInfo, setPopupInfo] = useState(null);

  //popover anchor
  const [anchorEl, setAnchorEl] = React.useState(null);

  //handle popover close
  function handleClose() {
    setAnchorEl(null);
  }

  //popover init
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : null;

  //viewport change handler
  const viewportChange = viewport => {
    setViewport(viewport);
  };

  const renderReportMarker = (report, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={report.longitude}
        latitude={report.latitude}
      >
        <ReportPin
          size={20}
          onClick={event => {
            setAnchorEl(event.currentTarget);
            setPopupInfo(report);
          }}
        />
      </Marker>
    );
  };

  const renderPopup = () => {
    return (
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <ReportPopup info={popupInfo} />
      </Popover>
    );
  };

  //main return
  return (
    <MapGL
      className={classes.map}
      {...viewport}
      onViewportChange={viewportChange}
      width={"100%"}
      height={"100vh"}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxApiAccessToken={
        "pk.eyJ1IjoicGV0ZXJjYWdlZnJlZWNsaW1iaW5nIiwiYSI6ImNqdnM5MTY1czFsbDQzem8xd3J3MXMzMGkifQ.F9rpR7C-Ey2pCheG2yjQXA"
      }
    >
      <div className="nav" style={navStyle}>
        <NavigationControl onViewportChange={viewportChange} />
      </div>
      <GeolocateControl
        style={geolocateStyle}
        onViewportChange={viewportChange}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
      {reports.map(renderReportMarker)}
      {renderPopup()}
      <Report />
    </MapGL>
  );
}
