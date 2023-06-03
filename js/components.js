"use strict";

function Project(props) {
  return React.createElement("figure", null, React.createElement("a", {
    href: props.url,
    target: "_blank"
  }, React.createElement("img", {
    src: props.img
  })), React.createElement("figcaption", null, React.createElement("a", {
    href: props.url,
    target: "_blank"
  }, props.caption)));
}

function ProjectList() {
  return React.createElement("div", {
    id: "img-container"
  }, React.createElement(Project, {
    img: "images/SnakeXNA_IMG.png",
    caption: "snake xna",
    url: "Extentions/SnakeXNA/SnakeXNA.html"
  }), React.createElement(Project, {
    img: "images/ReactionTest_IMG.PNG",
    caption: "reaction test",
    url: "Extentions/reaction-test/reaction-test.html"
  }), React.createElement(Project, {
    img: "images/Tic-Tac-Toe.png",
    caption: "Tic Tac Toe",
    url: "Extentions/tic-tac-toe/tic-tac-toe.html"
  }));
}

var el = React.createElement(ProjectList, null);
ReactDOM.render(el, document.getElementById("img-container"));