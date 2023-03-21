import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import About from "./components/About";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Skilles from "./components/Skilles";
import "./components/scss/reset.scss";
function App() {
    return (
        <>
            <Home />
            <Navigation />
            <About />
            <Skilles />
            <Project />
        </>
    );
}

export default App;
