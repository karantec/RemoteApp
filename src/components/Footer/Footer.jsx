
import footerData from './data.json';

function Footer() {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      {/* Social network icons container */}
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          {footerData.socialNetworks.map((network, index) => (
            <a key={index} href={network.url} className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                {/* Render appropriate social network icons based on the data */}
              </svg>
            </a>
          ))}
        </div>
      </div>

  
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Products</h6>
            {footerData.products.map((product, index) => (
              <p key={index} className="mb-4">
                <a href={product.url} className="text-neutral-600 dark:text-neutral-200">{product.name}</a>
              </p>
            ))}
          </div>

          
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Useful links</h6>
            {footerData.usefulLinks.map((link, index) => (
              <p key={index} className="mb-4">
                <a href={link.url} className="text-neutral-600 dark:text-neutral-200">{link.name}</a>
              </p>
            ))}
          </div>

          
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
                {/* Add address icon here */}
              </svg>
              {footerData.contact.address}
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
                {/* Add email icon here */}
              </svg>
              {footerData.contact.email}
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
                {/* Add phone icon here */}
              </svg>
              {footerData.contact.phone}
            </p>
          </div>
        </div>
      </div>

     
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <a href="https://tw-elements.com/" className="font-semibold text-neutral-600 dark:text-neutral-400">TW elements</a>
      </div>
    </footer>
  );
}

export default Footer;
