
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {app} from "../../../firebase.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";


const auth=getAuth(app);


const Signup = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");
  const [phoneNumber,setphoneNumber]=useState("");
  
  const navigate = useNavigate();

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password,phoneNumber,name)
      .then(() => {
        toast.success("User Successfully Created");
        navigate("/login"); 
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error creating user:", error.message);
        toast.error("Error creating user: " + error.message);
      });
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <ToastContainer />
      <div className="md:w-1/3 max-w-sm">
        <img
          src="Work.jpg"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
         
        </div>
       
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Email Address"
        />
         <input
          className="text-sm  mt-2 w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          onChange={(e)=>setName(e.target.value)}
          placeholder="Name"
        />
        <br/>
         <input
          className="text-sm  mt-2 w-full px-4 py-4 border border-solid border-gray-300 rounded"
          type="text" 
          onChange={(e)=>setphoneNumber(e.target.value)}
          placeholder="Enter 10  digit Phone Number"
        />
        
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"  onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
        />
        
       
        <div className="text-center md:text-left">
         <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
         onClick={createUser}>Signup</button>
          
     
        </div>
        
      </div>
    </section>
  );
};


export default Signup;