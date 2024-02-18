import  { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import Spinner from "../Spinner";


const Card = () => {
    const navigate = useNavigate();
    const [datas, setDatas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    
    useEffect(() => {
        // Simulating fetching user data from a placeholder database (JSON file)
        const fetchData = async () => {
          try {
            // Fetch data from a local JSON file (replace with your API endpoint)
            const response = await fetch('http://localhost:8000/api/v1/getCompany');
            const userData = await response.json();
            console.log(userData);
            setDatas(userData.data);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchData();
      }, []);
    

    const date1 = dayjs(Date.now());
    const datediff = date1.diff('2024-01-01', 'day');
    const indexOfLastData = currentPage * 5;
    const indexOfFirstData = indexOfLastData - 5;
    const filteredData = datas.filter(data =>
        data.CompanyName.toLowerCase().includes(searchQuery.toLowerCase())||
        data.JobType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.Location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.Roles.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.Skills.toLowerCase().includes(searchQuery.toLowerCase())||
        data.Experience.toLowerCase().includes(searchQuery.toLowerCase()) 
       
    );
    const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleApply = (applyLink) => {
        console.log("Apply button clicked");
        if (auth.currentUser) {
            if (applyLink) {
                window.location.href = applyLink;
            } else {
                alert("Please Login to Apply for the Job");
            }
        } else {
            console.log("No user logged in, redirecting to login page");
            localStorage.setItem("applyLink", applyLink);
            navigate("/Signup"); // Redirect to login page
        }
    }

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset pagination when search query changes
    }

    return (
        <div className="mx-4 mb-4 md:mx-40">
         <input
    type="text"
    placeholder="Search by Company Name , Job Type, Location, Roles, Skills, Experience"
    value={searchQuery}
    onChange={handleSearchChange}
    className="w-full py-3 pl-4 rounded-lg bg-white font-semibold  mb-4 mx-auto"
    style={{ display: 'block' }}
/>

            {currentData && currentData.length > 0 ? (
                currentData.map((data) => (
                    <div key={data._id} className="my-4"> {/* Add margin-y (my) for vertical spacing */}
                        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 lg:px-8 xl:px-10 py-4 bg-white rounded-md border border-black  shadow-2xl hover:border-blue-500 hover:translate-y-1 hover:scale-103">
                            <div className="flex flex-col md:items-start gap-3">
                                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold uppercase text-blue-500 font-serif">{data.CompanyName}</h1>
                                <p className="text-sm md:text-base lg:text-lg text-green-500 font-serif font-bold">{data.JobType} &#x2022; {data.Experience} &#x2022; {data.Location}</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-blue-500 font-bold uppercase">Roles: {data.Roles}</p>
                                    <p className="text-blue-500 font-bold uppercase">Skills: {data.Skills}</p>
                                </div>
                            </div>
                            <div className="flex md:items-center gap-2 mt-4 md:mt-0">
                                <p className="text-gray-500 text-sm md:text-base">Posted {datediff} days ago</p>
                                
                                <button
                                    className="text-blue-500 border border-blue-500 px-4 md:px-6 py-2 rounded-md"
                                    onClick={() => handleApply(data.ApplyLink)}
                                >
                                    Apply 
                                </button> 
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
                            <li key={index} onClick={() => paginate(index + 1)} className="cursor-pointer text-white bg-blue-500 w-5 text-center  font-bold hover:text-black">{index + 1}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Card;
