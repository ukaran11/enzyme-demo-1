import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">
          {count}
        </span>
      </h1>
      <button 
        data-test="increment-button"
        onClick={() => setCount((prevCount)=>{ return prevCount + 1})}>Increment Counter</button>
    </div>
  );
}

export default App;
