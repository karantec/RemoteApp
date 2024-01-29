import dayjs from "dayjs";
import { useEffect, useState } from "react";
import axios from "axios";
const Card = () => {

    const [datas,setdatas]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
 

    useEffect(()=>{
        axios.get('api/v1/getCompany')
        
        .then((res)=>{
            console.log(res.data);
            setdatas(res.data.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    })

    
    // const skills = ["React", "Javascript", "HTML", "CSS"];
    const date1 = dayjs(Date.now());
    const datediff = date1.diff('2024-01-01', 'day');
    const indexOfLastData = currentPage * 5;
    const indexOfFirstData = indexOfLastData - 5;
    const currentData = datas.slice(indexOfFirstData, indexOfLastData);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className="mx-4 mb-4 md:mx-40">
        
        {currentData && currentData.length > 0 ? (
            currentData.map((data) => (
                <div key={data._id} className="my-4"> {/* Add margin-y (my) for vertical spacing */}
                    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 lg:px-8 xl:px-10 py-4 bg-white rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103">
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
                          <a href={data.ApplyLink}>  <button className="text-blue-500 border border-blue-500 px-4 md:px-6 py-2 rounded-md">Apply</button></a>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <p>Loading...</p>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-4">
                {datas.length > 5 && (
                    <ul className="flex space-x-2">
                        {Array.from({ length: Math.ceil(datas.length / 5) }, (_, index) => (
                            <li key={index} onClick={() => paginate(index + 1)} className="cursor-pointer text-white bg-blue-500 w-5 text-center  font-bold hover:text-black">{index + 1}</li>
                        ))}
                    </ul>
                )}
            </div>
            
            
        </div>
    );
}
export default Card;
