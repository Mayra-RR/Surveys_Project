import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Radio from "@material-ui/core/Radio"; 
import Button from "@material-ui/core/Button";
/* import Icon from '@material-ui/core/Icon'; */
import { Link } from "react-router-dom";
import Result from "../Result/Result";
import axios from "axios";
import "./survey1.css";

export default class Survey_test extends React.Component {
  /* getSurveys(){
    axios.get(`http://localhost:9001/surveys/getSurvey`)
    .then(response => this.setState({items:response.data})).catch(err => console.log(err));
  }; */

  constructor(props) {
    super(props);

    this.state = {
      checked: props.defaultChecked,
      
      questions:[]
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:9001/surveys/getSurveys/${id}`)
      /* .then(response => this.setState({item:response.data})) */
      .then(response => {
        this.setState({ questions: response.data });
       /*  debugger; */
        
      })
      .catch(err => console.log(err));

    if (this.state.checked) {
      this.handleChange();
    }
  }

  render() {
    const { questions } = this.state;

    console.log(questions);

    let questionsTitle = ""
    if (questions.length > 0){
      questionsTitle = questions[0].description
    }

    return (
      <div className="survey1">

        <div className="surveyContainer">
          <h1>{questionsTitle}</h1>
          
            <div className="row">
            <div className="col-xs-10">
            

                {
                 questions.map((showQuestions) => {
                  console.log(showQuestions)

                 return (
                  
                  <div className="questionM" key={showQuestions.question_id}>
                    <div className="row">
                      <div className="col-xs-12">
                        {showQuestions.question}
                       
                        
                        {showQuestions.type === "dropdown" ? (
                          <Select className="fieldwidth">
                            {showQuestions.options.split(',').map(option => {
                              return (
                                <MenuItem  value={option}>
                                  <em>{option}</em>
                                </MenuItem>
                              );
                            })}
                          </Select>
                        ) : null}
 
                        {showQuestions.type === "radiobutton" ? (
                          <FormControl  >
                            <RadioGroup name="customized-radios" id="radiobutton">
                              {showQuestions.options.split(',').map(option => {
                                return (
                                  <FormControlLabel 
                                 
                                    value={option}
                                    label={option}
                                    control={<Radio />}
                                  />
                                );
                              })}
                            </RadioGroup>
                          </FormControl>
                        ) : null} 

                         {showQuestions.type === "checkbox" ? (
                          <FormControl
                            required
                            component="fieldset"
                            
                          >
                            {showQuestions.options.split(',').map(option => {
                              return (
                                <FormGroup id="checkbox">
                                  <FormControlLabel 
                                    control={
                                      <Checkbox 
                                        checked={this.state.option}
                                        onChange={this.handleChange}
                                        name="option"
                                      />
                                    }
                                    label={option}
                                  />
                                </FormGroup>
                              );
                            })}
                            
                          </FormControl>
                        ) : null} 

                          
                      </div>
                    </div>
                  </div>
                ); 
              })} 
              <Link to="/Result">
                <Button onClick={Result} variant="contained" id="button">
                  {" "}
                  Send
                </Button>
              </Link>
            </div>
          </div>
            
        </div>
      </div>
    );
  }
}
