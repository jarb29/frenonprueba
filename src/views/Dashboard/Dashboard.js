import React, { useEffect, useContext } from "react";
import { Context } from "../../AppContext";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import ArtTrack from "@material-ui/icons/ArtTrack";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

import priceImage1 from "assets/img/card-2.jpeg";
import priceImage2 from "assets/img/card-3.jpeg";
import priceImage3 from "assets/img/card-1.jpeg";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const { actions } = useContext(Context);
  const classes = useStyles();

  useEffect(() => {
    actions.productoComprado();
  }, []);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={9} lg={9}>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Card>
              <CardHeader>
                <h4 className={classes.cardTitle}>
                  <b>Bienvenido</b>
                </h4>
                <h2 className={classes.cardTitle}>
                  <b>David Anderson</b>
                </h2>
              </CardHeader>
              <CardFooter stats>
                <h3 className={classes.cardCategory}>
                  Is simply dum text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dum text ever the
                  1500s.
                </h3>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Card>
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <CardHeader>
                    <GridContainer>
                      <GridItem xs={4} sm={4} md={4}>
                        <ion-icon
                          name="mail-open-outline"
                          style={{ fontSize: "60px" }}
                        ></ion-icon>
                    </GridItem>
                    <GridItem xs={8} sm={8} md={8}>
                      <a className={classes.cardTitle}>
                        Notificaciones is simply dum
                      </a>
                    </GridItem>
                    </GridContainer>
                  </CardHeader>
                  <CardFooter stats></CardFooter>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <CardHeader>
                  <GridContainer>
                  <GridItem xs={4} sm={4} md={4}>
                        <ion-icon
                          name="bed-outline"
                          style={{ fontSize: "60px" }}
                        ></ion-icon>
                    </GridItem>
                    <GridItem xs={8} sm={8} md={8}>
                    <a className={classes.cardTitle}>
                      Hoteles is simply dum
                    </a>
                    </GridItem>
                    </GridContainer>
                  </CardHeader>
                  <CardFooter stats></CardFooter>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <CardHeader>
                    <GridContainer>
                    <GridItem xs={4} sm={4} md={4}>
                        <ion-icon
                          name="card-outline"
                          // size="large"
                          style={{  fontSize: "60px" }}
                        ></ion-icon>
                    </GridItem>
                    <GridItem xs={8} sm={8} md={8}>
                        <a className={classes.cardTitle}>
                          Pagos recibidos is simply dum
                        </a>
                    </GridItem>
                    </GridContainer>
                  </CardHeader>
                  <CardFooter stats></CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <br />
          <h1>Hoteles Disponibles</h1>
          <br />
          <br />
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card product className={classes.cardHover}>
                <CardHeader image className={classes.cardHeaderHover}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={priceImage1} alt="..." />
                  </a>
                  <div className={classes.jarb29}>
                    <b>hola</b>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className={classes.cardHoverUnder}>
                    <Tooltip
                      id="tooltip-top"
                      title="View"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="transparent" simple justIcon>
                        <ArtTrack className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-top"
                      title="Edit"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="success" simple justIcon>
                        <Refresh className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-top"
                      title="Remove"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="danger" simple justIcon>
                        <Edit className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card product className={classes.cardHover}>
                <CardHeader image className={classes.cardHeaderHover}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={priceImage2} alt="..." />
                    <div className={classes.jarb29}> hola</div>
                  </a>
                </CardHeader>
                <CardBody>
                  <div className={classes.cardHoverUnder}>
                    <Tooltip
                      id="tooltip-top"
                      title="View"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="transparent" simple justIcon>
                        <ArtTrack className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-top"
                      title="Edit"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="success" simple justIcon>
                        <Refresh className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-top"
                      title="Remove"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="danger" simple justIcon>
                        <Edit className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card product className={classes.cardHover}>
                <CardHeader image className={classes.cardHeaderHover}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={priceImage3} alt="..." />
                    <div className={classes.jarb29}>
                      <b>hola</b>
                    </div>
                  </a>
                </CardHeader>
                <CardBody>
                  <div className={classes.cardHoverUnder}>
                    <Tooltip
                      id="tooltip-top"
                      title="View"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="transparent" simple justIcon>
                        <ArtTrack className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-top"
                      title="Edit"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="success" simple justIcon>
                        <Refresh className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-top"
                      title="Remove"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="danger" simple justIcon>
                        <Edit className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <CardHeader>
              <h5 className={classes.cardTitle}>
                <b>Notificaciones</b>
              </h5>
            </CardHeader>
            <CardBody>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits.
              </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence without
                revolutionary ROI. Collaboratively administrate empowered
                markets via plug-and-play networks. Dynamically procrastinate
                B2C users after installed base benefits.
              </p>
              <br />
              <p>This is very nice.</p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
