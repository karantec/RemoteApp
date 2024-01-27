import Navbar from "./components/Navbar"
import  { useState } from "react";
import Header from "./components/Header/Header"
import Search from "./components/SearchBar/Search"
import Card from "./components/JobCard/Card"
import { Footer } from "./components/Footer/Footer"
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
    <div className="area">
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		
  <Navbar/>
 
  <Header/>
  <Search/>
  <Card/>
  <Footer/>
  <div className="fixed bottom-0 right-0 p-4">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-full"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    </div>
    </div>
    </div>
  )
}

export default App