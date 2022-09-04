import "bootstrap/dist/css/bootstrap.min.css";

// import {$} from 'jquery'

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";
import { map } from "react-bootstrap/ElementChildren";

import React, { Component } from "react";

class ToDoForm extends Component {
  // static propTypes = {
  //     //name: PropTypes.string,
  //
  // };
  //

  state = {
    toDoTitle: "",
  };
  // static defaultProps = {
  //   newtitle: "",
  // };

  //props:

  // handleClickAdd, newtitle

  // -------------

  // componentWillMount() {
  //
  // }
  //
  // componentDidMount() {
  //
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //
  // }
  //
  // shouldComponentUpdate(nextProps, nextState) {
  //
  // }
  //
  // componentWillUpdate(nextProps, nextState) {
  //
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //
  // }
  //
  // componentWillUnmount() {
  //
  // }

  render() {

    console.log('todoform')

      const {handleClickAdd, handleClickSelector, listingStatus} = this.props
    return (
      <form
        className="form-inline my-5 "
        onSubmit={(e) => {

          e.preventDefault();
          if (e.target.toDoTitle.value) {
           this.setState((state,props) => ({toDoTitle: ''}))

           handleClickAdd(e);
        }
        }}
      >
        <div className="input-group  w-75">
          <input
            type="text"
            className="form-control"
            placeholder="todo task"
            name={"toDoTitle"}
            value={  this.state.toDoTitle  }
            onChange={(e) => {

              this.setState({ toDoTitle: e.target.value });
            }}
          />
          <div className="input-group-append">
            <button type="+" className="btn btn-primary  ">
              New
            </button>
          </div>
        </div>
        <select
          className="custom-select  ml-auto badge-primary"
          name={"selector"}

          onChange={handleClickSelector }
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">incomplete</option>
        </select>


      </form>
    );
  }
}

export default ToDoForm;
