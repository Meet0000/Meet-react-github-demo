import React, { useState } from 'react'; // Import React and useState
import Greeting from './Greeting'; // Import the Greeting component

function App() {
  const [count, setCount] = useState(0); // Initialize state variable count

  return (
    <>
      <Greeting /> {/* Include the Greeting component */}
      <h1>Hello!, I am Meet Patel</h1>
      <h2>This is my first React Vite project for learning Git workflow</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>Current Count: {count}</p>
    </>
  );
}

export default App;
