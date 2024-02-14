// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Log/Login";
import Signup from "./components/Log/Signup";
// import ApplyCard from "./components/JobCard/ApplyCard";

const App = () => {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}></Route>
       
        <Route  path="/signup"  element={<Signup/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
