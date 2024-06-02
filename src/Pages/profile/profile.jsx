import { useState, useEffect } from "react";
import Navbar from "../../Components/navbar/navbar";
import { FaRegUserCircle } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <>
      <Navbar className="bg-white" />
      <div className="z-100 w-[800px] h-[500px] mt-[100px] ml-[400px] border-2 border-gray-200 bg-white">
        <div className="flex gap-6 ml-5 mt-5 h-[120px] bg-white">
          <div>
            <FaRegUserCircle className="text-[100px] text-[#24A3B5]" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[#353535] text-[18px] font-bold">
              {user?.firstname} {user?.lastname}
            </div>
            <div className="text-[#757575] text-[14px]">
              {user?.email}
            </div>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-2 gap-5 mt-7 ml-7">
          <div>
            <label className="text-[14px] text-[#757575]" htmlFor="firstname">First Name</label>
            <div className="text-[18px] text-[#353535] border-b-2 border-gray-200 w-[350px]">
              {user?.firstname}
            </div>
          </div>
          <div>
            <label className="text-[14px] text-[#757575]" htmlFor="lastname">Last Name</label>
            <div className="text-[18px] text-[#353535] border-b-2 border-gray-200 w-[350px]">
              {user?.lastname}
            </div>
          </div>
          <div>
            <label className="text-[14px] text-[#757575]" htmlFor="number">Mobile Number</label>
            <div className="text-[18px] text-[#353535] border-b-2 border-gray-200 w-[350px]">
              {user?.number}
            </div>
          </div>
          <div>
            <label className="text-[14px] text-[#757575]" htmlFor="uid">User ID</label>
            <div className="text-[18px] text-[#353535] border-b-2 border-gray-200 w-[350px]">
              {user?.email}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

