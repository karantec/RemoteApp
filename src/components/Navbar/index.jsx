import { useState } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={`text-gray-600 body-font ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-white">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="https://letscodejobs.in/wp-content/uploads/2023/10/cropped-cropped-cropped-logo2-1-1.png" alt="Logo" border="0" width="50px" height="50px" className="rounded-full" />
          <span className="ml-3 text-xl text-black font-bold uppercase">LetsCode</span>
        </a>
        <button
          onClick={toggleNavbar}
          className="inline-flex p-3 hover:bg-gray-200 rounded lg:hidden text-gray-900 ml-auto hover:text-gray-900 outline-none nav-toggler"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:ml-auto`}
        >
          <div className="flex flex-col md:flex-row md:mx-4 ">
            <a className="my-1 md:mx-2 text-black font-bold font-serif">Home</a>
            <a className="my-1 md:mx-2 text-black font-bold font-serif ">Referral Jobs</a>
          </div>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
         Dark Mode
          </button>
        </nav>  
      </div>
      <div className="fixed bottom-0 right-0 p-4">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-full"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
