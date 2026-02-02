const heading = React.createElement(
    "h1", 
    {id: "heading", xyz: "abc"}, 
    "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);