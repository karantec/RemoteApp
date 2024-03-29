import { useForm} from '@formspree/react';
const ContactContent = () => { 
    const [state, handleSubmit] = useForm("xkndzwlk");
    if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}
  return (
    <>
    <section className="bg-blue-50 dark:bg-slate-800" id="contact">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              
                <h2
                    className="font-heading mb-4 font-bold  mt-3 tracking-tight mt- text-white  text-3xl sm:text-5xl">
                    Get in Touch
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-xl  text-gray-600 dark:text-slate-400">Contact Us for any query
                </p>
            </div>
        </div>
        <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
                <div className="h-full pr-6">
                    <p className="mt-3 mb-12 text-lg text-white ">
                    Join us on our journey to redefine the future of work. Whether you are a freelancer, a small business owner, or part of a large enterprise, LetsRemote is here to support you every step of the way. ut.
                    </p>
                    <ul className="mb-6 md:mb-0">
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-700 text-gray-50">
                                
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">New Delhi,Delhi</p>
                               
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                              
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">Mobile: +91 9798316854</p>
                                <p className="text-gray-600 dark:text-slate-400">Mail: letsremote@gmail.com</p>
                            </div>
                        </li>
                      
                    </ul>
                </div>
                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label  className="pb-1 text-xs uppercase tracking-wider"></label>
                                    <input type="text" id="name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label  className="pb-1 text-xs uppercase tracking-wider"></label>
                                    <input type="email" id="email"  placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label  className="pb-1 text-xs uppercase tracking-wider"></label>
                                <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"/>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  );
}

export default ContactContent;
