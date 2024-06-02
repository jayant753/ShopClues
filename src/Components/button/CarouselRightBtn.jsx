import { FaAngleRight } from "react-icons/fa6"; // Importing the right arrow icon from react-icons

function CarouselRightBtn({ toggleSelectRight }) {
  return (
    // Button element that triggers the toggleSelectRight function when clicked
    <button
      onClick={toggleSelectRight}
      className="absolute z-10 sm:top-1/3 top-1/4 right-0 md:text-3xl sm:text-2xl text-xl border rounded sm:px-2 px-1 sm:py-4 py-2 duration-200"
    >
      {/* Icon inside the button, styled with Tailwind CSS classes */}
      <FaAngleRight className="relative z-20 text-[white]" />

      {/* Overlay div for background color effect on hover */}
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-[#24a3b5] hover:bg-black "></div>
    </button>
  );
}

export default CarouselRightBtn; // Exporting the CarouselRightBtn component
