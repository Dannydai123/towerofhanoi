import React, { Component } from "react";
import * as PropTypes from "prop-types";

import "./quiz.css";

const quiz = [
  {
    question: "what is the capital of France?",
    answers: ["Paris", "London", "New York", "Moscow"],
    correct: "Paris",
  },
  {
    question: "when is the last date of 2022?",
    answers: ["12/31", "12/30", "Sunday", "Monday"],
    correct: "12/31",
  },

  {
    question: "what is your mom's name?",
    answers: ["Vimmi", "Tom", "Zhang", "Sarah"],
    correct: "Zhang",
  },
  {
    question: "when did you graduate?",
    answers: ["2000", "1997", "2008", "2010"],
    correct: "1997",
  },
];

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.quiz = quiz;

    console.log(quiz);
  }

  state = { score: 0, currentquestionId: 0, isFinished: false };

  // componentWillMount() {
  //
  //     this.setState({question: this.quiz[this.state.currentquestionId].question,
  //         answers: this.quiz[this.state.currentquestionId].answers
  //
  //
  //
  //     })
  //
  //
  //
  // }

  handleClickAnswerButton = (e) => {
    if (e.target.value === this.quiz[this.state.currentquestionId].correct) {
      console.log(this.state.currentquestionId);

      this.setState({
        score: ++this.state.score,
      });
    }
    this.setState({ currentquestionId: ++this.state.currentquestionId });

    if (this.state.currentquestionId === this.quiz.length) {
      this.setState({ isFinished: true });
    }
  };

  render() {
    let mountedElm, scoreElm;
    if (!this.state.isFinished) {
      console.log(this);
      const { question, answers } = this.quiz[this.state.currentquestionId];

      answers.sort(() => Math.random() - 0.5);

      mountedElm = (
        <div className="row">
          <div className="col-sm   text-white ">
            <span className="h4">
              Question {this.state.currentquestionId + 1}
            </span>
            /4
            <p>{question}</p>
          </div>

          <div className="col-sm-7 row flex-column">
            <div className="col-sm  ">
              {answers.map((answer, index) => {
                return (
                  <button
                    className="btn btn-outline-dark w-100 rounded-pill mb-3"
                    key={index}
                    value={answer}
                    onClick={this.handleClickAnswerButton}
                  >
                    {answer}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else {
      scoreElm = (
        <div className={"row"}>
          <div className="col-sm   text-white ">
            <p className="text-center h4"> Final Score : {this.state.score}</p>
          </div>
        </div>
      );
    }
    return (
      <div className="jumbotron  bg-success pt-4 pb-0 " style={{ height: 300 }}>
        {!this.state.isFinished ? mountedElm : scoreElm}
      </div>
    );
  }
}

export default Quiz;
