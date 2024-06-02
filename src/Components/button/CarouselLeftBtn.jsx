import { FaAngleLeft } from "react-icons/fa6";


function CarouselLeftBtn({ toggleSelectLeft }) {
    return (
        <button onClick={toggleSelectLeft} className='absolute z-10 sm:top-1/3 top-1/4 left-0 md:text-3xl sm:text-2xl text-xl border rounded sm:px-2 px-1 sm:py-4 py-2 duration-200'>
            <FaAngleLeft className='relative z-20 text-[white]' />
            <div className="absolute top-0 left-0 z-10 w-full h-full bg-[#24a3b5] hover:bg-black rounded"></div>
        </button>
    )
}

export default CarouselLeftBtn