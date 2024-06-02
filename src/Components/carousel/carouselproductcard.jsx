import { useEffect, useState } from "react";
import axios from "axios";
import CarouselLeftBtn from "../button/CarouselLeftBtn";
import CarouselRightBtn from "../button/CarouselRightBtn";

// CarouselProductCard component fetches and displays a carousel of product cards
const CarouselProductCard = ({ apiUrl, cardCount }) => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [startIndex, setStartIndex] = useState(0); // State to track the starting index of the visible products

  // useEffect to fetch product data when component mounts or apiUrl/cardCount changes
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data.slice(0, cardCount)); // Limit the products to the desired number of cards
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // Log any error during data fetch
      });
  }, [apiUrl, cardCount]);

  // Function to handle the next slide
  const nextSlide = () => {
    if (startIndex + 6 < products.length) {
      setStartIndex(startIndex + 1); // Increment startIndex if there are more products to show
    }
  };

  // Function to handle the previous slide
  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1); // Decrement startIndex if we are not at the beginning
    }
  };

  return (
    <>
      <div className="relative w-[1670px] h-[295px]">
        <div className="flex overflow-x-auto">
          {products.slice(startIndex, startIndex + 6).map((product, index) => (
            <div
              key={product.id}
              className={`pt-7 flex flex-col items-center w-[267px] h-[295px] border-[#24a3b5] hover:border-2 ${
                index === 0 ? "ml-0" : "ml-4"
              }`}
            >
              <img
                className="w-[145px] h-[145px]"
                src={product.image}
                alt={product.title}
              />
              <h4 className="pl-3 mt-2 text-[#919191] text-[14px]">
                {product.title}
              </h4>
              <p className="mt-2 pl-2 pr-[210px] text-[#212121] text-[16px] flex gap-1">
                <span>₹</span>
                {product.price}
              </p>
              {index === 0 && startIndex > 0 && (
                <CarouselLeftBtn toggleSelectLeft={prevSlide} />
              )}
              {index === 5 && startIndex + 6 < products.length && (
                <CarouselRightBtn toggleSelectRight={nextSlide} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselProductCard;
