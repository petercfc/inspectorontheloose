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
import IconButton from "@material-ui/core/IconButton";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import Typography from "@material-ui/core/Typography";

//components
import Report from "./Report";
import ReportPopover from "./ReportPopover";

//material-ui styles
const useStyles = makeStyles(theme => ({
  pin: {},
  typography: {
    position: "relative",
    top: -50,
    left: 13
  },
  button: {
    transform: "translate(-24px, -33px)"
  },
  popover: {}
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
    latitude: 43.186258,
    longitude: -71.826068
  },
  {
    id: "222",
    user: "Anonymous",
    message: "Sick bird.",
    latitude: 43.207356,
    longitude: -71.855017
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
  const [popoverInfo, setPopoverInfo] = useState(null);

  //popover anchor
  const [anchorEl, setAnchorEl] = React.useState(null);

  //popover is open
  const open = Boolean(anchorEl);
  //popover id
  const id = open ? "simple-popover" : null;

  //handle popover close
  function handleClose() {
    setAnchorEl(null);
  }

  //viewport change handler
  const viewportChange = viewport => {
    setViewport(viewport);
  };

  const renderReportMarker = (report, index) => {
    return (
      <Marker
        className={classes.pin}
        key={`marker-${index}`}
        longitude={report.longitude}
        latitude={report.latitude}
      >
        <Typography className={classes.typography} variant="caption">
          12m
        </Typography>
        <IconButton
          color="primary"
          onClick={event => {
            setAnchorEl(event.currentTarget);
            setPopoverInfo(report);
          }}
          className={classes.button}
          aria-label="Delete"
        >
          <PersonPinCircleIcon />
        </IconButton>
      </Marker>
    );
  };

  const renderPopup = () => {
    return (
      <Popover
        className={classes.popover}
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
          horizontal: "left"
        }}
      >
        <ReportPopover info={popoverInfo} />
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
