import React from "react";
import ReactDOM from "react-dom/client";

// variable with html

const page = (
  <div>
    <img src={require("./react-logo.png")} width="40" alt="react logo"/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was orginally created by Jordan Walke</li>
      <li>Has well over 100k stars on GitHub</li>
      <li>Is maintaned by Facebook</li>
      <li>Powers thousands of enterprise apps including mobile apps</li>
    </ul>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(page);

