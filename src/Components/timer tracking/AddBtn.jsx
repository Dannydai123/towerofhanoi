import "bootstrap/dist/css/bootstrap.min.css";

// import {$} from 'jquery'

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";
import { map } from "react-bootstrap/ElementChildren";


import React, { Component } from "react";

class AddBtn extends Component {




static isClickable = true;



  render() {
        console.log("AddBtn rendering...", Date.now());




    return (AddBtn.isClickable) && (

       <div className=" text-center">



        <a href="javascript:void(0)" className="btn btn-outline-primary"
           onClick={(e) => {
             AddBtn.isClickable = !AddBtn.isClickable;

             this.props.onclickupper(e, "add");
           }


             }> + </a>


      </div>)
  }
}

export default AddBtn;
