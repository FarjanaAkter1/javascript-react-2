import React from "react";
import { useState } from "react";

export const MinMaxCounter = () => {
  //create hook with counter and set counter

  let [counter, setCounter] = useState(0);
  // create hook with counter and setCounter
  //intialize counter to value o
  //create handleclick function

  let [min, setMin] = useState(0)
  //create variables for min value
  let [max,setMax] = useState(0)

//create variables for max value

  const handleClick = (direction) => {

    if (direction === "up") {
      setCounter(++counter)
      if(counter >= max){

        setMax(counter)
      }
    } else {
      setCounter(--counter);
   if(counter <= min){
    setMin(counter)
   }

    }
  };



  //make if else statement
  //else if argument passed in "up " increment counter
  //else decrement counter

  return (
    <div>
      {/* { creatre down button} */}

      <button onClick={() => handleClick("down")}>down</button>
      {counter}
      <button onClick={() => handleClick("up")}>up</button>
      <p> Min:{min}</p>
      <p> Max:{max}</p>

      {/* {  create handle click and need to passed actual string,,on click taking the hande click} */}
      {/* {create up button---create handle click and need to passed actual string,,on click taking the hande click} */}
    </div>
  );
};