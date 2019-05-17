//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import blue from "@material-ui/core/colors/blue";

//material-ui styles
const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    zIndex: 1200
  },
  fab: {
    position: "fixed",
    bottom: 32,
    textTransform: "none",
    color: blue[500],
    backgroundColor: "#fff"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

//main export
export default function ReportButton() {
  //material-ui hook
  const classes = useStyles();

  //main return
  return (
    <div className={classes.root}>
      <Fab
        className={classes.fab}
        variant="extended"
        size="large"
        aria-label="Create Report"
      >
        <AddIcon className={classes.extendedIcon} />
        Create Report
      </Fab>
    </div>
  );
}
