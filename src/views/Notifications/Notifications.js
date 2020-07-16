/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Notifications() {
  const classes = useStyles();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  const [classicModal, setClassicModal] = React.useState(false);
  const [noticeModal, setNoticeModal] = React.useState(false);
  const [smallModal, setSmallModal] = React.useState(false);
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
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardBody>
              <div className={classes.cardHeader}>
                <h4 className={classes.cardTitle}>Notifications Style</h4>
              </div>
              <br />
              <SnackbarContent
                message={"This is a plain notification"}
                color="info"
              />
              <SnackbarContent
                message={"This is a notification with close button."}
                close
                color="info"
              />
              <br />
              <SnackbarContent
                message={
                  "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
                }
                close
                icon={AddAlert}
                color="info"
              />
              <br />
              <SnackbarContent
                message={
                  'This is a notification with close button and icon and is made with color="rose". You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don\'t have to worry about the style.'
                }
                close
                icon={AddAlert}
                color="rose"
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardBody>
              <div>
                <div className={classes.cardHeader}>
                  <h4 className={classes.cardTitle}>Notification states</h4>
                </div>
                <br />
                <SnackbarContent
                  message={
                    'INFO - This is a regular notification made with color="info"'
                  }
                  close
                  color="info"
                />
                <SnackbarContent
                  message={
                    'SUCCESS - This is a regular notification made with color="success"'
                  }
                  close
                  color="success"
                />
                <SnackbarContent
                  message={
                    'WARNING - This is a regular notification made with color="warning"'
                  }
                  close
                  color="warning"
                />
                <SnackbarContent
                  message={
                    'DANGER - This is a regular notification made with color="danger"'
                  }
                  close
                  color="danger"
                />
                <SnackbarContent
                  message={
                    'PRIMARY - This is a regular notification made with color="primary"'
                  }
                  close
                  color="primary"
                />
                <SnackbarContent
                  message={
                    'ROSE - This is a regular notification made with color="primary"'
                  }
                  close
                  color="rose"
                />
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
