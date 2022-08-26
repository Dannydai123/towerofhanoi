import "bootstrap/dist/css/bootstrap.min.css";



// import {$} from 'jquery'

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";
import { map } from "react-bootstrap/ElementChildren";


import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCounting: this.props.timer.isCounting,
      timer: this.props.timer.timer,
      lastStartTime: this.props.timer.laststarttime,
    };

    this.tickid = this.props.timer.tickid;
  }


  axiosStopTimer = async(id) => {

     let res = await axios.post("api/timers/stop",
         {id:  id, stop: Date.now()}
     )

console.log("stoptimer", res)


  }


    axiosStartTimer = async(id, lastStartTime) => {



     let res = await axios.post("api/timers/start",

         {id:  id, start:  lastStartTime})

    console.log("starttimer", res)


  }
  //------------------------------------------------------------------------------------------------



  handleClickStartStop = () => {
    //start timer for a timer object

    this.setState({
      lastStartTime: this.state.lastStartTime ? null : Date.now(),
    });

    if (!this.state.isCounting) {

      this.axiosStartTimer(this.props.timer.id, Date.now()); //call server
      this.runtimer();
    } else {
      // atimer[0].laststarttime = atimer[0].laststarttime ? null : Date.now();


      this.axiosStopTimer(this.props.timer.id)
      this.clearuptimer(this.tickid);

    }

    this.setState({ isCounting: this.state.isCounting ? false : true });
  };

  runtimer = () => {
    const origintimer = this.state.timer;

    this.tickid = setInterval(
      () => {
        this.setState({
          timer:
            origintimer +
            parseInt((Date.now() - this.state.lastStartTime) / 1000),
        });
      },

      1000
    );
  };

  clearuptimer = () => {
    clearInterval(this.tickid);
  };

  handleUpdate = (e) => {
    const { timer } = this.props;

    timer.laststarttime = this.state.lastStartTime;
    timer.tickid = this.tickid;
    timer.timer = this.state.timer;
    timer.isCounting = this.state.isCounting;

    this.props.handleUpdate(e, timer.id);
  };

  // }

  componentWillUnmount() {


      if (this.state.isCounting) {
        this.clearuptimer();

      }

  }

  componentDidMount() {
    if (this.state.isCounting) {


      this.runtimer();
    }
  }

  render() {
    // console.log("Timer rendering...", Date.now());
    const { timer } = this.props;

    let elaspedtime = this.state.timer;
    let btnclassname = this.state.isCounting
      ? "btn-outline-danger w-100 btn"
      : " btn-outline-primary w-100 btn";

    const hour = parseInt(elaspedtime / 3600);
    const minute = parseInt((elaspedtime - hour * 3600) / 60);
    const second = parseInt(elaspedtime - hour * 3600 - minute * 60);

    return (
      <div className="card text-left w-50 mx-auto mb-2 ">
        <div className="card-header ">
          <span className="d-block font-weight-bold"> {timer.title} </span>

          <span className="text-muted">{timer.project}</span>
        </div>
        <div className="card-body">
          <p className="card-title text-center h3 text-muted">
            {hour.toString().padStart(2, 0)}:{minute.toString().padStart(2, 0)}:
            {second.toString().padStart(2, 0)}
          </p>
          <p className="card-text text-right">
            <a
              className="btn p-0"
              onClick={(e) => this.props.deletetimer(e, timer.id)}
            >
              {/*<i className="fa-solid fa-trash-can"></i>*/}
              <FontAwesomeIcon icon={faTrashCan} />
            </a>

            <a className="btn p-0" onClick={(e) => this.handleUpdate(e)}>
              {/*<i className="fa-solid fa-pen-to-square"></i>*/}
              <FontAwesomeIcon icon={faPenSquare} />{" "}
            </a>
          </p>
        </div>
        <div className="card-footer text-muted p-0">
          <a
            href="#"
            className={btnclassname}
            onClick={this.handleClickStartStop}
          >
            {this.state.isCounting ? "Stop" : "Start"}
          </a>
        </div>
      </div>
    );
  }
}

Timer.propTypes = {};

export default Timer;