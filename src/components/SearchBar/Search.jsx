import  { useState } from 'react';

const Search = ({ handleSearch }) => {
    const [filters, setFilters] = useState({
        jobType: "",
        jobRoles: "",
        location: "",
        company: ""
    });

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleSearchClick = () => {
        handleSearch(filters);
    };

    return (
        <div className="flex flex-col gap-4 my-10 justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
                <select name="jobType" className="w-full lg:w-2/3 xl:w-1/4 py-3 pl-4 bg-zinc-200 font-semibold rounded-sm mb-4" onChange={handleFilterChange}>
                    {/* Options for job type */}
                </select>
                <select name="jobRoles" className="w-full lg:w-1/3 xl:w-1/4 py-3 pl-4 bg-zinc-200 font-semibold rounded-sm mb-4" onChange={handleFilterChange}>
                    {/* Options for job roles */}
                </select>
                <select name="location" className="w-full lg:w-1/3 xl:w-1/4 py-3 pl-4 bg-zinc-200 font-semibold rounded-sm mb-4" onChange={handleFilterChange}>
                    {/* Options for location */}
                </select>
                <select name="company" className="w-full lg:w-1/3 xl:w-1/4 py-3 pl-4 bg-zinc-200 font-semibold rounded-sm mb-4" onChange={handleFilterChange}>
                    {/* Options for company */}
                </select>
            </div>
            <button className="w-full lg:w-2/3 xl:w-1/4 bg-blue-500 text-white font-bold py-3 rounded-md" onClick={handleSearchClick}>Search</button>
        </div>
    );
}

export default Search;
