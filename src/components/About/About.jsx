import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import AboutHead from "./AboutHead"
import AboutContent from "./AboutContent"
// import Pricing from "./Pricing"
const About = () => {
  return (
    <div>
        <Navbar/>
       <AboutHead/>
       <AboutContent/>
       {/* <Pricing/> */}
        <Footer/>

    </div>
  )
}

export default About