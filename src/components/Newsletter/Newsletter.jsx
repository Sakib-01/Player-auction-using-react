import React from "react";

const Newsletter = () => {
  return (
    <div className=" w-full lg:w-8/12 mx-auto p-10  bg-gradient-to-r from-blue-100 via-white to-orange-200 text-center   absolute -top-40 lg:-top-24 lg:left-52 rounded-2xl space-y-8 border-2">
      <h2 className="text-2xl font-bold text-center text-gray-900">
        Subscribe to our Newsletter
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Get the latest updates and news right in your inbox!
      </p>
      <div className="flex justify-center items-center mt-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-2/3"
        />
        <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-r-lg font-bold hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-pink-400">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
