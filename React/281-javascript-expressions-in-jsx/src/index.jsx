import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const fname = "Shirish";
const lname = "B";
const num = Math.floor(Math.random() * 100);
root.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>Your Lucky number is {num}</p>
  </div>
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
