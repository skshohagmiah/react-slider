/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Dots from "./Dots";

const Slider = () => {
  const data = [
    "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1590086782957-93c06ef21604?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1672857822411-ad82b8180078?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  ];

  const [index, setIndex] = useState(0);


  function handlePrevious(){
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    console.log(index)
  }


  function handleNext(){
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    console.log(index)
  }

  function handleDot(idx){
    setIndex(idx)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 1000);

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  
  return (
    <div className="container">
      <div className="slider">
        <div className="images">
          <svg onClick={handlePrevious}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>

          <img src={data[index]} alt="" />

          <svg onClick={handleNext}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <Dots data={data} handleDot={handleDot} index={index} />
      </div>
    </div>
  );
};

export default Slider;
