import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// import {$} from 'jquery'

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";
import { map } from "react-bootstrap/ElementChildren";

// passes in props { clues }
class Clues extends Component {
  render() {
    const clues = this.props.clues;

    if (clues.length) {
      return clues.map((clue, index) => {
        return (
          <div className="card-body border-bottom" key={index}>
            <h5 className="card-title text-success">No. {index + 1} </h5>
            <p className="card-text text-success">
              {clue.ansNum} : {clue.result}
            </p>
          </div>
        );
      });
    } else {
      return;
    }
  }
}

export default Clues;
