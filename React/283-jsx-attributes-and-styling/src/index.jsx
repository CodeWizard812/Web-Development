import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDOM.render is deprecated in React 18
// ReactDOM.createRoot is the new way to render in React 18
const img = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/200/300?grayscale";
const img3 = "https://picsum.photos/200/300?blur";
const img4 = "https://picsum.photos/200/300?grayscale&blur";
const img5 = "https://picsum.photos/200/300?blur&grayscale";

root.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false" >My Favourite Foods</h1>
    <div>
      <img src={img}  />
      <img src={img2}  />
      <img src={img3}  />    
      <img src={img4}  />
      <img src={img5}  />
    </div>
  </div>
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
