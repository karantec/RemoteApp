import { useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Log/Login";
import Signup from "./components/Log/Signup";
import Resource from "./components/Resources/Resource";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Service from "./components/Services/Services";

import JobPage from "./components/JobCard/JobPage";

// ScrollToTop component for scrolling to the top when route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // This effect will run whenever the pathname changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [pathname]);

  // Returning null because this component doesn't render anything
  return null;
};

const App = () => {
  return (
    <div>
      {/* Include the ScrollToTop component */}
      <ScrollToTop />

      <Routes basename="/">
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/Resource" element={<Resource />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/job/:id" element={<JobPage />} /> {/* Corrected 'element' prop */}
      </Routes>
    </div>
  );
};

export default App;
