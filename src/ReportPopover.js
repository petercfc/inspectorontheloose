//other
import React from "react";
import moment from "moment";
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
  const timesince = moment(info._document.version.timestamp.toDate())
    .startOf("hour")
    .fromNow();
  const message = info.data().message;
  const name = info.data().name;

  console.log(timesince);

  //material-ui hook
  const classes = useStyles();

  //main return
  return (
    <div>
      <Typography className={classes.typography} variant="body1">
        {name}
      </Typography>
      <Typography className={classes.typography} variant="body1">
        {message}
      </Typography>
      <Typography className={classes.typography} variant="caption">
        {timesince}
      </Typography>
    </div>
  );
}
