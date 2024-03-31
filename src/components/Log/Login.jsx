import  { useState } from "react";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../../firebase.js";
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
          .then(() => {
              toast.success("User Successfully Logged In");
              const applyJobId = localStorage.getItem('jobID');
              if (applyJobId) {
                const webURL= "http://localhost:5173/job" || "https://letsremotejob.com/job"
                  toast.success("User Successfully Logged In with Google");
                  const URI = applyJobId.replace(webURL,"")
                  navigate(`/job${URI}`); // Redirect to job details page by job ID
              } else {
                  navigate('/'); // Redirect to home page upon successful login
              }
          })
          .catch((error) => {
              console.error("Error signing in:", error.message);
              toast.error("Error signing in: " + error.message);
          });
  };
  
  const handleGoogleSignIn = () => {
      signInWithPopup(auth, googleAuthProvider)
          .then(() => {
              const applyJobId = localStorage.getItem('jobID');
              if (applyJobId) {
                const webURL= "http://localhost:5173/job" ||  "https://letsremotejob.com/job"
                  toast.success("User Successfully Logged In with Google");
                  const URI = applyJobId.replace(webURL,"")
                  navigate(`/job${URI}`); // Redirect to job details page by job ID
              } else {
                  navigate('/'); // Redirect to home page upon successful login
              }
          })
          .catch((error) => {
              console.error("Error signing in with Google:", error.message);
              toast.error("Error signing in with Google: " + error.message);
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
                    <label className="mr-1 text-2xl font-bold">Sign in with </label>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center mx-1 h-20 w-20 rounded-full bg-red-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                        onClick={handleGoogleSignIn}
                    >
                        <FaGoogle className="text-2xl" />
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
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
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
                        type="submit"
                        onClick={handleSignIn}
                    >
                        Login
                    </button>
                </div>
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Don&apos;t have an account?{" "}
                    <Link to="/signup"><button className="text-red-600 hover:underline hover:underline-offset-4"> Register</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Login;
