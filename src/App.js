// import logo from './logo.svg';

// 45 practices at https://contactmentor.com/best-react-projects-for-beginners-easy/

import "./App.css";
import ReactDOM from "react-dom";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import {$} from 'jquery'

// import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";

// import Counter1 from "./Components/Counter1";

// import TemperatureWrapper from "./Components/TemperatureWrapper"
// import SearchFilter from "./Components/SearchFilter";
// import RegisterForm from "./Components/RegisterForm";
// import Quiz from "./Components/quiz";
import Navbar from "./Components/Navbar";

import LoginButton from "./Components/loginBtn";
import Login from "./Components/Login";

//-------------------------------------------------
// import Bagels from "./Components/Bagels";
// class App extends Component {
//   //     constructor() {
//   //         super();
//   //     }
//   // }
//   //
//   //     state = {
//   //
//   //
//   //     };
//
//   render() {
//     return (
//       <div className="container">
//         {/*<Counter1 /> //Q2*/}
//         {/*<TemperatureWrapper /> //Q3*/}
//         {/*    <SearchFilter />  /!*  Q4 *!/*/}
//         {/*<RegisterForm /> /!*  Q5 *!*!/*/}
//         {/*<Quiz /> //Q6*/}
//         {/*<Navbar />*/}
//         <Bagels />
//         {/*<Login />*/}
//       </div>
//     );
//   }
// }
//
// export default App;
//-------------------------------------------------

// timer tracking

import TimerDashboard from "./Components/timer tracking/TimerDashboard";

class App extends Component {
  render() {
    return (
      <div className="container">
        <p className="h4  text-center mt-2">Timers</p>
       < hr />

        <TimerDashboard />
        {/*<Login />*/}
      </div>
    );
  }
}

export default App;
