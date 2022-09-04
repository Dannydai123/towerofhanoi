import "bootstrap/dist/css/bootstrap.min.css";

// import {$} from 'jquery'

import "bootstrap/dist/js/bootstrap.bundle.min";

import React, { Component } from "react";
import PropTypes from "prop-types";
import ToDoForm from "./ToDoForm";

import ToDoList from "./ToDoList";
import SaveToServer from "./SaveToServer";
import {axiosSaveObjectList, axiosGetObjectList} from "./axiosAPI";


const OBJECTLISTURL = "api/todolist"  //get object list

const SAVEOBJECTLISTURL = "api/todolist" //POST request of obj list

class ToDoListDashboard extends Component {
  // static propTypes = {
  //     //name: PropTypes.string,
  //
  // };
  //
  // static defaultProps = {
  //     //name: "",
  // };

  state = {
    toDoList: [],
    listingStatus: "all",
  };
  // ------------------------------------------------------------------------------------------------
  // todolist struct definition
  //   title: e.target.toDoTitle.value,
  // isComplete: false, // completed or incomplete
  // id: this.state.toDoList.length + 1, //Integer
  // -----------------------------------------------------------------------------------------------------

  getToDoListFromServer = async() => {

    let objListFromServer = []

    await axiosGetObjectList(OBJECTLISTURL, {}, objListFromServer)

    console.log('objectfrom server', objListFromServer)

    this.setState({toDoList: objListFromServer})

  }


  componentDidMount() {



    console.log("componentDidMount")

    this.getToDoListFromServer()


    }



  // --------------------------------------------------------------------------------------------------------------------
  handleClickAdd = (e) => {
    e.preventDefault();

    console.log(e);

    let tempToDo = {
      title: e.target.toDoTitle.value,
      isComplete: false, // completed or incomplete
      id: this.state.toDoList.length + 1, //Integer
    };

    this.state.toDoList.push(tempToDo);

    this.setState({ toDoList: this.state.toDoList });
  };

  handleClickSelector = (e) => {
    console.log("clickselector", e);

    if (e.target.value === "completed") {
      this.setState({ listingStatus: "completed" });
    } else if (e.target.value === "incomplete") {
      this.setState({ listingStatus: "incomplete" });
    } else if (e.target.value === "all") {
      this.setState({ listingStatus: "all" });
    }
  };

  handleChangeStatus = (id) => {
    const idx = this.state.toDoList.findIndex((toDo) => toDo.id === id);

    this.state.toDoList[idx].isComplete = !this.state.toDoList[idx].isComplete;

    // this.setState({})  not rerender
  };

  handleClickDelete = (id) => {
    const idx = this.state.toDoList.findIndex((toDo) => toDo.id === id);
    this.state.toDoList.splice(idx, 1);

    this.setState({ toDoList: this.state.toDoList });
  };

  render() {
    console.log("dashboard rendering...");
    return (
      <div>
        <SaveToServer toDoList={this.state.toDoList} />

        <ToDoForm
          listingSelector={this.state.listingStatus}
          handleClickAdd={this.handleClickAdd}
          handleClickSelector={this.handleClickSelector}
        />

        <ToDoList
          toDoList={this.state.toDoList}
          handleChangeStatus={this.handleChangeStatus}
          handleClickDelete={this.handleClickDelete}
          listingStatus={this.state.listingStatus}
        />
      </div>
    );
  }
}

export default ToDoListDashboard;
