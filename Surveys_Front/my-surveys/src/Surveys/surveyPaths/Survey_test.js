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

import {SurveyEntity} from '../../entity/SurveyEntity';
import {SurveyDataContainer} from '../../entity/SurveyDataContainer';

// import { Link } from "react-router-dom";
//import Result from "../Result/Result";
import axios from "axios";
import "./survey1.css";
/* import { useHistory } from "react-router-dom" */;

export default class Survey_test extends React.Component {
  formData = new SurveyDataContainer();
  state = {
    survey: null
  }

  onChange = e => {
    const { showQuestions, value } = e.target;
    this.setState({
      [showQuestions]: value
    });
  };

  componentDidMount() {
    this.getDatafromEndpoint();
  }

  getDatafromEndpoint() {
    const id = this.props.match.params.id;
    axios
      // .get(`http://localhost:9001/surveys/getSurveys/${id}`)
      .get(` http://1746d71f.ngrok.io/surveys/getSurveys/${id}`)
      .then(({ data }) => {
        this.setState({survey: new SurveyEntity(data)});
      })
      .catch(err => console.log(err));
  };

  submit(e) {
    console.dir(this.formData.getAnswers());
    e.preventDefault();
    e.stopPropagation();
    /*  const id = this.state; */
    //
    return;
    // axios
    //   .post(`http://localhost:9001/surveys/Result`)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
  };

  onclick() {
  }

  drawCheckboxes({id, type = '', options = []}) {
    return (!id || type !== 'checkbox')
      ? null
      : <FormGroup row onChange={this.onChange} >
        {options.map(option => (
          <FormControlLabel
            control={
              <Checkbox
              onClick={() => this.formData.addEntity(id, option)}  
              name="option"
                value={option}
              />
            }
            label={option}
          />
        )
        )}
      </FormGroup>
      ;
  }

  drawRadios({id, type = '', options = []}) {
    return (type !== 'radiobutton')
      ? null
      : <RadioGroup row name="customized-radios">
        {options.map(option => (
          <FormControlLabel
            onChange={this.handleChange}
            value={option}
            label={option}
            control={<Radio />}
          // className="formLabel"
          />
        ))}
      </RadioGroup>
  }

  drawSelect({id, type = '', options = []}) {
    return (type !== "dropdown")
      ? null
      : <Select className="fieldwidth"  >
        {options.map(option => (
          <MenuItem value={option} >
            <em>{option}</em>
          </MenuItem>
        )
        )}
      </Select>;
  }

  render() {
    const { survey } = this.state;

    return (!survey)
      ? null
      : (
        <div className="survey1">
          <div className="surveyContainer">
            <h1>{survey.description}</h1>
            <FormControl>
              <div className="row">
                <div className="col-md-12">
                  {survey.questions.map((question) => (
                    <div className="questionM" key={question.question_id}>
                      <div className="row">
                        <div className="col-md-12">
                          {question.question}
                          {this.drawSelect(question)}
                          {this.drawRadios(question)}
                          {this.drawCheckboxes(question)}
                        </div>
                      </div>
                    </div>
                  )
                  )}
                  <Button variant="contained" id="button" onClick={this.submit.bind(this)}>Send</Button>
                </div>
              </div>
            </FormControl>
          </div>
        </div>
      );
  }
};
