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

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [
//       React.createElement("h1", { id: "child1", key: "h1" }, "I'm a h1 tag"),
//       React.createElement("h2", { id: "child2", key: "h2" }, "I'm a h2 tag")
//     ]
//   )
// );

    

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



// const heading = React.createElement(
//     "h1", 
//     {id: "heading", xyz: "abc"}, 
//     "Hello World"); // this not a heading yet it is an object

//     console.log(heading);
    

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading = React.createElement("h1",{id:"heading"},"hello this is new code")
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//react element
// const jsxHeading = <h1 id="heading">This is inside JSX</h1>;


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

//functional component
//* component composition

// const Title = ()=>{
//   <h1 className="head" tabIndex={5}>
//     Hellof from title
//   </h1>
// }

// const HeadingComponent = () => {
//   <div id="container">
//     <title>
//       <h1 className="heading">
//         Hello from fn comp.
//       </h1>
//     </title>
//   </div>
// }; 
const Header =()=>{
return(
<div className="header">
  <div className="logo-contianer">
    <img src="" alt="logo" className="logo"/>
  </div>
  <div className="nav-items">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contract</li>
      <li>Cart</li>
    </ul>
  </div>
  </div>

);
};

const AppLayout= () => {
  return <div className="app">
    <Header/>
  </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

