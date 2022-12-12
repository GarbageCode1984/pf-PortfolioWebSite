import React from "react";
import "./App.scss";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Skilles from "./components/Skilles";
import "./components/scss/reset.scss";

function App() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Skilles />
      <Project />
    </>
  );
}

export default App;
