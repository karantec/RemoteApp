import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Log/Login";
import Signup from "./components/Log/Signup";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle successful signup
  const handleSignup = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Routes>
        {/* Signup Route */}
        <Route
          path="/Signup"
          element={<Signup onSignupSuccess={handleSignup} />}
        />
        {/* Login Route */}
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLogin} />}
        />
        {/* Home Route */}
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/signup" />}
        />
      </Routes>
    </div>
  );
};

export default App;
