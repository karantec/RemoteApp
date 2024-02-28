

import {signInWithEmailAndPassword, getAuth,GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import { useState } from "react";
import {app} from "../../../firebase.js";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const Login = ( ) => {
 
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const [redirectUrl, setRedirectUrl] = useState("");

  const createUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("User Successfully Created");
        navigate("/home"); 
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error creating user:", error.message);
        toast.error("Error creating user: " + error.message);
      });
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(() => {
        // Redirect to the stored redirect URL upon successful login
        navigate(redirectUrl || "/"); // Navigate to the target URL or the home page
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.message);
      });
  };
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
      <img
          src="Work.jpg"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with </label>
           
          <button
            type="button" 
            className="inlne-block mx-1 h-15 w-12 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]" 
            onClick={signInWithGoogle}> G
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password" onChange={(e)=>setPassword(e.target.value)}
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
         
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit" onClick={createUser}>
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
        <Link to="/Signup"><button className="text-red-600 hover:underline hover:underline-offset-4"> Register</button></Link>
          
        </div>
      </div>
    </section>
  );
};

export default Login;