// No2 of 45 practices

import 'bootstrap/dist/css/bootstrap.min.css';

// import {$} from 'jquery'

import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as PropTypes from "prop-types";

import {Component} from "react";

import './temperature.css'

class Temperature extends Component {


    render() {


        const celsius = this.props.myTemperature
        const fahrenheit = (celsius * 9 / 5) + 32
        const bgcolorHue = celsius * 1.5 + 280
        const bg_color_style = {"background-color": `hsl(${bgcolorHue}, 100%, 50%)`}
        console.log(bg_color_style)
        return (

            <div className="container">

                <div className="card bg-light carddiv">
                    <div className="card-header text-center h2 ">Thermometer</div>
                    <div className="card-body ">
                        <div className="roundeddiv border rounded-circle m-auto   row align-items-center"
                             style={bg_color_style}
                        >


                            <p className="text-white   col text-center h2">{celsius} C<br/> <span
                                className="h6 mt-0"> {fahrenheit} F</span></p>

                        </div>
                    </div>
                    <div className="card-footer mb-0">
                        <div className="row ">
                            <button
                                className="footercircle border rounded-circle    m-auto  bg-dark  row align-items-center"
                                onClick={this.props.handlebtnplusclick}>


                                <p className="text-white    text-center  mb-0 w-100">+</p>

                            </button>

                            <button
                                className="footercircle border rounded    m-auto  bg-primary  row align-items-center text-white"
                                onClick={this.props.handlebtnreset}>


                                reset

                            </button>

                            <button
                                className="footercircle border rounded-circle   m-auto  bg-dark  row align-items-center  "
                                onClick={this.props.handlebtnminusclick}


                            >


                                <p className="text-white  text-center mb-0 w-100">-</p>

                            </button>


                        </div>


                    </div>

                </div>
            </div>

        );
    }


}

export default Temperature