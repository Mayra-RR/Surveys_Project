import ReactDOM from "react-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./surveyMenu.css";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';

import React from "react";

/* class surveyMenu extends Component {
  render(){
    return<>
    <div className="surveyM">
    <h1>UNDER CONSTRUCTION</h1>
    </div>
    </>
  }
}
export default surveyMenu; */

const survey = [
  {
    survey_id: "1",
    title: "survey",
    description: "Product satisfaction",
    questions: [
      {
        q_id: "1",
        question: "Choose product",
        type: "dropdown",
        choices: ["1|Product1", "2|Product2", "3|Product3"]
      },
      {
        q_id: "2",
        question: "Would you recommend the product?",
        type: "radiobutton",
        choices: ["1|Would recommend", "2|Would not recommend"]
      },
      {
        q_id: "3",
        question: "question3",
        type: "dropdown",
        choices: ["1|Product1", "2|Product2", "3|Product3"]

      }
    ],
    start_date: "date",
    end_date: "date",
    created_at: "date",
    deleted_at: "date"
  }
];

export default function surveyMenu() {
  const surveyM = survey.map(survey => (
    <div className="surveyTitle" key={survey.survey_id}>
      {" "}
      {survey.title}{" "}
    </div>
  ));

  return (
    <div className="surveyM">
      {surveyM}
      <div className='row'>
        <div className='col-xs-12'>
        {survey[0].questions.map(question => {
        return (
          <div className="questionM" key={question.q_id}>
           <div class="row">
              <div className='col-xs-12'>
                {question.question}

                {
                  question.type === 'dropdown' ? <Select className="fieldwith">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  
                  {question.choices.map(choice => {
                    return(
                      <MenuItem value={choice} >
                      <em>{choice}</em>
                      </MenuItem>
                    )
                  })}
              </Select> : null
                } 
            
                {
                  question.type === 'radiobutton' ? <FormControl >
                    <RadioGroup name="customized-radios">
                      
                    <FormControlLabel value="Would recommend"  label="Would recommend" control={<Radio color="primary" />} />
                    <FormControlLabel value="Would not recommend"  label="Would not recommend" control={<Radio color="primary" />} />
                   
                  </RadioGroup>
                </FormControl> : null
                }

                
              </div>
            </div> 
          </div>
        );
      })}
        </div>
      </div>
      
    </div>
  );
}

ReactDOM.render(
  <surveyMenu survey={survey} />,
  document.getElementById("root")
);
