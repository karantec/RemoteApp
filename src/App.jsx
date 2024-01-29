import Navbar from "./components/Navbar"

import Header from "./components/Header/Header"
import Search from "./components/SearchBar/Search"
import Card from "./components/JobCard/Card"
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {

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
        </div>
  <Navbar/>
 
  <Header/>
  <Search/>
  
  <Card/>
  <Footer/>
  </div>
  )
}

export default App