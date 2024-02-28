import  { useState } from "react";
import Header from "../../Header/Header";
import ResourceCard from "./ResourceCard";

const BlogCard = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  const accordionItems = [
    {
      title: "Polish Your Resume and Cover Letter",
      content: "Tailor your resume and cover letter to highlight remote work experience and relevant skills.Emphasize independence, time management, and effective communication.Optimize your resume with keywords tailored to applicant tracking systems (ATS)..",
    },
    {
      title: "Showcase Your Remote Work Skills",
      content: "Highlight proficiency in remote collaboration tools like Zoom, Slack, and Trello.Demonstrate strong time management and problem-solving abilities.Provide examples of successful remote projects.",
    },
    {
      title: "Build a Strong Online Presence",
      content: "Maintain a professional LinkedIn profile showcasing skills and achievements. Develop an online portfolio or personal website with work samples and testimonials.Engage with remote job communities on social media platforms.",
    },
    {
      title: "Leverage Remote Job Boards and Platforms",
      content: "Explore remote job boards such as Remote.co and FlexJobs.Use advanced search filters to find listings matching your skills and preferences.Subscribe to email alerts for timely job notifications..",
    },
    {
      title: "Network and Seek Referrals",
      content: "Tap into your professional network for job opportunities and referrals.Attend virtual networking events and conferences to connect with industry professionals.Seek advice from former colleagues, mentors, and contacts.",
    },
    {
      title: "Prepare for Remote Interviews",
      content: "Familiarize yourself with common remote interview formats.Test audio, video, and internet connections for smooth communication.Practice answering remote-specific interview questions.",
    },
    {
      title: "Demonstrate Remote Work Readiness",
      content: "Highlight your home office setup and reliability.Showcase flexibility and willingness to collaborate across time zones.Emphasize a results-oriented approach to work.",
    },
    {
      title: "Showcase Continuous Learning and Growth",
      content: "Stay updated on industry trends and technologies.Invest in ongoing learning through online courses and certifications.Demonstrate a commitment to personal and professional growth..",
    },
    {
      title: "Follow Up and Stay Persistent",
      content: "Send thank-you notes after interviews to express gratitude. Follow up on application statuses within a reasonable timeframe.Maintain persistence and resilience throughout the job search process..",
    },
    {
      title: "Consider Freelancing and Remote Contract Work",
      content: "Explore freelance platforms like Upwork and Fiverr for project-based opportunities. Build a diverse portfolio to showcase expertise and versatility. Use freelancing as a pathway to long-term remote employment opportunities..",
    },
    
  ];

  return (
    <div>
      <Header />
      <article className="max-w-6xl px-6 py-24 mx-auto space-y-16 dark:bg-gray-800 dark:text-gray-50">
        <div className="w-full mx-auto space-y-4">
          <h1 className="text-5xl font-bold leading">How to Land Remote Jobs: Tips ?</h1>

          <p className="text-md mt-5 dark:text-gray-400">
            In recent years, remote work has gained immense popularity, offering individuals the freedom to work from
            anywhere while maintaining productivity. Landing remote jobs requires a combination of strategy, preparation,
            and perseverance. Here a comprehensive guide to help you secure remote employment:
          </p>

          <div id="accordionExample">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
              >
                <h2 className="mb-0" id={`heading${index}`}>
                  <button 
                    className="group font-bold relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeAccordion === index}
                    aria-controls={`collapse${index}`}
                  >
                    {item.title}
                    <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`h-6 w-6 transform ${activeAccordion === index ? 'rotate-180' : 'rotate-0'}`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`${activeAccordion === index ? 'visible' : 'hidden'}`}
                  aria-labelledby={`heading${index}`}
                >
                  <div className="px-5 py-4 font-serif">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
          <ResourceCard/>
        </div>
       
      </article>
     

    </div>
  );
};

export default BlogCard;
