import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div id="parent">
 * <div id="child">
 * <h1>I am h1 tag</h1></div>
 * <h2>I am h1 tag</h2></div>
 * </div>
 */


// const parent = React.createElement(
//     "div",{id: "parent"},
//     React.createElement("div",{id: "child"},
//         React.createElement("h1", {}, "I am h1 tag")
//     ))

// const parent = React.createElement(
//     "div",{id: "parent"},
//     React.createElement("div",{id: "child"},
//         [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]
//     ))

//     console.log(parent);

// --------E3---------

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", { id: "child1", key: "h1" }, "I'm a h1 tag"),
      React.createElement("h2", { id: "child2", key: "h2" }, "I'm a h2 tag")
    ]
  )
);

    

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



// const heading = React.createElement(
//     "h1", 
//     {id: "heading", xyz: "abc"}, 
//     "Hello World"); // this not a heading yet it is an object

//     console.log(heading);
    

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);