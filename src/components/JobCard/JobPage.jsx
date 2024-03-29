import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { auth } from '../../../firebase';

const JobPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [jobDetails, setJobDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [applyLink, setApplyLink] = useState(null); // State to store the apply link

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await fetch(`https://remotebackend-2.onrender.com/api/v1/getCompanyById/${id}`);
                const data = await response.json();
                setJobDetails(data.data);
                setLoading(false);
                // Set the apply link from the fetched job details
                setApplyLink(data.data.ApplyLink);
            } catch (error) {
                console.error('Error fetching job details:', error);
                setLoading(false);
            }
        };

        fetchJobDetails();

        const interval = setInterval(fetchJobDetails, 2000);

        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        return () => {
            clearInterval(interval);
            unsubscribe();
        };
    }, [id]);

   
      const handleApply = () => {
        console.log('Clicked Apply Button');
        console.log('Apply Link:', applyLink);
        console.log('User:', user);
    
        if (!user) {
            localStorage.setItem('applyLink', applyLink);
            navigate(`/signup`);
            return;
        }
    
        if (!applyLink) {
            alert('This job application link is not available.');
            return;
        }
    
        window.open(applyLink, '_blank'); // Open the apply link in a new tab
    };
    
  
  

    const toggleShowDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const getDescriptionPreview = () => {
        if (!jobDetails || !jobDetails.description) return '';
        return showFullDescription
            ? jobDetails.description
            : `${jobDetails.description.split(' ').slice(0, 30).join(' ')}...`;
    };

    // Redirect user back to this page after login/signup
    useEffect(() => {
      const loggedInUser = localStorage.getItem('user');
      const appliedJobId = localStorage.getItem('applyJobId');
      if (loggedInUser && appliedJobId === id) {
          navigate(`/job/${appliedJobId}`); // Use appliedJobId instead of id to navigate
          localStorage.removeItem('applyJobId'); // Clear the stored job ID after navigation
      }
  }, [id, navigate]);

    return (
        <>
            <Navbar />
            <div className="h-screen bg-white flex flex-col justify-center items-center">
                <div className="w-full md:w-[80%] flex flex-col justify-center items-center mb-6">
                    <div className="w-full md:w-[80%] p-6 border bg-gradient-to-r from-purple-500 via-green-400 to-blue-300 border-gray-200 rounded-lg shadow-xl transition duration-300 hover:scale-105 dark:border-gray-700 mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <h5 className="text-2xl font-bold tracking-tight text-white">{jobDetails?.CompanyName}</h5>
                            <button
                                className={`inline-flex justify-end items-center px-3 py-2 text-sm font-medium text-center ${applyLink ? 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' : 'text-gray-400 bg-gray-200 cursor-not-allowed'}`}
                                onClick={handleApply}
                                // Disable the button if apply link is not available
                            >
                                Apply
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </div>
                        <h5 className="mb-2 text-1xl font-bold text-white tracking-tight">Role: {jobDetails?.Roles}</h5>
                        <div className="flex justify-between">
                            <p className="mb-3 pl-3 text-white rounded-lg font-bold">
                                <span className='text-white'>Experience:</span> {jobDetails?.Experience}
                            </p>
                            <p className="mb-3 pl-3 rounded-lg font-bold text-black">
                                <span className='text-white'>ExpectedSalary:</span> {jobDetails?.ExpectedSalary}
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-[80%] p-6 border border-gray-200 rounded-lg shadow-xl transition duration-300 hover:scale-105 dark:border-gray-700 mb-6">
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-black">Description</h5>
                                <p className="mb-3 pl-3 text-black rounded-lg font-bold">{getDescriptionPreview()}</p>
                                <button className="text-blue-600 mt-2 focus:outline-none" onClick={toggleShowDescription}>
                                    {showFullDescription ? 'Read Less' : 'Read More'}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <Footer />
            </div>
        </>
    );
};

export default JobPage;
