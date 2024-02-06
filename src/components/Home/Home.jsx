import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"
import Search from "../SearchBar/Search"
import Card from "../JobCard/Card"
import Footer from "../Footer/Footer"

import "./Home.css";

// const auth=getAuth(app);

const Home = () => {

 
  
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
  
    <Card />
  <Footer/>
    </div>
  )
}

export default Home