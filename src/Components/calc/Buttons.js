import "bootstrap/dist/css/bootstrap.min.css";

// import $ from "jquery";

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";
import { map } from "react-bootstrap/ElementChildren";

import React from "react";

const Buttons = ({ btnList, handleClick }) => {
  // console.log(btnList);

  return (
    <div>
      <div className="card-body p-0 " id="btnlayout">
        <div className="row m-0 align-items-stretch w-100 h-100 bd-highlight m-auto align-content-stretch no-gutters ">
          {btnList.map((btn) => {
            let btnSize = "";

            btnSize = btn.btnName === "0" ? "col-6" : "col-3";

            return (
              <button key={btn.btnName}
                type="button"
                className={btnSize + " btn btn-secondary " + btn.btnColor}

                onClick={()=> handleClick(btn)}
              >
                {btn.btnName}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
