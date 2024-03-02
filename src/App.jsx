// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Log/Login";
import Signup from "./components/Log/Signup";
import Resource from "./components/Resources/Resource";

const App = () => {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Resource" element={<Resource/>}></Route>
        <Route  path="/Signup"  element={<Signup/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
