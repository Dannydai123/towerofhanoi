import "bootstrap/dist/css/bootstrap.min.css";

import $ from "jquery";

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";
import { map } from "react-bootstrap/ElementChildren";

import axios from "axios";
import async from "async";

import React, { Component } from "react";

import { axiosSaveObjectList } from "./axiosAPI";

axios.defaults.baseURL = "http://localhost:3000"; //dev uses
//axios.defaults.baseURL = 'http://localhost:3000';  // production uses for heroku

const SAVEOBJECTLISTURL = "api/todolist"; //POST request of obj list

// import PropTypes from 'prop-types';

class SaveToServer extends Component {
  // static propTypes = {
  //     //name: PropTypes.string,
  //
  // };
  //
  // static defaultProps = {
  //     //name: "",
  // };

  // props received :

  // toDoList

  componentDidMount() {
    $("#alert1").hide();
  }

  handleClickSaveToServer = () => {
    axiosSaveObjectList(SAVEOBJECTLISTURL, this.props.toDoList);

    $("#alert1").show();
    setTimeout(() => {
      $("#alert1").hide(200);
    }, 2000);
    // setTimeout(() => {  $("#alert1").alert('close')}, 2000)
  };

  render() {
    console.log("rendering saveToServer");

    return (
      <div>
        <p className="h4  text-center mt-2">
          Danny's ToDoList
          <button
            className="btn btn-outline-primary float-right "
            onClick={this.handleClickSaveToServer}
          >
            Save
          </button>
        </p>

        <div
          id="alert1"
          className="alert alert-warning mt-3 p-1 fade show"
          role="alert"
        >
          Data has been saved!
        </div>

        <hr />
      </div>
    );
  }
}

export default SaveToServer;
