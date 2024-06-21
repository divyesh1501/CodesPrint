import React, { useContext } from "react";
import CounterContext from "./CounterContext";

function Counter() {
  const context = useContext(CounterContext);
  const { count, handleClick } = context;

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Counter;
