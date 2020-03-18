import React, { Component } from "react";
import Appbar from "./components/Navbar/Navbar";
import Container from "./components/container/Container";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomeLog from "./components/Login/HomeLog";
import SurveyMenu from "./Surveys/SurveyMenu/SurveyMenu";
import Answer from "./Surveys/Anwer/Anwer";
import "flexboxgrid"

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <BrowserRouter>
            <Appbar />
              
                        
              <Switch>
              <Route path="/login" component={HomeLog} />
              <Route path="/SurveyMenu" component={ SurveyMenu } />
              <Route path="/Answer" component={ Answer } />
              <Route exact path="/Surveys_Project" component={Container} />

            </Switch>

            <Footer />
          </BrowserRouter>
        </div>
      </>
    );
  }
}

export default App;
