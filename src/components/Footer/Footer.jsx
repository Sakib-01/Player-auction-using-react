import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 pt-52 flex flex-col justify-center items-center  ">
      <div className="mb-10">
        <img className="" src="/public/assets/logo-footer.png" alt="" />
      </div>
      <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-left text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        <div className="flex flex-col items-start text-left">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="list-disc ml-5 text-gray-400">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start text-left">
          <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
          <p className="mb-4 text-gray-400">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-l-md border-none text-black"
            />
            <button className="bg-gradient-to-r from-blue-200 to-yellow-500 text-white px-4 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
