import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Clues from "./Clues";

import BagelsGuessNumberForm from "./BagelsGuessNumberForm";

// import {$} from 'jquery'

// import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";

export const MAX_TIMES = 10;
export const MAX_DIGITS = 3;

class Bagels extends Component {
  constructor(props, context) {
    super(props, context);

    this.init();
  }

  init = () => {
    this.myRandomNum = (
      Math.floor(Math.random() * (10 ** MAX_DIGITS - 100)) + 100
    ).toString();
    this.state = {
      clues: [],

      myNum: "",
      times: 0,
      isCorrect: false,
    };

    this.myRandomNumSet = new Set(this.myRandomNum);
  };

  onresethandler = (e) => {
    this.myRandomNum = (
      Math.floor(Math.random() * (10 ** MAX_DIGITS - 100)) + 100
    ).toString();

    this.setState({
      clues: [],

      myNum: "",
      times: 0,
      isCorrect: false,
    });
  };
  myNumHandler = (e) => {
    const ansNum = String(e.target.input.value);
    console.log(ansNum);
    let results = [],
      finalresult;

    // [...myNum].filter((digit) => this.myRandomNumSet.has(digit));

    this.setState({ times: this.state.times + 1 });
    if (this.state.times > MAX_TIMES) {
      return;
    }

    for (let i = 0; i < MAX_DIGITS; i++) {
      if (this.myRandomNum[i] === ansNum[i]) {
        results.push("Fermi");
      } else if (this.myRandomNum.indexOf(ansNum[i]) === -1) {
        results.push("Bagel");
      } else {
        results.push("Pico");
      }
    }

    results = results.filter((result) => result !== "Bagel");
    const resultsForAllFermi = results.filter((result) => result !== "Fermi");
    if (results.length == 0) {
      finalresult = "Bagels- No digit is correct";
    } else if (results.length == 3 && resultsForAllFermi.length == 0) {
      this.setState({ isCorrect: true });
      finalresult = results.join(" ");
    } else {
      finalresult = results.join(" ");
    }

    this.state.clues.push({
      ansNum: ansNum,
      result: finalresult,
    });

    this.setState({
      clues: this.state.clues,
      myNum: ansNum,
    });

    console.log(this.state.clues);
  };

  render() {
    console.log(this.myRandomNum);
    return (
      <div className="card text-center border-success">
        <div className="card-header h4">Bagels Number Guessing </div>

        <div className="card-body border-bottom text-left">
          <h5 className="card-title">HOW TO PLAY</h5>
          <p className="card-text">
            You have ten times to guess a 3-digit number. every guess has a clue
            with descriptions below
            <ul>
              <li>Pico- One digit is correct but in the wrong position. </li>
              <li>Fermi- One digit is correct and in the right position. </li>
              <li>Bagels- No digit is correct. </li>
            </ul>
            less times win. Happy Playing!
          </p>
        </div>

        <Clues clues={this.state.clues} />

        <BagelsGuessNumberForm
          lastClue={this.state.clues.at(-1)}
          times={this.state.times}
          myNum={this.state.myNum}
          upperonclickhandler={this.myNumHandler}
          onresethandler={this.onresethandler}
          isCorrect={this.state.isCorrect}
        />
      </div>
    );
  }
}

Bagels.propTypes = {
  myNum: PropTypes.number,
};

export default Bagels;
