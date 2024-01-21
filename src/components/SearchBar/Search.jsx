const Search = () => {
    return (
      <div className="flex flex-col gap-4 my-10 justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
          <select className="w-full lg:w-2/3 xl:w-1/4 py-3 pl-4 bg-zinc-200 font-semibold rounded-sm mb-4">
            <option value="" disabled hidden selected>Job Type</option>
            <option value="">Full Time</option>
            <option value="">Internship</option>
          </select>
          <select className="w-full lg:w-1/3 xl:w-1/4 py-3 pl-4 bg-zinc-200 font-semibold rounded-sm mb-4">
            <option value="" disabled hidden selected>Job Roles</option>
            <option value="">Software Engineer</option>
            <option value="">UX/UI</option>
            <option value="">Full Stack</option>
            <option value="">Data Science</option>
            <option value="">Data Analyst</option>
            <option value="">QA/Testing</option>
            <option value="">IOS Developer</option>
            <option value="">Cloud</option>
            <option value="">Data Engineer</option>
          </select>
          <select className="w-full lg:w-1/3 xl:w-1/4 py-3 pl-4 bg-zinc-200 font-semibold rounded-sm mb-4">
            <option value="" disabled hidden selected>Location</option>
            <option value="">Remote</option>
            <option value="">Remote in USA</option>
            <option value="">Remote in India</option>
            <option value="">Remote in UK</option>
            <option value="">IOS Developer</option>
            <option value="">Volvo</option>
            <option value="">IOS Developer</option>
          </select>
          <select className="w-full lg:w-1/3 xl:w-1/4 py-3 pl-4 bg-zinc-200 font-semibold rounded-sm mb-4">
            <option value="" disabled hidden selected>Company</option>
            <option value="">IOS Developer</option>
            <option value="">Volvo</option>
            <option value="">IOS Developer</option>
            <option value="">Volvo</option>
            <option value="">IOS Developer</option>
            <option value="">Volvo</option>
            <option value="">IOS Developer</option>
          </select>
        </div>
        <button className="w-full lg:w-2/3 xl:w-1/4 bg-blue-500 text-white font-bold py-3 rounded-md">Search</button>
      </div>
    );
  }
  
  export default Search;
  