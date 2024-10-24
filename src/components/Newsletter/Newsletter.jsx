import React from "react";

const Newsletter = () => {
  return (
    <div>
      <div
        className=" w-full lg:w-8/12 mx-auto p-10  bg-gray-300 text-center   absolute -bottom-40 lg:-bottom-24 lg:left-52 rounded-2xl space-y-8 border-2"
        style={{ backgroundImage: `url('/public/assets/bg-shadow.png')` }}
      >
        <h3 className="text-2xl mb-4 text-white">
          Subscribe to our Newsletter
        </h3>
        <p>Get the latest updates and news right in your inbox!</p>
        <input
          type="email"
          className="border p-2 w-1/3"
          placeholder="Enter your email"
        />
        <button className="ml-2 bg-yellow-500 px-4 py-2 rounded text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
