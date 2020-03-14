import React, { Component } from "react";
import Appbar from "./components/Navbar/Navbar";
import Container from "./components/container/Container";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomeLog from "./components/Login/HomeLog";
import SurveyMaker from "./Surveys/SurveyMaker/SurveyMaker";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <BrowserRouter>
            <Appbar />
              
                        
              <Switch>
              <Route path="/login" component={HomeLog} />
              <Route path="/SurveyMaker" component={ SurveyMaker } />
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
