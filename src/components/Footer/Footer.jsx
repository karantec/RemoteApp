import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div>

<footer className="bg-white dark:bg-gray-900">
  <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-md">
      <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">
      Would you like to stay updated with the latest blockbuster news delivered straight to your inbox?
      </strong>

      <form className="mt-6">
        <div className="relative max-w-lg">
          <label className="sr-only"> Email </label>

          <input
            className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            id="email"
            type="email"
            placeholder="demo@gmail.com"
          />

          <button
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>

    <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
      <div className="mx-auto max-w-sm lg:max-w-none">
        <p className="mt-4 text-center text-black  lg:text-left lg:text-lg dark:text-gray-400">
        As the Lets Code community, our unwavering mission is to empower and support every job seeker and tech enthusiast on their journey towards success. We strive to be a beacon of knowledge, sharing regular updates, opportunities, and resources that will elevate their skills and careers.
        </p>

        <div className="mt-6 flex justify-center gap-4 lg:justify-start">
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="https://www.facebook.com/letscodeforever"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Facebook </span>

           
          </a>

          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="https://www.instagram.com/lets__code/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Instagram </span>

           
          </a>

          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="https://twitter.com/Lets__Code"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Twitter </span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>

          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Whatsapp </span>

            <FaSquareWhatsapp fontSize={20}/>
          </a>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="https://www.youtube.com/channel/UC8yrWVx-ezAW0jh8hlFUFUQ"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Youtube </span>

            <FaYoutube fontSize={20}/>
          </a>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="https://www.linkedin.com/company/lets-code-forever"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> LinkedIn</span>

            <FaLinkedinIn fontSize={20}/>
          </a>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="https://t.me/offcampusjobsupdatess"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Telegram</span>

            <FaTelegramPlane fontSize={20}/>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
        <div>
          <strong className="font-medium text-gray-900 dark:text-white"> Company </strong>

          <ul className="mt-6 space-y-1">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="https://www.lets-code.co.in/service"
              >
                Services
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="https://www.lets-code.co.in/community"
              >
                Community
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="https://www.lets-code.co.in/product"
              >
                Products
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="https://www.lets-code.co.in/about"
              >
               About
              </a>
            </li>
          </ul>
        </div>

        <div>
          <strong className="font-medium text-gray-900 dark:text-white"> Support </strong>

          <ul className="mt-6 space-y-1">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Account
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Help
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Contacts
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Customer Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <strong className="font-medium text-gray-900 dark:text-white"> Legals</strong>

          <ul className="mt-6 space-y-1">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
               Terms & Condition
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Licensing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800">
      <p className="text-center  text-2xl text-black dark:text-gray-400">
        © Company 2024. All rights reserved.

        <br />

        Created with
        <a
          href="https://www.lets-code.co.in/about"
          className="text-green-700   text-2xl font-bold underline transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
          >Lets Code</a
        >
        
      </p>
    </div>
  </div>
</footer>
</div>
  )
}

export default Footer