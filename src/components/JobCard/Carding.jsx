import  { useState } from 'react';

const Carding = () => {
  // Define the number of items per page
  const itemsPerPage = 20;

  // Define state variables for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last item of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the array of items to get the items for the current page
  const itemsToShow = [...Array(24)].slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination button clicks
  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {itemsToShow.map((_, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Company Name</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Role</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Salary</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Apply here
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-600"
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={indexOfLastItem >= 16}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carding;
