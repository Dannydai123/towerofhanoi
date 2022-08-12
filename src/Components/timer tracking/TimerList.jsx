import "bootstrap/dist/css/bootstrap.min.css";

// import {$} from 'jquery'

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";
import { map } from "react-bootstrap/ElementChildren";

import React, { Component } from "react";
import Timer from "./Timer";
import EditablePanel from "./EditablePanel";
// import PropTypes from 'prop-types';

class TimerList extends Component {









  render() {

      console.log("TimerList rendering...", Date.now());

    const {timerarr} = this.props

    return (<div className="">



      {
        timerarr.map((timer) => {

              if (timer.isUpdating) {
                return (
                  <EditablePanel
                    type={"add"}
                    key={timer.id}
                    timer={timer}
                    handleCreate={this.props.handleCreate}
                    handleCancel={this.props.handleCancel}

                  />
                );


              }
              else {
                return (<Timer key={timer.id} timer={timer}
                               handleClickfromupper={(e, id) => this.props.handleClick(e,id)}

                               deletetimer={(e, id) => this.props.deletetimer(e, id)}

                               handleUpdate={(e,id) => this.props.handleUpdate(e, id)}



                />)


              }



            }
        )


      }










    </div>)
  }
}

TimerList.propTypes = {};

export default TimerList;
