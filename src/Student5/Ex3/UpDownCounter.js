import React from "react";
import { useState } from "react";

export const UpDownCounter = () => {
  //create hook with counter and set counter

  let [counter, setCounter] = useState(0);
  // create hook with counter and setCounter
  //intialize counter to value o
  //create handleclick function
  const handleClick = (direction) => {
    if (direction === "down") {
      setCounter(counter--);
    } else {
      setCounter(counter++);
    }
  };
  //make if else statement
  //else if argument passed in "up " increment counter
  //else decrement counter

  return (
    <div>
      {/* { creatre down button} */}

      <button onClick={() => handleClick("down")}>down</button>
      <p> {counter}</p>
      <button onClick={() => handleClick("up")}>up</button>

      {/* {  create handle click and need to passed actual string,,on click taking the hande click} */}
      {/* {create up button---create handle click and need to passed actual string,,on click taking the hande click} */}
    </div>
  );
};
