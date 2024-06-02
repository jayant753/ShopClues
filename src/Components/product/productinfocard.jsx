import Addtocartbutton from "../button/addtocartbutton"
import Wishlistbutton from "../button/wishlistbutton"

const Productinfocard = ({ id, image, name, category, price, description, rating }) => {

  
  return (
    <div className="flex w-[1400px] bg-white gap-2 px-3 pt-3 pb-3 border-[#24A3B5] hover:border-2">
      <div>
        <img className="w-[145px] h-[145px]" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-2 mt-3 ml-3 mr-3">
        <h1 className="text-[#353535] text-[18px] font-bold flex justify-between overflow-x-auto">{name} <span><Wishlistbutton/></span></h1>
        <p className="text-[#757575] text-[14px]">Category: {category}</p>
        <p className="text-[#212121] text-[28px]">{price}</p>
        <p>{description}</p>
        <div className="flex justify-between">
          <div className="text-[#353535] text-[14px] ">Rating: {rating}</div>
          <div className="mr-2"><Addtocartbutton/></div>
        </div>
      </div>
    </div>
  )
}

export default Productinfocard;
