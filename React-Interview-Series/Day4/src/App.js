import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleClick = () => {
    // alert("Button was clicked" + input);
    setItems((prev) => [...prev, input]);
  };

  return (
    <div className="App">
      <h3>Day 3: Event handling and State management</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a text"
      />
      <button onClick={handleClick}>Create</button>
    </div>
  );
}

export default App;
