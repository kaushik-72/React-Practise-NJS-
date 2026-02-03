const heading = React.createElement(
    "h1", 
    {id: "heading", xyz: "abc"}, 
    "Hello World"); // this not a heading yet it is an object

    console.log(heading);
    

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);