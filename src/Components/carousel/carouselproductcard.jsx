import { useEffect, useState } from 'react';
import axios from 'axios';
import CarouselLeftBtn from '../button/CarouselLeftBtn';
import CarouselRightBtn from '../button/CarouselRightBtn';

const CarouselProductCard = ({ apiUrl, cardCount }) => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setProducts(response.data.slice(0, cardCount)); // Limit to the desired number of cards
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [apiUrl, cardCount]);

  const nextSlide = () => {
    if (startIndex + 6 < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <>
      <div className="relative w-[1670px] h-[295px]">
        <div className="flex overflow-x-auto">
          {products.slice(startIndex, startIndex + 6).map((product, index) => (
            <div key={product.id}  className={`pt-7 flex flex-col items-center w-[267px] h-[295px] border-[#24a3b5] hover:border-2 ${index === 0 ? 'ml-0' : 'ml-4'}`}>
              <img className="w-[145px] h-[145px]" src={product.image} alt={product.title}/>
              <h4 className="pl-3 mt-2 text-[#919191] text-[14px]">{product.title}</h4>
              <p className="mt-2 pl-2 pr-[210px] text-[#212121] text-[16px] flex gap-1"><span>₹</span>{product.price}</p>
              {index === 0 && startIndex > 0 && <CarouselLeftBtn toggleSelectLeft={prevSlide} />}
              {index === 5 && startIndex + 6 < products.length && <CarouselRightBtn toggleSelectRight={nextSlide} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CarouselProductCard;