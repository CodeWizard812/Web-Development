import React from "react";
import ReactDOM from "react-dom/client";

const customStyle = {
  color: "blue",
  backgroundColor: "lightgray",
  fontSize: "24px",
  textAlign: "center",
  padding: "20px",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<h1 style={customStyle}>Hello World!</h1>);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
