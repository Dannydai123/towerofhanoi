// import logo from './logo.svg';

// 45 practices at https://contactmentor.com/best-react-projects-for-beginners-easy/

import "./App.css";
import ReactDOM from "react-dom";
import {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import React from  "react"

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
import RegisterForm from "./Components/RegisterForm";



// example of children as props

class App1 extends Component {
    render() {
        return (
            <div className="container">


                <Container>
                    <span>
                        Content Here1
                    </span>



                </Container>




                {/*<Login />*/}
            </div>
        );
    }
}



class Container extends Component {
    render() {

        const arr = React.Children.toArray(this.props.children);

        console.log(this.props.children);

        console.log(arr)


        return (
        <div  >
            <hr />
                <ul>
            {React.Children.map(this.props.children, (child, index) => {

                return (<li>

                    {index} : <span>{child}</span>


                </li>)


            })
            }
</ul>
                <hr />



                       <ul>
            {arr.map((child, index) => {

                return (<li>

                    {index} : <span>{child}</span>

                </li>)


            })
            }
</ul>
        </div>
        )
    }
}


export default App1

