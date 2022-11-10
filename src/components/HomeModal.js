import React, { Fragment, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Button, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "white",
    border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    // padding: spacing(2, 4, 3),
  },
}));

const HomeModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  // open = true;
  const rootRef = React.useRef(null);
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Fragment>
      <div className={classes.root} ref={rootRef}>
        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          open
          aria-labelledby="server-modal-title"
          aria-describedby="server-modal-description"
          className={classes.modal}
          container={() => rootRef.current}
        >
          <div className={classes.paper}>
            <Button component={Link} to="/infopage">
              Proceed
            </Button>
            <Button onClick={refreshPage}>Leave</Button>
          </div>
        </Modal>
      </div>
    </Fragment>
  );
};

export default HomeModal;
