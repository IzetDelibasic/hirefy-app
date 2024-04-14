// -React-
import React, { useState } from "react";
import { useNavigate, Link, Form } from "react-router-dom";
import { toast } from "react-toastify";
// -Components-
import { logoImage } from "../../constants/ImagesConstant";
import { FormRow } from "..";
// -Utils-
import customFetch from "../../utils/customFetch";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    setFormValid(
      firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        location.trim() !== "" &&
        email.trim() !== "" &&
        password.trim() !== ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValid) return;
    try {
      const userData = {
        name: firstName,
        lastName: lastName,
        location: location,
        email: email,
        password: password,
      };
      await customFetch.post("/auth/register", userData).then(() => {
        toast.success("Registration successful");
        navigate("/login");
      });
    } catch (err) {
      toast.error(err?.response?.data?.msg);
      return err;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 min-h-screen">
      <div className="flex items-center justify-center md:justify-start cursor-default mx-auto pb-4 pt-0">
        <img src={logoImage} alt="Logo" className="w-[48px] h-[48px]" />
        <div className="text-3xl font-montserrat pl-[0.5rem] text-blue-500">
          Hirefy
        </div>
      </div>
      <div className="bg-white bg-opacity-80 xl:w-[25%] p-8 rounded-[10px] rounded-bl-none flex flex-col items-center">
        <h1 className="text-2xl font-bold text-bluePurple uppercase mb-4 text-center">
          Register
        </h1>
        <Form
          method="post"
          className="flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <FormRow
            type="text"
            name="firstName"
            labelText="First Name"
            onChange={handleInputChange}
          />
          <FormRow
            type="text"
            name="lastName"
            labelText="Last Name"
            onChange={handleInputChange}
          />
          <FormRow
            type="text"
            name="location"
            labelText="Location"
            onChange={handleInputChange}
          />
          <FormRow
            type="email"
            name="email"
            labelText="Email"
            onChange={handleInputChange}
          />
          <FormRow
            type="password"
            name="password"
            labelText="Password"
            onChange={handleInputChange}
          />
          <button
            className={`relative bg-blue-500 text-white font-medium py-[1rem] px-[3.5rem] md:px-[4rem] lg:px-[5rem] mr-0 mb-[20px] md:mb-0 rounded-[3rem] group overflow-hidden z-[1] ${
              !formValid && "opacity-50 cursor-not-allowed"
            }`}
            type="submit"
            disabled={!formValid}
          >
            <div className="">Register</div>
            <div className="absolute inset-0 bg-black w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
          </button>
        </Form>
        <div className="pt-4 font-montserrat">
          Already a member?
          <Link to="/login" className="ml-1 font-medium text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
