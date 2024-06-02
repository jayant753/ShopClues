import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await checkUserCredentials();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkUserCredentials = async () => {
    const userDocRef = doc(db, "user", formData.email);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    const userData = userDoc.data();

    if (userData.password === formData.password) {
      toast.success("User logged in successfully", {
        position: "top-right",
        autoClose: 5000,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({ ...userData, id: userDoc.id })
      );
      console.log("Loging Success");
      navigate("/");
      window.location.reload();
    } else {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="flex flex-col gap-5 pl-5 pt-5">
      <input
        className="w-[475px] h-[40px] px-2 border-b-2 border-[#ddd]"
        type="email"
        placeholder="Enter your email id"
        value={formData.email}
        onChange={handleInputChange}
        name="email"
        required
      />
      <input
        className="w-[475px] h-[40px] px-2 border-b-2 border-[#ddd]"
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleInputChange}
        name="password"
        required
      />
      <button
        className="w-[475px] h-[40px] px-2 text-[#fb760b] bg-white border-2 border-[#fb760b] flex items-center justify-center"
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
