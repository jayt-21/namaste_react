const h=React.createElement("h1",{
    //attributes of the html obj
    id:"heading",
    xyz:"abc"
},"Hello World");
const root=ReactDOM.createRoot(document.getElementById("root"));

const par= React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child1"},
        React.createElement("h1",{id:"head"},"Hello World from child1"),
        React.createElement("div",{id:"child2"},
        React.createElement("h1",{id:"head2"},"Hello World from child2")
    )))

root.render(par);