import { useState } from "react";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { HiMiniShoppingCart } from "react-icons/hi2";
import Login from './login'; // Import the Login component
import Register from './register'; // Import the Register component
import { BiSolidOffer } from "react-icons/bi";

const Modal = ({ isVisible, onClose }) => {

  const [showLogin, setShowLogin] = useState(true); // State to toggle between Login and Register

  if(!isVisible) return null;

  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-25 justify-center items-center flex">
      
      <div className="w-[800px] h-[600px] bg-white flex">
        
        <div className="flex flex-col items-center justify-evenly bg-[#fbfbfb] text-[#7f7e7e] w-[235px]">
          <div className="flex flex-col items-center gap-1 ">
            <RiMoneyRupeeCircleFill className="text-[55px] font-bold"/>
            <h6 className="text-[16px] font-bold">Loyalty Points</h6>
            <p className="text-[12px]">Earn CluesBucks on prepaid orders</p>
          </div>
          <div className="flex flex-col items-center gap-1 ">
            <HiMiniShoppingCart className="text-[55px] font-bold"/>
            <h6 className="text-[16px] font-bold">Instant Checkout</h6>
            <p className="text-[12px]">Hassle-Free Payment Everytime</p>
          </div>
          <div className="flex flex-col items-center gap-1 ">
            <BiSolidOffer className="text-[55px] font-bold"/>
            <h6 className="text-[16px] font-bold">Exclusive Offers</h6>
            <p className="text-[12px]">For special offers &amp; value deals</p>
          </div>
        </div>
        
        <div>
        <div className="flex gap-10 w-[565px] h-[50px] justify-between pt-5">
          <div className="flex gap-7 pl-5 ">
            <button className={`text-[19px] h-[19px] w-[61.77px] ${showLogin ? 'text-[#24a3b5] ' : 'text-[#757575]'}`} onClick={() => setShowLogin(true)}>LOGIN</button>
            <button className={`text-[19px] h-[19px] w-[88.19px] ${showLogin ? 'text-[#757575]' : 'text-[#24a3b5]'}`} onClick={() => setShowLogin(false)}>REGISTER</button>
          </div>
          <div className="pr-4 text-[#757575]"><button onClick={onClose}>X</button></div>
        </div>
        <div className="w-[565px] h-[550px] pt-2">
        {showLogin ? <Login /> : <Register />}
        </div>
        </div>

      </div>


    </div>
  )
}

export default Modal;

