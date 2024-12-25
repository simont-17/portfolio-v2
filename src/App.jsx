import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
