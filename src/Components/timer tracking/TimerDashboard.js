import "bootstrap/dist/css/bootstrap.min.css";

// import {$} from 'jquery'

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";
import { map } from "react-bootstrap/ElementChildren";

import React, { Component } from "react";
import TimerList from "./TimerList";
import EditablePanel from "./EditablePanel";
import AddBtn from "./AddBtn";
// import PropTypes from 'prop-types';

class TimerDashboard extends Component {


  constructor(props) {
    super(props);

    this.state = {
      timerArray: [],
      isChanged: false,

      currentTime: Date.now(),
    };



        this.state.defaulttimer = {
      id: 0,
      title: '',
      project: '',
      timer: 0,  //elapsed time in second
      laststarttime: null,
      isCounting: false,
      isUpdating: false,
          tickid: null
    }


  }

  deletetimer = (e, id ) => {

    let atimerIndex = this.state.timerArray.findIndex(timer => timer.id === id)




    if (this.state.timerArray[atimerIndex].tickid)
      {

      this.clearuptimer(this.state.timerArray[atimerIndex]) }



    this.state.timerArray.splice(atimerIndex, 1)
    this.setState({isChanged: true})



  }


  handleClickStartStop = (e, id) => {  //start timer for a timer object

    
    let atimer = this.state.timerArray.filter(timer => timer.id === id)
    atimer[0].laststarttime = atimer[0].laststarttime ? null : Date.now();

    if (!atimer[0].isCounting)   //starting timer
    {
      atimer[0].isCounting = true;


      this.runtimer(atimer[0]);
    }
    
    else {

        atimer[0].isCounting = false;
        // atimer[0].laststarttime = atimer[0].laststarttime ? null : Date.now();

      this.clearuptimer(atimer[0]);

    }
      

      this.setState({isChanged: true })
    // this.setState({timerArray: this.state.timerArray})


      console.log('atimer', atimer,this.state.timerArray)
    


  }

  runtimer = (atimer) => {

    const origintimer = atimer.timer
    atimer.tickid = setInterval(() => {atimer.timer =  origintimer +
            parseInt((Date.now() - atimer.laststarttime)/1000);

        this.setState({isChanged: true })

        },

        1000,
        )

  }

  clearuptimer = (atimer) => {

    clearInterval(atimer.tickid)


  }


  //
  // componentWillMount() {}
  //
  // componentDidMount() {}
  //
  // componentWillReceiveProps(nextProps) {}
  //
  // shouldComponentUpdate(nextProps, nextState) {}
  //
  // componentWillUpdate(nextProps, nextState) {}
  //
  // componentDidUpdate(prevProps, prevState) {
  //
  //   if (this.state.timerArray.findIndex(timer => timer.isUpdating) === -1 && AddBtn.isClickable ) {
  //
  //
  //
  //     AddBtn.isClickable = false
  //     this.setState({isChanged: true})
  //   }
  //
  //



  // }

  // componentWillUnmount() {}


  clickCommand =(e, command) => {

    let timerArray = this.state.timerArray
    if (command === 'add' && (this.state.timerArray.findIndex(timer => timer.isUpdating) === -1)) {

      timerArray.push({...this.state.defaulttimer})
      timerArray[timerArray.length - 1].id =  timerArray.length === 1 ? 1 : timerArray[timerArray.length - 2].id + 1
      timerArray[timerArray.length - 1].isUpdating = true

    }



    this.setState({timerArray: timerArray})
  }
    //------------------------------------------------------------------------------
    handleCreate = (e, id) => {

    let timerArray = this.state.timerArray

    e.preventDefault();

    let atimerIndex =  timerArray.findIndex(timer => timer.id === id)

    if (e.target.title.value  && e.target.project.value  ) {




      timerArray[atimerIndex].project = e.target.project.value
      timerArray[atimerIndex].title = e.target.title.value
      timerArray[atimerIndex].isUpdating = false


      this.setState({isChanged: true})

      AddBtn.isClickable = true
    }

  }

  handleUpdate = (e, id) => {

    if (this.state.timerArray.findIndex(timer => timer.isUpdating) === -1) {


      let atimerIndex = this.state.timerArray.findIndex(timer => timer.id === id)

      this.state.timerArray[atimerIndex].isUpdating = true

      this.setState({isChanged: true})

      AddBtn.isClickable = false
    }

  }


    handleCancel = (id) => {

       let timerArray = this.state.timerArray

      let atimerIndex =  timerArray.findIndex(timer => timer.id === id)
      timerArray[atimerIndex].isUpdating= false
      AddBtn.isClickable = true

      if (!timerArray[atimerIndex].title ) //indicates that this is from addtimerpanel cancel button

      {

        timerArray.pop()

    }



      this.setState({isChanged: true})

  }



  render() {

      console.log("Dashboard rendering...", Date.now());
    return (
      <div>
        <TimerList timerarr={this.state.timerArray} handleClick={this.handleClickStartStop}
                   handleCreate={this.handleCreate} handleUpdate={this.handleUpdate}
                   handleCancel={this.handleCancel}
                   deletetimer={this.deletetimer}


        />


          <AddBtn onclickupper={this.clickCommand} />

      </div>
    )
  }

}


export default TimerDashboard;
