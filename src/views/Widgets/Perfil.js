import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import image from "assets/img/faces/card-profile1-square.jpg";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0"
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem"
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px"
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  }
};

const useStyles = makeStyles(styles);

export default function Perfil() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={11}>
          <Card testimonial>
            <div className={classes.testimonialIcon}>
              <FormatQuote />
            </div>
            <CardBody>
              <h5 className={classes.cardTestimonialDescription}>
                I love the color mixtures,
                cards... everything. Keep up the great work!
              </h5>
            </CardBody>
            <CardFooter testimonial>
              <h4 className={classes.cardTitle}>Jarb29</h4>
              <h6 className={classes.cardCategory}>@Jarb29</h6>
              <CardAvatar testimonial testimonialFooter>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={image} alt="..." />
                </a>
              </CardAvatar>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
