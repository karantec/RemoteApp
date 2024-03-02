import  { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import Spinner from "../Spinner";
import "./Card.css";

const Card = () => {
    const navigate = useNavigate();
    const [datas, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://remotebackend-2.onrender.com/api/v1/getCompany');
                const userData = await response.json();
                setData(userData.data); // Corrected from setDatas to setData
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
    
        fetchData(); // Fetch data initially
    
        const interval = setInterval(() => {
            fetchData(); // Fetch data at regular intervals
        }, 2000); // Fetch every 2 seconds (adjust as needed)
    
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });
    
        return () => {
            clearInterval(interval); // Clean up interval
            unsubscribe(); // Clean up auth state listener
        };
    }, []);
    

    const handleApply = (applyLink) => {
        if (!user) { // Check if user is not authenticated
            localStorage.setItem("applyLink", applyLink);
            navigate("/login"); // Redirect to login page if user is not authenticated
            return; // Exit the function to prevent further execution
        }
   
        if (!applyLink) {
            alert("This job application link is not available.");
            return; // Exit the function if applyLink is not available
        }

        window.location.href = applyLink; // Redirect to the apply link
    }


    const date1 = dayjs(Date.now());
    const datediff = date1.diff('2024-01-01', 'day');
    const indexOfLastData = currentPage * 5;
    const indexOfFirstData = indexOfLastData - 5;
    const filteredData = datas.filter(data =>
        data.CompanyName.toLowerCase().includes(searchQuery.toLowerCase())||
        data.JobType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.Roles.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.Skills.toLowerCase().includes(searchQuery.toLowerCase())||
        data.Experience.toLowerCase().includes(searchQuery.toLowerCase()) 
       
    );
    const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

   

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset pagination when search query changes
    }

    return (
        <div className="mx-4 mb-4 md:mx-40">
         <input
    type="text"
    placeholder="Search by Company Name , Job Type,  Roles, Skills, Experience"
    value={searchQuery}
    onChange={handleSearchChange}
    className="w-full py-3 pl-4 rounded-lg  font-semibold  mb-4 mx-auto  placeholder   "
    style={{ display: 'block',color:'#26AAF4'}}
/>

            {currentData && currentData.length > 0 ? (
                currentData.map((data) => (
                    <div key={data._id} className="my-4"> 
                    <div className="flex flex-col mt-3  text-md md:flex-row justify-between items-center px-4 md:px-6  lg:px-8 xl:px-10 py-4 rounded-lg border border-black  bg-white  card " style={{ backgroundColor: '#EFEADA' }}>
                            <div className="flex flex-col md:items-start gap-3">
                                <h1 className="text-base font-semibold uppercase font-sans" style={{color:'#3399ff '}}>{data.CompanyName}<span className=" ml-6" style={{color:'#000000', fontFamily: 'Georgia, serif'}}>{data.Roles}</span> </h1>
                                <p className="text-sm  lg:text-lg  font-bold" style={{color:'black'}}>Job-Type: {data.JobType}<br/> Experience: {data.Experience} <br/>Expected Salary : {data.ExpectedSalary} </p>
                                <div className="flex items-center gap-2">
                                    <p className="text-black font-bold text-sm " style={{color:'black'}}><span  style={{color:'#26AAF4'}}>Skills:</span> {data.Skills}</p>
                                </div>
                            </div>
                            <div className="flex md:items-center gap-2 mt-4 md:mt-0">
                            <p className="text-gray-500 text-sm md:text-base">Posted {datediff} days ago</p>
                                {user ? (
                                    <button
                                        className={`text-white  bg-blue-700  px-4 md:px-6 py-2 rounded-md`}
                                        onClick={() => handleApply(data.ApplyLink)}
                                    >
                                        Apply 
                                    </button>
                                ) : (
                                    <button
                                        className={`text-white border bg-blue-600 px-4 md:px-6 py-2 rounded-md cursor-not-allowed `}
                                        disabled={!user}
                                    >
                                        Login to Apply
                                    </button>
                                  
                                )}
                                
                                
                            </div>
                            
                        </div>
                        
                    </div>
                ))
            ) : (
                <p><Spinner/></p>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-4">
                {filteredData.length > 5 && (
                    <ul className="flex space-x-2">
                        {Array.from({ length: Math.ceil(filteredData.length / 5) }, (_, index) => (
                            <li key={index} onClick={() => paginate(index + 1)} className="cursor-pointer rounded-lg text-white bg-blue-500 w-8 h- text-center  font-bold hover:text-black">{index + 1}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Card;
