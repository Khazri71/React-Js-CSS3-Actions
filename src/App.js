import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isLight, setIsLight] = useState(true);

  const increment = () => {
    setCount(count + 1);
    setIsLight(!isLight);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setIsLight(!isLight);
    }
  };

  return (
    <div>
      <div className={isLight ? " content back-light" : " content back-dark"}>
        <div className="number">
          <h2>{count}</h2>
        </div>
        <div className="btn-control">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
