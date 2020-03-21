import "./surveyMenu.css";
import Grid from "@material-ui/core/Grid";
import feedback from "../../Imgs/feedback.png";
import light from "../../Imgs/light.png";
import glass from "../../Imgs/glass.png"
import React from "react";
import { Link } from "react-router-dom";
import "../surveyPaths/Survey1";

class SurveyMenu extends React.Component {
  render() {
    return (
      <>
        <div className="surveyM">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item={true} xs={3}>
              <div class="miniContainer">
                <Link to="/Survey1">
                  <img alt="survey1" src={feedback} class="surveyImg" />
                </Link>
                <label class="imageText">
                  <h3>Encuesta 1</h3>
                </label>
              </div>
            </Grid>
            <Grid item={true} xs={3}>
              <div class="miniContainer">
                <Link to="/Survey2">
                  <img alt="survey2" src={light} class="surveyImg" />
                </Link>
                <label class="imageText">
                  <h3>Encuesta 2</h3>
                </label>
              </div>
            </Grid>
             <Grid item={true} xs={3}>
              <div class="miniContainer">
                <Link to="/Survey3">
                  <img alt="survey3" src={glass} class="surveyImg" />
                </Link>
                <label class="imageText">
                  <h3>Encuesta 3</h3>
                </label>
              </div>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}
export default SurveyMenu;
