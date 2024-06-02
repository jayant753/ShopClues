import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
  });

  const addUser = async () => {
    await setDoc(doc(db, "user", formData.email), {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      number: formData.number,
      password: formData.password,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addUser();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col gap-5 pl-5 pt-5">
      <div className="flex gap-[10px]">
        <div>
          <input
            className="px-2 w-[232.5px] h-[40px] border-b-2 border-[#ddd]"
            type="text"
            placeholder="Enter your First Name "
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
