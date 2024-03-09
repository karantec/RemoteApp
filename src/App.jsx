// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Log/Login";
import Signup from "./components/Log/Signup";
import Resource from "./components/Resources/Resource";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Service from "./components/Services/Services";
const App = () => {
  

  return (
    <div>
      <Routes  basename="/">
        <Route  path="/" element={<Home />} />
        <Route basename="/Login" path="/Login" element={<Login/>}></Route>
        <Route basename="/About" path="/About" element={<About/>}></Route>
        <Route basename="/contact" path="/contact" element={<Contact/>}></Route>
        <Route  basename="/services" path="/services" element={<Service/>}></Route>
        <Route  basename="/resources" path="/Resource" element={<Resource/>}></Route>
        <Route  basename="/Signup" path="/Signup"  element={<Signup/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
