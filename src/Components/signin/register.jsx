import { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; // Importing Firestore functions
import { db } from "../../utils/firebase"; // Importing Firestore database instance

const Register = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
  });

  // Function to add user data to Firestore
  const addUser = async () => {
    await setDoc(doc(db, "user", formData.email), {
      // Creating or updating document in 'user' collection with email as document ID
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      number: formData.number,
      password: formData.password,
    });
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    console.log(formData); // Logging form data (for testing)
    addUser(); // Calling function to add user data to Firestore
  };

  // Handling input change in form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }); // Updating form data state with new input value
  };

  // JSX for rendering the registration form
  return (
    <div className="flex flex-col gap-5 pl-5 pt-5">
      {/* First and Last Name input fields */}
      <div className="flex gap-[10px]">
        <div>
          <input
            className="px-2 w-[232.5px] h-[40px] border-b-2 border-[#ddd]"
            type="text"
            placeholder="Enter your First Name"
            value={formData.firstname}
            onChange={handleInputChange}
            name="firstname"
            required
          />
        </div>
        <div>
          <input
            className="px-2 w-[232.5px] h-[40px] border-b-2 border-[#ddd]"
            type="text"
            placeholder="Enter your Last Name"
            value={formData.lastname}
            onChange={handleInputChange}
            name="lastname"
            required
          />
        </div>
      </div>

      {/* Email, Phone Number, and Password input fields */}
      <input
        className="w-[475px] h-[40px] px-2 border-b-2 border-[#ddd]"
        type="text"
        placeholder="Enter your email id"
        value={formData.email}
        onChange={handleInputChange}
        name="email"
        required
      />
      <input
        className="w-[475px] h-[40px] px-2 border-b-2 border-[#ddd]"
        type="tel"
        placeholder="Enter your phone number"
        maxLength="10"
        value={formData.number}
        onChange={handleInputChange}
        name="number"
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

      {/* Register button */}
      <button
        className="w-[228px] h-[40px] px-2 text-white bg-[#fb760b] flex items-center justify-center"
        onClick={handleSubmit}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
