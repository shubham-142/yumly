// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World";
// const root = document.getElementById("root");
// root.appendChild(heading);

//const heading = React.createElement("h1", {id:"heading", abc:"xyz"}, "Hello World");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "title1" }, "Title for Child-1"),
    React.createElement("h2", { id: "subTitle1" }, "SUb-Title for Child-1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "title2" }, "Title for Child-2"),
    React.createElement("h2", { id: "subTitle2" }, "SUb-Title for Child-2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
