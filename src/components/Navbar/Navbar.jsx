import  { useState,useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom"

import {  signOut , onAuthStateChanged  } from "firebase/auth";
import {auth} from "../../../firebase.js";
const Navbar = () => {
  
  // State to manage the visibility of the menu on small screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const  navigate=useNavigate();
  
  useEffect(() => {
    // Check if user is already logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);


  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
        console.log('Signed out successfully');
      })
      .catch((error) => {
        console.log('Error signing out', error);
      });
  };

  return (
    <div>
      <nav className="bg-white dark:bg-white fixed w-full z-20 top-0 mb-10 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="letsremote.png" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="letsremote.png" className="h-10" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">Lets Remote</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isLoggedIn ? (
              <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/Login">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Login
                </button>
              </Link>
            )}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? 'true' : 'false'}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
               <Link to="/" className="block py-2 px-3 text-black-500  rounded md:bg-transparent  md:p-0 " >Home</Link>
              </li>
              <li>
              <Link to ="/About" className="block py-2 px-3 text-black  rounded md:bg-transparent  md:p-0  ">About</Link>
              </li>
              <li>
                <Link to="/services" className="block py-2 px-3 text-black  rounded md:bg-transparent  md:p-0 ">Services</Link>
              </li>
              <li>
              <Link to="/contact" className="block py-2 px-3 text-black  rounded md:bg-transparent  md:p-0 ">Contact</Link>
              </li>
              <li>
                <Link to="/Resource" className="block py-2 px-3 text-black rounded md:bg-transparent  md:p-0  ">Resource</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
