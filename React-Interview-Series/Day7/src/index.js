import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import App from "./App";     // prop drilling
import App from "./App2"; // using zustand

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
