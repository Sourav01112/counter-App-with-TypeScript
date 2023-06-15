import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  //this useEffect is being used in order to first get the value of counter before saving
  useEffect(() => {
    const storedCount = localStorage.getItem("counter");
    if (storedCount) {
      setCounter(JSON.parse(storedCount));
    }
  }, []);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleIncrementFive = () => {
    setCounter(counter + 5);
  };
  const handleDecrementFive = () => {
    setCounter(counter - 5);
  };

  // this useEffect is being used to store the count value to localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem("counter", counter.toString());
  }, [counter]);

  return (
    <div className="App">
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="increment" onClick={handleIncrement}>
        Increment
      </button>
      <button data-testid="decrement" onClick={handleDecrement}>
        Decrement
      </button>
      <button data-testid="increment5" onClick={handleIncrementFive}>
        Increment 5 times
      </button>
      <button data-testid="decrement5" onClick={handleDecrementFive}>
        Decrement 5 times
      </button>
    </div>
  );
}

export default App;
