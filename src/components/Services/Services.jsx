import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import ServiceHead from "../Services/ServiceHead"
import ServiceContent from "./ServiceContent"
const Services = () => {
  return (
    <div>
        <Navbar/>
        <ServiceHead/>
        <ServiceContent/>
        <Footer/>
    </div>
  )
}

export default Services