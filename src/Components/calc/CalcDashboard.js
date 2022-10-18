import "bootstrap/dist/css/bootstrap.min.css";

import "./calc_flexCss.css";

// import $ from "jquery";

import "bootstrap/dist/js/bootstrap.bundle.min";
import * as PropTypes from "prop-types";
import { map } from "react-bootstrap/ElementChildren";

import React, {useEffect, useState} from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";

const DARKER = "darker";
const BTNINFO = "btn-info";
const btnName = [
  "AC",
  "\xb1",
  "%",
  "\xf7",
  "7",
  "8",
  "9",
  "\xd7",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
const btnColor = [
  DARKER,
  DARKER,
  DARKER,
  BTNINFO,
  "",
  "",
  "",
  BTNINFO,
  "",
  "",
  "",
  BTNINFO,
  "",
  "",
  "",
  BTNINFO,
  "",
  "",
  BTNINFO,
];

const operatorFunction = [true, true, true, true, false,false,false,true,  false,false,false,true,false,false,false,true,false,false,true]


  //global variables

  let prevOperand = 0,
    stackedOperand = 0,
    earlierStackedOperand = 0;
  let tempOperandStr = "";
  let stackedOperatorStr = "",
    earlierStackedOperatorStr = "";
  let lastOpearatorInput = ''



  let btnList = [];

   let btn = {
    btnName: "button name",
    operatorFunction: false, // true if operator
    btnColor: "",
  };



  btnName.forEach((btnname, idx) => {
    btn.btnName = btnname;
    btn.btnColor = btnColor[idx];
    btn.operatorFunction = operatorFunction[idx]
    btnList.push({ ...btn });

  })


function calcLog(title ='') {

    console.log(title)
    console.log('prev', prevOperand, 'stacked-rand', stackedOperand, 'early-rand', earlierStackedOperand, 'stack-operator',stackedOperatorStr,'e-operator', earlierStackedOperatorStr, 'temprand', tempOperandStr)



}

const CalcDashboard = () => {



  //state----------------------------------------

  const [calcResult, setCalcResult] = useState(0);

  //  critical section
  const handleBtnClick = ({ btnName, btnColor, operatorFunction }) => {



    if (btnName === "\xf7") {
      btnName = "/";
    } else if (btnName === "\xd7") {
      btnName = "*";
    }


      if (['+', '-', '*', '/','\xb1'].includes(lastOpearatorInput) &&   ['+', '-', '*', '/','='].includes(btnName) ) {

        stackedOperatorStr = btnName

        calcLog('double-simbol')

        lastOpearatorInput = btnName

        return


      }
      else if ((lastOpearatorInput ==='=') && btnName.isNumber()) {


          prevOperand = 0;
          stackedOperand = 0;
          tempOperandStr = btnName;
          stackedOperatorStr = "";
          earlierStackedOperatorStr = "";

      }

      else

      {lastOpearatorInput = btnName}






    if (!operatorFunction) {
      tempOperandStr = parseFloat(tempOperandStr + btnName);

        if (tempOperandStr) {
        btnList[0].btnName = 'C'
      }




      setCalcResult( tempOperandStr);
    } else

    {



      calcLog()


      handleOperator(btnName);



     calcLog()

      if (isNaN(prevOperand))
      { prevOperand = 0}

      setCalcResult( tempOperandStr || prevOperand);
    }

    //---------------------------------
    function handleOperator(btnName) {
      //--------------------------------------

      function pushToStack() {
        if (stackedOperand) {
          earlierStackedOperand = stackedOperand;
        }

        stackedOperand = prevOperand; //into stack
        prevOperand = parseFloat(tempOperandStr);

        tempOperandStr = "";

         console.log('prev', prevOperand, 'stacked-rand', stackedOperand, 'early-rand', earlierStackedOperand, 'stack-operator',stackedOperatorStr,'e-operator', earlierStackedOperatorStr, 'temprand', tempOperandStr)

        // if (!stackedOperatorStr) {
        //
        //     earlierStackedOperatorStr = stackedOperatorStr
        //
        // }
        //
        // stackedOperatorStr =
      }

      //-----------------------------------------
      //main handleOperator

    //
    // if (btnName !== 'C' && btnName !=='AC'){
    //   pushToStack();
    // }



      switch (btnName) {
        case "\xb1":

          if (tempOperandStr) {
            tempOperandStr = -tempOperandStr
          }
          else if (prevOperand){

            prevOperand = -prevOperand
          }


          break;

        case "%":
          tempOperandStr /= 100;
          break;

        case "C":

          tempOperandStr = "0"


          btnList[0].btnName = "AC";

          console.log(btnList)

          break;
        case "AC":
          prevOperand = 0;
          stackedOperand = 0;
          tempOperandStr = "";
          stackedOperatorStr = "";
          earlierStackedOperatorStr = "";

          break;

        case "+":
        case "-":
          calcLog("title");

          if (stackedOperatorStr === "+"  ) {
            prevOperand =
              prevOperand  + (parseFloat(tempOperandStr)); //subresult
          }
          else if (stackedOperatorStr === "-") {

             prevOperand =
              prevOperand - (parseFloat(tempOperandStr));


          }
          else if (stackedOperatorStr === "/") {
            // devide

                 prevOperand =
              stackedOperand +
              (earlierStackedOperatorStr === "-"
                ? -parseFloat(prevOperand / tempOperandStr)
                : parseFloat(prevOperand / tempOperandStr));

            stackedOperand = 0;
          } 
          else if (stackedOperatorStr === "*") {
            prevOperand =
              stackedOperand +
              (earlierStackedOperatorStr === "-"
                ? -parseFloat(prevOperand * tempOperandStr)
                : parseFloat(prevOperand * tempOperandStr));

            stackedOperand = 0;
          } else if (!stackedOperatorStr) {
            prevOperand = parseFloat(tempOperandStr);
          }

          earlierStackedOperatorStr = "";
          stackedOperatorStr = btnName;
          tempOperandStr = "";

          calcLog("title-end");
          break;

        case "/":
        case "*":
            calcLog("title-*/-start");
          switch (stackedOperatorStr) {
            case "":
              prevOperand = parseFloat(tempOperandStr);

              break;
            case "+":
            case "-":
              earlierStackedOperatorStr = stackedOperatorStr;

              stackedOperand = prevOperand
                prevOperand = parseFloat(tempOperandStr)

              break;

            case "*":
              prevOperand = prevOperand * tempOperandStr;

              break;
            case "/":
              prevOperand = prevOperand / tempOperandStr;

              break;}

          stackedOperatorStr = btnName;
          tempOperandStr = "";
          calcLog("title-*/-end");
          break;

            case "=":
              calcLog("title-=-start");
              switch (stackedOperatorStr) {
                case "/":

                  prevOperand =
                    stackedOperand +
                    parseFloat(
                      earlierStackedOperatorStr +
                        String(parseFloat(prevOperand) / parseFloat(tempOperandStr))
                    );

                  break;



                case "*":
                  prevOperand = stackedOperand +

                    parseFloat(
                      earlierStackedOperatorStr +
                        String(tempOperandStr * prevOperand)
                    );

                  break;

                case "+":
                case "-":

                   prevOperand =
                     parseFloat(stackedOperatorStr + tempOperandStr) +
                       prevOperand

                      break

              }

                tempOperandStr=''
                stackedOperatorStr=''
                tempOperandStr = prevOperand


              calcLog("title-=-end");
              break

          }
      }
      
      
      

    }


console.log('dashbord render')




  return (
    <div>
      <p className="h4  text-center mt-2">Danny's Calculator</p>

      <hr />

      <Screen calcResult={calcResult} />

      <Buttons btnList={btnList} handleClick={handleBtnClick} />
    </div>
  );
};

export default CalcDashboard;
