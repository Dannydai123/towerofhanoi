import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import Tower from "./Tower";

import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from "../../reportWebVitals";
import Steps from "./Steps";
import {typeImplementation} from "@testing-library/user-event/dist/type/typeImplementation";



            // tower of hanoi



const HANOILAYERS = 5
const heightPerLayer = 40


let numberOfClicks = 0

let sourceTower = ''

// let blink = true

const App= () =>  {




    const [tower1, setTower1] = useState(

           Array.from(Array(HANOILAYERS).keys(), x => x+1)


    );
    const [tower2, setTower2] = useState([]);

    const [tower3, setTower3] = useState([]);


    const [blinkArr, setBlinkArr] = useState(
        [false,

        false,
        false
    ]
    );


    const nameArr = ['tower1', 'tower2', 'tower3']


    const [steps, setSteps] = useState(0);


    function setblink() {



    }

    function shiftHanoi(source, destination) {

         const mappedArrName =  {

        tower1: [tower1, setTower1],
        tower2: [tower2, setTower2],
        tower3: [tower3, setTower3]

    }
          if   (!mappedArrName[source][0][0]){


          }

          else if (mappedArrName[source][0][0] <  mappedArrName[destination][0][0] ||  mappedArrName[destination][0].length===0) {

              setBlinkArr([false,false, false])


              const poppedItem = mappedArrName[source][0].shift(1)


              mappedArrName[source][1]([...mappedArrName[source][0]])

              mappedArrName[destination][0].unshift(poppedItem)

              mappedArrName[destination][1]([...mappedArrName[destination][0]])

              setSteps( steps + 1 )



          }

          else {

              setBlinkArr([false,false, false])


          }


    }


    const handleClickHanoiandStick  = ( name, obj) => {

        if (typeof steps === "string") {
            return
        }


        console.log( name, obj)


        numberOfClicks ++

        console.log("click counts:", numberOfClicks)

        if (numberOfClicks % 2 === 1) {

            sourceTower = name


        setBlinkArr((prevState) => {


           let  newState = [...prevState]
            newState[ nameArr.indexOf(name)] = true


            return  newState

        })

        }

        else if (numberOfClicks % 2 === 0){

            shiftHanoi(sourceTower, name)

            console.log(tower1,tower2,tower3)



            if (JSON.stringify(tower2 ) === JSON.stringify(Array.from(Array(HANOILAYERS).keys(), x => x+1)) ||
                JSON.stringify(tower3 )=== JSON.stringify(Array.from(Array(HANOILAYERS).keys(), x => x+1))
            ) {

                setSteps(`YOU WIN! YOUR STEPS ${steps}`)



            }

            }

        }



    console.log("app rendering...")
    return (
<>
    <p className="h2 text-center">Tower of Hanoi</p>
            <hr />

        <Steps steps={steps}/>


    <hr />
        <div className="container   heightfull mt-5  align-items-stretch align-items-end   row h-100 mx-auto align-items-end">


            <Tower hanoi={tower1} name={"tower1"} hanoiHandleClickFromUpper={handleClickHanoiandStick}
            blink={blinkArr[0]}

            />
            <Tower hanoi={tower2} name={"tower2"} hanoiHandleClickFromUpper={handleClickHanoiandStick}
            blink={blinkArr[1]}

            />
            <Tower  hanoi={tower3} name={"tower3"} hanoiHandleClickFromUpper={handleClickHanoiandStick}

                blink={blinkArr[2]}
                />


        </div>



     <div className="container">
      <hr />
                 <p className={"h3 text-success  "}>Objective</p>
                  <ul><li>shift the entire stack of disks from one rod to another rod</li></ul>
   <p className={"h3 text-success  "}>Rules</p>
    <ul >

     <li>Only one disk can be moved at a time.</li>
      <li>
         a disk can only be
        moved if it is the uppermost disk on a stack.
      </li>
      <li>No larger disk may be placed on top of a smaller disk.</li>
    </ul>

      </div>

</>

    );
  }


export default App





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
