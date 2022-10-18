import "bootstrap/dist/css/bootstrap.min.css";

// import $ from "jquery";

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";
import { map } from "react-bootstrap/ElementChildren";



import React from 'react';

const Screen = ({calcResult}) => {
    return (


        <div className="card-header text-right h1 bg-dark pt-2 text-white  " id="screen">

            {calcResult}

        </div>


    );
};

export default Screen;
