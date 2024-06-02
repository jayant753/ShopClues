import { TbBrandAndroid } from "react-icons/tb"; // Importing Android icon from react-icons
import { PiAppleLogoLight } from "react-icons/pi"; // Importing Apple logo from react-icons
import { LiaWindows } from "react-icons/lia"; // Importing Windows icon from react-icons

const Topnav = () => {
  return (
    <div className="flex w-full h-[20px] gap-2 justify-end items-center text-[11px] text-[#757575] pr-32">
      <div className="hover:underline cursor-pointer">Sell With Us</div>
      <div>|</div>
      <div className="hover:underline cursor-pointer">Contact Us</div>
      <div>|</div>
      <div>Download App:</div>
      <div className="text-[17px] cursor-pointer">
        <TbBrandAndroid />
      </div>
      <div className="text-[17px] cursor-pointer">
        <PiAppleLogoLight />
      </div>
      <div className="text-[17px] cursor-pointer">
        <LiaWindows />
      </div>
    </div>
  );
};

export default Topnav;
