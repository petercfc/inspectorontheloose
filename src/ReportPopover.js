//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

//material-ui styles
const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

//main export
export default function ReportPopover(props) {
  //destructure props
  const { info } = props;

  //material-ui hook
  const classes = useStyles();

  //main return
  return (
    <div>
      <Typography className={classes.typography}>
        {info.id}
        <br />
        {info.user}
        <br />
        {info.message}
        <br />
        {info.latitude}
        <br />
        {info.longitude}
      </Typography>
    </div>
  );
}
