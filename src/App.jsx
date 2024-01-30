
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import "./App.css";
import Login from "./components/Log/Login";
import Signup from "./components/Log/Signup";


const App = () => {

  return (
    <div>
    
    
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route  exact path="/" element={<Home/>}/>
    
        </Routes>
      
    
  
  </div>
  )
}

export default App