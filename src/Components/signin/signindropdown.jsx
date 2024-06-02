import { BsChatLeftText } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { LiaHeadsetSolid } from "react-icons/lia";
import { PiPencilSimpleLight } from "react-icons/pi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { PiUserListThin } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Signindropdown = ({ handleMouseLeave, setShowModal }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/")
    window.location.reload();
  };

  return (
    <>
      <div
        className="w-[238px] h-[450px] bg-white"
        onMouseLeave={handleMouseLeave}
      >
        <div
          onClick={
            user
              ? " "
              : () => {
                  setShowModal(true);
                }
          }
        >
          <div className="w-[238px] h-[60px] flex items-center gap-3 bg-[#24a3b5] text-[18px] text-white cursor-pointer">
            <span className="px-2 text-[28px]">
              <FaRegUserCircle />
            </span>
            {user ? <div>{user.firstname}</div> : <div>Login/Register</div>}
            <span className="place-items-end">
              <MdKeyboardArrowRight />
            </span>
          </div>
        </div>
        <div>
          <div className="px-2 w-[238px] h-[39px] flex gap-3 items-center text-[#555] py-2 text-[14px] cursor-pointer hover:bg-slate-100">
            <span className="text-[18px]">
              <CgNotes />
            </span>
            My Orders
          </div>
          <div className="px-2 w-[238px] h-[39px] flex gap-3 items-center text-[#555] py-2 text-[14px] cursor-pointer hover:bg-slate-100">
            <span className="text-[18px]">
              <BsChatLeftText />
            </span>
            My Returns
          </div>
          <div className="px-2 w-[238px] h-[39px] flex gap-3 items-center text-[#555] py-2 text-[14px] cursor-pointer hover:bg-slate-100">
            <span className="text-[18px]">
              <IoIosHeartEmpty />
            </span>
            Wishlist
          </div>
          <div className="px-2 w-[238px] h-[39px] flex gap-3 items-center text-[#555] py-2 text-[14px] cursor-pointer hover:bg-slate-100">
            <span className="text-[18px]">
              <PiUserListThin />
            </span>
            {user ? (
              <Link to="/Profile">
                <div>My Profile</div>
              </Link>
            ) : (
              <div>My Profile</div>
            )}
          </div>
          <div className="px-2 w-[238px] h-[39px] flex gap-3 items-center text-[#555] py-2 text-[14px] cursor-pointer hover:bg-slate-100">
            <span className="text-[18px]">
              <BsChatLeftText />
            </span>
            My Chat
          </div>
          <div className="px-2 w-[238px] h-[39px] flex gap-3 items-center text-[#555] py-2 text-[14px] cursor-pointer hover:bg-slate-100">
            <span className="text-[18px]">
              <RiMoneyRupeeCircleLine />
            </span>
            My ClueBucks
          </div>
          <div className="px-2 w-[238px] h-[39px] flex gap-3 items-center text-[#555] py-2 text-[14px] cursor-pointer hover:bg-slate-100">
            <span className="text-[18px]">
              <RiMoneyRupeeCircleLine />
            </span>
            My ClueBucks+
          </div>
          <div className="px-2 w-[238px] h-[39px] flex gap-3 items-center text-[#555] py-2 text-[14px] cursor-pointer hover:bg-slate-100">
            <span className="text-[18px]">
              <PiPencilSimpleLight />
            </span>
            My Feedback
          </div>
          <div className="px-2 w-[238px] h-[39px] flex gap-3 items-center text-[#555] py-2 text-[14px] cursor-pointer hover:bg-slate-100">
            <span className="text-[18px]">
              <LiaHeadsetSolid />
            </span>
            Help & Support
          </div>
          <div className="px-2 w-[238px] h-[39px] flex gap-3 items-center text-[#555] py-2 text-[14px] cursor-pointer hover:bg-slate-100">
            <span className="text-[18px]">
              <RiMoneyRupeeCircleLine />
            </span>
            My Favorire Stores
          </div>
          <div>
            {user ? (
              <div
                className="px-2 w-[238px] h-[39px] flex gap-3 items-center bg-white text-[#555] py-2 text-[14px] cursor-pointer hover:bg-slate-100"
                onClick={handleLogout}
              >
                <span className="text-[18px]">
                  <VscSignOut />
                </span>
                Sign Out
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signindropdown;
