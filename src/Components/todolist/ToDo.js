import "bootstrap/dist/css/bootstrap.min.css";

// import {$} from 'jquery'

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";
import { map } from "react-bootstrap/ElementChildren";

import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlagCheckered,
  faTrashCan,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

class ToDo extends Component {
  // static propTypes = {
  //     //name: PropTypes.string,
  //
  // };
  //
  // static defaultProps = {
  //     //name: "",
  // };

  //props receiced :
  //   todolist's title , status, id

  state = {
    isCompleteView: this.props.isComplete,
  };



  changeStatus = (e) => {
    this.setState({ isCompleteView: !this.state.isCompleteView });

    console.log(this.props.id);
    this.props.handleChangeStatus(this.props.id);
  };

  deleteItem = (e) => {
    this.props.handleClickDelete(e, this.props.id);
  };

  render() {
    const { title, isComplete, id } = this.props;

    const completeTitle = <s>{title}</s>;

    const statusBtn = this.state.isCompleteView ? (
      <FontAwesomeIcon icon={faFlagCheckered} />
    ) : (
      <FontAwesomeIcon icon={faRocket} />
    );

    return (
      <div className="list-group   ">
        <span className="list-group-item list-group-item-action">
          {this.state.isCompleteView ? <s>{title}</s> : title}
          <div
            className=" btn-group  float-sm-right"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-success"
              onClick={this.changeStatus}
            >
              {statusBtn}
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.props.handleClickDelete(id)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </span>
      </div>
    );
  }
}

export default ToDo;
