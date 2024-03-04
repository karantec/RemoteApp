import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import ContactHead from "./ContactHead"
import ContactContent from "./ContactContent"
const Contact = () => {
  return (
    <div><Navbar/>
            <ContactHead/>
            <ContactContent/>
     <Footer/>
     </div>
  )
}

export default Contact