//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//material-ui styles
const useStyles = makeStyles(theme => ({
  fabContainer: {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    zIndex: 1200
  },
  fab: {
    position: "fixed",
    bottom: 32
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  dialogActions: {
    paddingRight: 16
  }
}));

//main export
export default function ReportButton() {
  //material-ui hook
  const classes = useStyles();

  //dialog open state hook
  const [open, setOpen] = React.useState(false);

  //fab open
  function handleClickOpen() {
    setOpen(true);
  }

  //fab close
  function handleClose() {
    setOpen(false);
  }

  //main return
  return (
    <div className={classes.root}>
      <div className={classes.fabContainer}>
        <Fab
          className={classes.fab}
          onClick={handleClickOpen}
          variant="extended"
          size="large"
          aria-label="Create Report"
        >
          <AccessibilityNewIcon className={classes.extendedIcon} />
          Report Inspector
        </Fab>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Report Inspector</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Report the sighting of an inspector. This will drop a pin on the
            map, visable to everyone.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Message"
            type="message"
            fullWidth
          />
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create Report
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
