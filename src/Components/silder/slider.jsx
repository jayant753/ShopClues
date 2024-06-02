import { useState, useEffect } from "react";
import { sliderData } from "../../utils/constant"; // Assuming sliderData is imported from a constants file

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide index

  useEffect(() => {
    // Effect to handle automatic sliding
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length); // Increment currentSlide circularly
    }, 2500); // Interval for automatic slide change (e.g., every 2.5 seconds)

    return () => clearInterval(interval); // Cleanup function to clear the interval on component unmount
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Function to handle button click to change slide
  const handleButtonClick = (index) => {
    setCurrentSlide(index); // Set current slide to the clicked button's index
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Container for the slider */}
      <div className="w-[1340px] h-[345px] overflow-hidden">
        {/* Link to the current slide's URL */}
        <a
          href={sliderData[currentSlide].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Image for the current slide */}
          <img
            src={sliderData[currentSlide].image}
            alt={sliderData[currentSlide].name}
            className="w-full h-full object-cover"
          />
        </a>
      </div>
      {/* Navigation buttons */}
      <div className="flex mt-1 w-[1340px] h-[64px] justify-between">
        {sliderData.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)} // Click handler to change slide
            className={`flex-1 py-2 text-center rounded ${
              currentSlide === index
                ? "text-[#2aa6b7] border-b-2 border-[#2aa6b7]"
                : "text-[#555]"
            }`}
          >
            {slide.name} {/* Display slide name as button content */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
