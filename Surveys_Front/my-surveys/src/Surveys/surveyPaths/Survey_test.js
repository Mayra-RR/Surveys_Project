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
// import { Link } from "react-router-dom";
//import Result from "../Result/Result";
import axios from "axios";
import "./survey1.css";
/* import { useHistory } from "react-router-dom" */;

export default class Survey_test extends React.Component {
  state = {
    dataFetched: false,
    checked: null,
    survey: {},
    formData: [],
  }

  /* getSurveys(){
    axios.get(`http://localhost:9001/surveys/getSurvey`)
    .then(response => this.setState({items:response.data})).catch(err => console.log(err));
  }; */



  constructor(props) {
    super(props);
    this.setState({ checked: props.defaultChecked });
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
        this.setState({ survey: data, dataFetched: true });
      })
      .catch(err => console.log(err));

    if (this.state.checked) {
      this.handleChange();
    }
  };

  submit(e) {
    console.dir(e);
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
        {options.split(',').map(option => (
          <FormControlLabel
            control={
              <Checkbox
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

  drawRadios(type = '', options = []) {
    return (type !== 'radiobutton')
      ? null
      : <RadioGroup row name="customized-radios">
        {options.split(',').map(option => (
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

  drawSelect(type = '', options = []) {
    return (type !== "dropdown")
      ? null
      : <Select className="fieldwidth"  >
        {options.split(',').map(option => (
          <MenuItem value={option} >
            <em>{option}</em>
          </MenuItem>
        )
        )}
      </Select>;
  }

  render() {
    const { survey, dataFetched, } = this.state;

    return (!dataFetched)
      ? null
      : (
        <div className="survey1">
          <div className="surveyContainer">
            <h1>{survey.description}</h1>
            <FormControl>
              <div className="row">
                <div className="col-md-12">
                  {survey.survey.map((question) => (
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
