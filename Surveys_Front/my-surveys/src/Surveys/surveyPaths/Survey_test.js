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
import { Link } from "react-router-dom";
//import Result from "../Result/Result";
import axios from "axios";
import "./survey1.css";
/* import { useHistory } from "react-router-dom" */;

export default class Survey_test extends React.Component {
  /* getSurveys(){
    axios.get(`http://localhost:9001/surveys/getSurvey`)
    .then(response => this.setState({items:response.data})).catch(err => console.log(err));
  }; */



  constructor(props) {
    super(props);

    
    this.state = {
      checked: props.defaultChecked,
      questions:[],
      result:[]
    };
  }

  onChange = e => {
    const { showQuestions, value } = e.target;
    this.setState({
      [showQuestions]: value
    });
  };


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
  };

  submit = e => {
    e.preventDefault();
   /*  const id = this.state; */
    //
    axios
      .post(`http://localhost:9001/surveys/Result`)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      });
  };

 onclick(){
 }
   render() {
    const { questions, /* optio */ } = this.state;

    

    console.log(questions);

    let questionsTitle = ""
    if (questions.length > 0){
      questionsTitle = questions[0].description
    }

    return (
      <div className="survey1">

        <div className="surveyContainer">
          <h1>{questionsTitle}</h1>
          <FormControl onSubmit={this.submit}>
            <div className="row">
            <div className="col-md-12">
            

                {
                 questions.map((showQuestions) => {
                  console.log(showQuestions)

                 return (
                 
                  <div className="questionM" key={showQuestions.question_id}>
                    <div className="row">
                      <div className="col-md-12">
                        {showQuestions.question}
                       
                        
                        {showQuestions.type === "dropdown" ? (
                          <Select className="fieldwidth" onChange={this.onChange} >
                            {showQuestions.options.split(',').map(option => {
                              return (
                                <MenuItem   value={option} >
                                  <em>{option}</em>
                                </MenuItem>
                              );
                            })}
                          </Select>
                        ) : null}
 
                        {showQuestions.type === "radiobutton" ? (
                          <FormControl  id="radiobutton">
                            <RadioGroup name="customized-radios"  onChange={this.onChange} > 
                              {showQuestions.options.split(',').map(option => {
                                return (
                                  <FormControlLabel 
                                    onChange={this.handleChange} 
                                    value={option}
                                    label={option}
                                    control={<Radio />}
                                    className="formLabel"
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
                            id="checkbox"
                          >
                            {showQuestions.options.split(',').map(option => {
                              return (
                                <FormGroup row onChange={this.onChange} >
                                  <FormControlLabel 
                                    className="formLabel"
                                    control={
                                      <Checkbox 
                                        checked={this.state.option}
                                       /*  onChange={this.handleChange} */
                                        name="option"
                                        value={option}
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
                <Button onClick={() => { this.props.surveyResult.push('/Result')}} variant="contained" id="button">               
                  Send
                </Button>
              </Link>
            </div>
          </div>
          </FormControl>    
        </div>
      </div>

    );
}};
