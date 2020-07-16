/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Hotel from "@material-ui/icons/Hotel";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Instruction from "components/Instruction/Instruction.js";

import styles from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Modal(props) {
  const classes = useStyles();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  const [noticeModal, setNoticeModal] = React.useState(false);
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
                    <Button
                      color="success" simple justIcon
                      onClick={() => setNoticeModal(true)}
                    >
                     <Hotel className={classes.underChartIcons} />
                    </Button>
                    <Dialog
                      classes={{
                        root: classes.center + " " + classes.modalRoot,
                        paper: classes.modal
                      }}
                      open={noticeModal}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={() => setNoticeModal(false)}
                      aria-labelledby="notice-modal-slide-title"
                      aria-describedby="notice-modal-slide-description"
                    >
                      <DialogTitle
                        id="notice-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                      >
                        <Button
                          justIcon
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          color="transparent"
                          onClick={() => setNoticeModal(false)}
                        >
                          <Close className={classes.modalClose} />
                        </Button>
                        <h4 className={classes.modalTitle}>Gracias Por Reservar:</h4>
                      </DialogTitle>
                      <DialogContent
                        id="notice-modal-slide-description"
                        className={classes.modalBody}
                      >
                        <Instruction
                          title="En el Hotel:"
                          text={
                            <span>
                           {props.data.companyName}
                            </span>
                          }
                          image={props.pic}
                          className={classes.instructionNoticeModal}
                          imageClassName={classes.imageNoticeModal}
                        />
                        <a>Hubicado en la calle: </a>
                        {props.data.street} "y" {props.data.id}
                      </DialogContent>
                      <DialogActions
                        className={
                          classes.modalFooter + " " + classes.modalFooterCenter
                        }
                      >
                        <Button
                          onClick={() => setNoticeModal(false)}
                          color="info"
                          round
                        >
                          Vuelva Pronto
                    </Button>
                </DialogActions>
            </Dialog>         
        </GridItem>
      </GridContainer>
    </div>
  );
}
