
import "./survey1.css";
import Grid from "@material-ui/core/Grid";
import feedback from "../../Imgs/feedback"
import React from "react";
import { Link } from "react-router-dom";
import "../surveyPaths/Survey1"

class surveyMenu extends React.Component {
  render() {
    return (
      <>
        <div className="root">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item={true} xs={3}>
              <div class="miniContainer">
                <Link to="/Survey1">
                  <img alt="survey1" src={feedback} class="position"  />
                </Link>
                <div class="imageText">
                  <p>Encuesta1</p>
                </div>
              </div>
            </Grid>
            ) }) }
          </Grid>
        </div>
      </>
    );
  }
}
export default surveyMenu;