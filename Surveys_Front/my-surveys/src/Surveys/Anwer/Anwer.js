import "./Answer.css";

import React, { Component } from "react";
import * as Survey from "survey-react";

class Answer extends Component {
  surveys = {
    title: "Product Satisfaction Survey",
    isRequired: true,
    questions: [
      {
        type: "dropdown",
        name: "Product",
        title: "Choose product",
        choices: ["1|Product1", "2|Product2", "3|Product3"]
      },
      {
        type: "radiogroup",
        name: "recommend",
        title: "Would you recommend the product?",
        isRequired: true,
        choices: ["1|Would recommend", "2|Would not recommend"]
      },

      {
        type: "matrix",
        isRequired: true,
        name: "Quality",
        title:
          "Please indicate if you agree or disagree with the following statements",
        columns: [
          {
            value: 1,
            text: "Strongly Disagree"
          },
          {
            value: 2,
            text: "Disagree"
          },
          {
            value: 3,
            text: "Neutral"
          },
          {
            value: 4,
            text: "Agree"
          },
          {
            value: 5,
            text: "Strongly Agree"
          }
        ],
        rows: [
          {
            value: "affordable",
            text: "Product is affordable"
          },
          {
            value: "does what it claims",
            text: "Product does what it claims"
          },
          {
            value: "better then others",
            text: "Product is better than other products on the market"
          },
          {
            value: "easy to use",
            text: "Product is easy to use"
          }
        ]
      },

      {
        type: "input",
        name: "email",
        title:
          'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
      }
    ]
  };

  onComplete(result) {
    console.log("Complete! " + result);
  }

  render() {
    const model = new Survey.Model(this.surveys);
    return (
      <div className="answer">
        {/*If you do not want to show survey, comment the lines below*/}

        <Survey.Survey
          model={model}
          onComplete={this.onComplete}
          onValueChanged={this.onValueChanged}
        />
      </div>
    );
  }
}

export default Answer;
