import React, { Component } from "react";
import "./Result.css";

class Result extends Component {
    render() {
     return <div className="result">
       <h1>Thank you for submitting the survey, here's your result:</h1>
       {/* <Result
          onComplete={this.onComplete}
          onValueChanged={this.onValueChanged}
        /> */}
      </div>
    
  }
}
export default Result;
