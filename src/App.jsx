import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <Router basename="/portfolio-v2">
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} /> {}
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
