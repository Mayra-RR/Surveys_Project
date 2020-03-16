/* import ReactDOM from "react-dom"; */
import "./SurveyMaker.css";

import React, { Component } from "react";
import * as Survey from "survey-react";



class SurveyMaker extends Component {
  render(){
    return<>
    <div className="surveyM">
    <h1>UNDER CONSTRUCTION</h1>
    </div>
    </>
  }
}
export default SurveyMaker;



/* const survey = [
  {
    survey_id: "1",
    title: "survey",
    description: "survey creator",
    questions: [
      {
       q_id: "1",
       question: "question1" '
       type:"dropdown"
      },
    start_date: "date",
    end_date: "date",
    created_at: "date",
    deleted_at: "date"
  }
];

export default function SurveyMaker() {
  const surveyM = survey.map(survey => (
    <div>
    <h1 key={survey.survey_id}> {survey.title} </h1>
    <p> {survey.questions} </p>
    </div>    
  ));
 
  return (
    <div className="surveyM">
      {surveyM}
     
    </div>
  );
}

ReactDOM.render(
  <SurveyMaker survey={survey} />,
  document.getElementById("root")
);
 */