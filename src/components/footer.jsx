import React from "react";
import { FaInfo } from "react-icons/fa";

const footer = ({ data, change }) => {
  function handleSlide() {
    change((prev) => !prev);
  }
  return (
    <>
      <div className="title w-screen sm:px-5 py-5 px-2  flex justify-between items-center hover:bg-blue-950 hover:bg-opacity-90 transition">
        <div>
          <h2 className="text-gray-200 text-3xl mb-1">APOD PROJECT</h2>
          <h1 className="sm:text-5xl text-3xl font-semibold text-white">
            {data.title}
          </h1>
        </div>

        <div
          onClick={handleSlide}
          className="rounded-full text-white bg-gray-700 w-11 h-11 flex items-center justify-center cursor-pointer"
        >
          <FaInfo />
        </div>
      </div>
    </>
  );
};

export default footer;
