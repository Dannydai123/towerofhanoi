import "bootstrap/dist/css/bootstrap.min.css";

// import {$} from 'jquery'

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";

import {Component, useEffect, useState} from "react";

import "./app.css";

import React from "react";

const hanoiWidthArray = [10, 20, 50, 75, 95]; //if number of hanoi is 5

const HANOILAYERS = 5;
const HEIGHTPERLAYER = 40;
const STICKBASEHEIGHT = 100;

const mappedWidth = [10, 20, 50, 75, 95];

const Tower = ({ hanoi ,name, hanoiHandleClickFromUpper, blink}) => {
  // hanoi = [1, 2, 3, 4, 5];






    // useEffect(() => {
    //
    //     if (!blink) {
    //
    //         setClicking(false)
    //
    //
    //     }
    //
    //
    // }, [blink]);




    const stickHeight =
    (HANOILAYERS - hanoi.length) * (HEIGHTPERLAYER + 2) + STICKBASEHEIGHT;

    console.log(name,"rendering...")



  return (
    <div className="col border   text-center ">
      <div
        className="stick d-inline-block mt-5"
        style={{ height: stickHeight }}


         onClick = {( ) => hanoiHandleClickFromUpper(name,"stick")}

      />
      <div className="margin-b  " />

      {hanoi.map((ele,idx) => {
        const eleWidth = mappedWidth[ele - 1];

        return (
          <div key={idx}>
            <div
              className={`w-10 myrow myrounded bg-info ${blink&&idx===0?"alerts-border": undefined}  d-inline-block w-${eleWidth}`}


                  onClick = {idx === 0 ?

                       ( ) => hanoiHandleClickFromUpper( name,"hanoi")

                      : undefined}


            />
            <div className="margin-b  " />
          </div>
        );
      })}

      <div className="margin-bottom "/>
      <div className="bottom  "/>
    </div>
  );
};

export default Tower;
