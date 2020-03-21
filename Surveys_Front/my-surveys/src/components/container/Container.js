import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import idea from "../../Imgs/idea.png";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Survey1 from "../../Surveys/surveyPaths/Survey1";
import SurveyMenu from "../../Surveys/SurveyMenu/SurveyMenu";

import "./Container.css";

class Container extends React.Component {
  render() {
    return (
      <div className="BgContainer">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography className="typographyC" variant="h2">
              You won't look for another online survey tool.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className="leftGrid ">
            <Paper>
              <h2>
                <u> {"Why we're different?"}</u>
              </h2>
              <p>
                Lorem ipsum duis mollis, est non commodo luctus, nisi erat
                porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Maecenas faucibus
                mollis interdum. Nullam id dolor id nibh ultricies vehicula ut
                id elit. Cras justo odio, dapibus ac facilisis in, eget quam.
              </p>
              <Link to="/SurveyMenu" >
                <Button id="chooseButton" variant="contained" onclick={SurveyMenu}>
                  <label> Choose! </label>
                </Button>
              </Link>
              <Link to="/Survey1" >
                <Button  id="answerButton"  onclick={Survey1}>
                  <label> Answer </label>
                </Button>
              </Link>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <img alt="idea" src={idea} className="ImgGrid" />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Container;
