
const AboutContent = () => {
  return (
    <div>
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">Empowering Remote Work</h1>
                <p className="font-normal text-base leading-6 text-gray-600 ">Welcome to LetsRemote, where distance is no longer a barrier to productivity and connectivity.</p>
                <p className="font-normal text-base leading-6 text-gray-600 ">At LetsRemote, we believe in the power of technology to bridge gaps and bring people closer together, regardless of where they are in the world. Our mission is to empower individuals, teams, and organizations to thrive in remote environments by providing innovative solutions that simplify communication, collaboration, and workflow management.</p>
            </div>
            <div className="w-full lg:w-8/12">
                <img className="w-full h-full" src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/11/17071852/remote_job.png" alt="A group of People" />
            </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Commitment to Excellence</h1>
                <p className="font-normal text-base leading-6 text-gray-600 ">Our commitment to excellence is reflected in every aspect of our app, from its intuitive user
                 interface to its robust security measures. We prioritize user feedback and continuously strive to improve and innovate, 
                 ensuring that LetsRemote remains at the forefront of remote collaboration technology. 
                 Behind LetsRemote  is a dedicated team of professionals passionate about creating positive change in the way we work and connect.
                  From developers to designers, customer support specialists to marketing experts,
                   each member of our team brings unique skills and perspectives to the table, united by a shared vision of empowering 
                   remote workers worldwide. Join us on our journey to redefine the future of work. 
                  </p>
            </div>
            <div className="w-full lg:w-8/12 lg:pt-8">
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Image" />
                        <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Image" />
                        <p className="font-medium text-xl leading-5 text-gray-800  mt-4">Alexa</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Image" />
                        <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Image" />
                        <p className="font-medium text-xl leading-5 text-gray-800  mt-4">Olivia</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
                        <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                        <p className="font-medium text-xl leading-5 text-gray-800  mt-4">Liam</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                        <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                        <p className="font-medium text-xl leading-5 text-gray-800  mt-4">Elijah</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AboutContent