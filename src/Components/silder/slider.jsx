import { useState, useEffect } from 'react';
import { sliderData } from '../../utils/constant';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[1340px] h-[345px] overflow-hidden">
        <a href={sliderData[currentSlide].link} target='_blank'>
        <img
          src={sliderData[currentSlide].image}
          alt={sliderData[currentSlide].name}
          className="w-full h-full object-cover"
        />
        </a>
      </div>
      <div className="flex mt-1 w-[1340px] h-[64px] justify-between">
        {sliderData.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`flex-1 py-2 text-center rounded ${
              currentSlide === index ? 'text-[#2aa6b7] border-b-2 border-[#2aa6b7]' : 'text-[#555]'
            }`}
          >
            {slide.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
