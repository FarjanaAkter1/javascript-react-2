import React from "react";

import { useState } from "react";

export const TenCounter = () => {
  let [counter, setCounter] = useState(0);
  const handleClick = () => {
    if (counter > 10) {
      setCounter(0);
    } else {
      setCounter(counter++);
    }
  };

  return (
    <div>
      TenCounter
      <button onClick={() => handleClick()}>push</button>
      Counter:{counter}
    </div>
  );
};
