import React, { useState, useEffect } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <SubComponent />}
    </div>
  );
}

function SubComponent() {
  const [userId, setUserId] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("run effect when component mounts for user: " + userId);
    return () => console.log("cleanup function userId: " + userId);
  }, [userId]);

  return (
    <div className="App">
      <div>
        <p>User selected: {userId}</p>
        <p>Counter value: {count}</p>
      </div>
      <div>
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Increment Count
        </button>
      </div>
    </div>
  );
}
