import React from "react";
import "../index.css"

export default function Main() {
  return (
    <div className="main">
      <h1>Fun facts about React</h1>
      <ul>
        <li>
          <span>Was first released in 2013</span>
        </li>
        <li>
          <span>Was originally created by Jordan Walke</span>
        </li>
        <li>
          <span>Has well over 100k starts on GitHub</span>
        </li>
        <li>
          <span>Is maintaned by Facebook</span>
        </li>
        <li>
          <span>Powersthousands of enterprise apps, including mobile apps</span>
        </li>
      </ul>
    </div>
  );
}
