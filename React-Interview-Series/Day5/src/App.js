// https://jsonplaceholder.typicode.com/posts

import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setData(data);
  };

  return (
    <div>
      <h3>Day 5: API Request & Passing Data</h3>
      <button onClick={fetchData}>Fetch All Post</button>
      {data.map((data, index) => {
        return <Post key={index} title={data.title} body={data.body} />;
      })}
    </div>
  );
}

export default App;

function Post({ title, body }) {
  return (
    <div class="card">
      <div class="img-container">
        <img
          src="https://images.unsplash.com/photo-1610932793632-6ba00bdffee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA2NzkwMDh8&ixlib=rb-4.0.3&q=85"
          width="336"
          alt=""
        />
      </div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
