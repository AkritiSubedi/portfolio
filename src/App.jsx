import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Aboutme from "./Aboutme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Skills from "./Skills";
import Project from "./Project";
import Firstpage from "./Firstpage";
import Form from "./Form";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Routes> */}
        <Firstpage />
        <Aboutme />
        <Skills/>
        <Project />
        <Form />
        {/* <Route path="/" element={<Firstpage />} /> */}
        {/* <Route path="/body" element={<Body />} /> */}
        {/* <Route path="/contact" element={<Form />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/skills" element={<Skills />} /> */}
        {/* <Route path="/project" element={<Project />} /> */}
        {/* </Routes> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
