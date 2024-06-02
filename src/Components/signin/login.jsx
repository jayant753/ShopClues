import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"; // Firestore imports
import { db } from "../../utils/firebase"; // Firebase database instance
import { toast } from "react-toastify"; // Toast notifications library

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // React Router hook for navigation

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await checkUserCredentials(); // Call function to check user credentials
  };

  // Function to handle input change in the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to check user credentials against Firestore
  const checkUserCredentials = async () => {
    const userDocRef = doc(db, "user", formData.email); // Firestore document reference
    const userDoc = await getDoc(userDocRef); // Get document snapshot

    // If user document does not exist in Firestore
    if (!userDoc.exists()) {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    const userData = userDoc.data(); // Retrieve user data from Firestore document

    // If password matches with the entered password
    if (userData.password === formData.password) {
      toast.success("User logged in successfully", {
        position: "top-right",
        autoClose: 5000,
      });

      // Store user data in local storage
      localStorage.setItem(
        "user",
        JSON.stringify({ ...userData, id: userDoc.id })
      );

      console.log("Login Success");
      navigate("/"); // Navigate to the home page using React Router
      window.location.reload(); // Reload the page to apply changes
    } else {
      // If password does not match
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  // Render the login form
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
