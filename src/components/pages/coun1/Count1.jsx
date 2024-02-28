import { useState } from "react";

const Count1 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count < 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>Count 1</h3>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={reset}>RESET</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Count1;
