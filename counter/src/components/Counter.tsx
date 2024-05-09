import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseNumber = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decreaseNumber = () => {
    setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="d-grid gap-2 col-6 mx-auto">
        <h1>Counter: {counter}</h1>
        <button
          className="btn btn-primary"
          type="button"
          onClick={increaseNumber}
        >
          +
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={decreaseNumber}
        >
          -
        </button>
        <button
          className="btn btn-dark"
          type="button"
          onClick={resetCounter}
        >
          Reset Counter
        </button>
        
      </div>
    </>
  );
};

export default Counter;
