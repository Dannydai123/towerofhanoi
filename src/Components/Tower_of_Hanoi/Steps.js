import "bootstrap/dist/css/bootstrap.min.css";

// import {$} from 'jquery'

import "bootstrap/dist/js/bootstrap.bundle.min";
import "./app.css"


import React from 'react';

function Steps(props) {


    const {steps} = props
    return (
        <div className="container">

            <p className={"h1 text-center bg-secondary text-light"}> {steps}</p>



        </div>
    );
}

export default Steps;


