//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser


import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const date = new Date( 2023, 10, 1, 15, 0, 0); // Example date: October 1, 2023, 3:00 PM
const hours = date.getHours();
let greeting = "";
let customStyle = {};
if (hours < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
}
else if (hours < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
}
else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}
root.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>
);