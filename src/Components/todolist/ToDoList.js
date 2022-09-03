import "bootstrap/dist/css/bootstrap.min.css";

// import {$} from 'jquery'

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";
import { map } from "react-bootstrap/ElementChildren";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenSquare,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";

import React, { Component } from "react";
import ToDo from "./ToDo";

class ToDoList extends Component {
  // static propTypes = {
  //     //name: PropTypes.string,
  //
  // };
  //
  // static defaultProps = {
  //     //name: "",
  // };

  //props received :

  //toDoList an array of toDoclass

  render() {
    const { toDoList, listingStatus , handleChangeStatus, handleClickDelete} = this.props;
    let newToDoList = [];

    console.log(toDoList);

    if (listingStatus === "completed") {
      newToDoList = toDoList.filter((todo) => todo.isComplete === true);
    } else if (listingStatus === "uncompleted") {
      newToDoList = toDoList.filter((todo) => todo.isComplete === false);
    } else {
      newToDoList = toDoList;
    }

    return newToDoList.map((toDo) => (
      <ToDo key={toDo.id} id={toDo.id} title={toDo.title} isComplete={toDo.isComplete}
      handleChangeStatus={handleChangeStatus}
            handleClickDelete={handleClickDelete}

      />
    ));
  }
}

export default ToDoList;
