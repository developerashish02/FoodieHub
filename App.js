const element = React.createElement("h1", {
    id: "heading",
    xyz: "Ashish"
}, "Hello from React");


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);