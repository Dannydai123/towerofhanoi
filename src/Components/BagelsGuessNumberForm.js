import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// import {$} from 'jquery'

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";
import { MAX_DIGITS, MAX_TIMES } from "./Bagels";

// passes in props { myNum , lastClue, upperonclickhandler, times, isCorrect}
class BagelsGuessNumberForm extends Component {
  state = {
    myLocalNum: "",
  };
  onSubmitHandler = (e) => {
    if (e.target.input.value >= 100 && e.target.input.value <= 999) {
      this.props.upperonclickhandler(e);
    } else {
      this.hasError = true;
    }
    this.setState({ myLocalNum: "" });

    e.preventDefault();
  };

  localonchangehandler = (e) => {
    if (isNaN(e.target.value)) {
      return;
    }
    this.setState({ myLocalNum: e.target.value });
  };

  render() {
    const { myNum, lastClue, onresethandler, times, isCorrect } = this.props;

    let btnHTML;

    if (times == MAX_TIMES || isCorrect) {
      btnHTML = (
        <button className="btn btn-primary" onClick={onresethandler}>
          play again
        </button>
      );
    } else {
      btnHTML = (
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      );
    }

    let smallTip;
    if (this.hasError) {
      smallTip = (
        <small id="lastClue" className="form-text text-danger">
          please input correct number
        </small>
      );

      this.hasError = false;
    } else if (lastClue) {
      smallTip = <small id="lastClue" className="form-text text-muted"></small>;
    }

    if (isCorrect || times === MAX_TIMES) {
      return (
        <div className="card-footer text-muted">
          <div className="w-75 mx-auto form-row">
            <div className=" col h5 text-center  ">
              {isCorrect
                ? "Your answer is spot on, Congratulations!"
                : "your guesses exceeded " + MAX_TIMES + " times"}
            </div>
            <div className="col">{btnHTML}</div>
          </div>
        </div>
      );
    }

    return (
      <div className="card-footer text-muted">
        <form className="w-75 mx-auto" onSubmit={this.onSubmitHandler}>
          <div className="form-row ">
            <lable type="text" className=" col-form-label col-6">
              your {MAX_DIGITS}-digit number
            </lable>

            <div className="col-4">
              <input
                type="text"
                className="form-control"
                name={"input"}
                value={this.state.myLocalNum}
                // onChange={this.onchangehandler}
                placeholder={"input your guess"}
                onChange={this.localonchangehandler}
                disabled={times === MAX_TIMES}
              />
            </div>
            <div className="col-2">{btnHTML}</div>
            <div>{smallTip}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default BagelsGuessNumberForm;
