import "bootstrap/dist/css/bootstrap.min.css";

// import {$} from 'jquery'

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";
import { map } from "react-bootstrap/ElementChildren";

import React, { Component } from "react";

// import PropTypes from "prop-types";

class EditablePanel extends Component {


  constructor(props) {

    super(props);

    this.timer = props.timer;
    this.state = {
      title: this.timer.title,

      project: this.timer.project,

    }



  }

  // state = {title: this.timer.title,
  //
  //   project: this.timer.project,
  //
  // }
  titleOnChange= (e) => {

    this.setState({title: e.target.value})

}


  projectOnChange= (e) => {

    this.setState({project: e.target.value})

}




handleCancel = () => {


    this.setState({project: this.timer.project,

      title: this.timer.title,

      isUpdating: false,

    })

  this.props.handleCancel(this.timer.id)

}



  render() {

      console.log("EditablePanel rendering...", Date.now());

    return (
      <div className="card text-left w-50 mx-auto mb-2">
        <div className="card-body">
          <form onSubmit={(e) => {this.props.handleCreate(e, this.timer.id)} }>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Title</label>
              <input
                type="text"
                className="form-control"

                aria-describedby="emailHelp"
                name="title"
                value={this.state.title}
                onChange={this.titleOnChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Project</label>
              <input
                type="text"
                className="form-control"
                name={"project"}
                value={this.state.project}
                onChange={this.projectOnChange}
              />
            </div>

            <button type="submit" className= "btn btn-outline-primary w-50" >{this.timer.title? "Update": "Create"}</button>

            <button  type="button" className= "btn btn-outline-danger w-50" onClick={this.handleCancel}>Cancel</button>


          </form>
        </div>
      </div>
    );
  }
}



export default EditablePanel;
