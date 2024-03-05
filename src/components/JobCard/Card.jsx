import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import Spinner from '../Spinner';
import { GiSkills } from 'react-icons/gi';
import './Card.css';

const Card = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // New state for loading

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://remotebackend-2.onrender.com/api/v1/getCompany');
                const userData = await response.json();
                setData(userData.data);
                setLoading(false); // Set loading to false when data is fetched
            } catch (error) {
                console.error('Error fetching user data:', error);
                setLoading(false); // Set loading to false in case of error
            }
        };

        fetchData();

        const interval = setInterval(fetchData, 2000);

        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        return () => {
            clearInterval(interval);
            unsubscribe();
        };
    }, []);

    const handleApply = (applyLink) => {
        if (!user) {
            localStorage.setItem('applyLink', applyLink);
            navigate('/login');
            return;
        }

        if (!applyLink) {
            alert('This job application link is not available.');
            return;
        }

        window.location.href = applyLink;
    };

    const date1 = dayjs(Date.now());
    const datediff = date1.diff('2024-01-01', 'day');

    const itemsPerPage = 8;
    const indexOfLastData = currentPage * itemsPerPage;
    const indexOfFirstData = indexOfLastData - itemsPerPage;
    const filteredData = data.filter(data =>
        data.CompanyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.JobType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.Roles.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.Skills.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.Experience.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="mx-4 mb-4 md:mx-40">
            <input
                type="text"
                placeholder="Search by Company Name, Job Type, Roles, Skills, Experience"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full py-3 pl-4 rounded-lg  font-semibold  mb-4 mx-auto  placeholder"
                style={{ display: 'block', color: '#26AAF4' }}
            />

            {/* Conditionally render the spinner */}
            {loading ? (
                <Spinner />
            ) : (
                // Render data when loading is false
                <div className="flex flex-wrap justify-center">
                    {currentData.map((data, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-2/4 xl:w-1/4 p-4">
                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg  shadow-xl transition duration-300 hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-600  dark:text-white">{data.CompanyName}</h5>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-600 dark:text-white">{data.Roles}</h5>
                                <p className="mb-3   pl-3  bg-gray-300 rounded-lg font-bold text-black  ">{data.Location}</p>
                                <p className="mb-3   pl-3 bg-gray-300 rounded-lg font-bold text-black  ">{data.Skills}</p>
                                <p className="mb-3   pl-3 bg-gray-300 rounded-lg font-bold text-black  "> {data.Experience}</p>
                                <p className="mb-3   pl-3 bg-gray-300 rounded-lg font-bold text-black  "> {data.ExpectedSalary}</p>
                                <button
                                    className={`inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                                    onClick={() => handleApply(data.ApplyLink)}
                                >
                                    Apply here
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination controls */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-600"
                >
                    Previous
                </button>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={indexOfLastData >= filteredData.length}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-600"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Card;
