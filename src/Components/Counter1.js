// No2 of 45 practices

import 'bootstrap/dist/css/bootstrap.min.css';

// import {$} from 'jquery'

import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as PropTypes from "prop-types";

import {Component} from "react";

class Counter1 extends Component {


    state = {
        myCounter: 0


    }


    render() {
        return (
            <div>
                <button className="btn btn-primary btn-lg" onClick={this.handlebtnplusclick}>+</button>

                <span className={"w-25 d-inline-block text-center"}>{this.state.myCounter}</span>

                <button className="btn btn-primary btn-lg" onClick={this.handlebtnminusclick}>-</button>


            </div>


        );
    }

    handlebtnminusclick = (e) => {

        this.setState({myCounter: this.state.myCounter === 0 ? 0 : --this.state.myCounter})

    }

    handlebtnplusclick = (e) => {

        this.setState({myCounter: ++this.state.myCounter})
    }
}

export default Counter1