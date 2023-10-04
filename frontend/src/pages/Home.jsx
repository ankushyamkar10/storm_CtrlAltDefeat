import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Home = () => {
  const [url, setUrl] = useState("");

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSearch = () => {
    // Add your phishing report lookup logic here
    console.log(`Searching for reports for ${url}`);
  };
  const customStyles = {
    path: {
      stroke: "#000", // Set the color to black (#000)
    },
    text: {
      fill: "#000", // Set the text color to black (#000)
    },
  };

  const selected = "right";

  return (
    <>
      <div className="flex items-center justify-center mt-14 border border-black py-6 ro">
        <input
          className="appearance-none border rounded w-[50%] py-3 px-3 text-[#00232A] leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter text..."
          required
          onChange={handleUrlChange}
        />

        <button
          className="bg-[#03c9d7] text-white font-semibold py-3 px-6 rounded focus:outline-none focus:shadow-outline ml-4"
          onClick={handleSearch}
        >
          Scan
        </button>
      </div>
      <div className="flex flex-col gap-4 items-center justify-evenly my-16 mx-auto border border-gray-400 py-16">
        <div className="mb-4 flex">
          <CircularProgressbar
            value={70}
            text={`${50}%`}
            strokeWidth={8}
            styles={buildStyles({
              strokeLinecap: "round",
              textSize: "20px",
              pathTransitionDuration: 1,
              ...customStyles,
            })}
          />

          <div className="flex">
            <button
              className={`mr-4 ${
                selected === "right" ? "text-green-500" : "text-gray-400"
              }`}
              onClick={() => handleSelect("right")}
            >
              <FaCheckCircle size={32} />
            </button>
            <button
              className={`${
                selected === "wrong" ? "text-red-500" : "text-gray-400"
              }`}
              onClick={() => handleSelect("wrong")}
            >
              <FaTimesCircle size={32} />
            </button>
          </div>
        </div>
        <div>Final Verdiect</div>
      </div>
    </>
  );
};

export default Home;
