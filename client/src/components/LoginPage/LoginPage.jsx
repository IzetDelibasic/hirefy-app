// -React-
import React, { useState } from "react";
import { useNavigate, Link, Form } from "react-router-dom";
import { toast } from "react-toastify";
// -Constants-
import { logoImage } from "../../constants/ImagesConstant";
// -Utils-
import customFetch from "../../utils/customFetch";
// -Components-
import { FormRow } from "..";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: "guest@gmail.com",
      password: "secret123!",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("Logged in as a demo user");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err?.response?.data?.msg);
      return err;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    setFormValid(email.trim() !== "" && password.trim() !== "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValid) return;
    try {
      const userData = {
        email: email,
        password: password,
      };
      const response = await customFetch.post("/auth/login", userData);
      const { token } = response.data;
      //localStorage.setItem("token", token);
      navigate("/dashboard");
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
          Login
        </h1>
        <Form
          className="flex flex-col items-center"
          method="post"
          onSubmit={handleSubmit}
        >
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
            <div className="">Login</div>
            <div className="absolute inset-0 bg-black w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
          </button>
        </Form>
        <div
          className="pt-4 font-montserrat cursor-pointer hover:text-blue-500 ease-out duration-200"
          onClick={loginDemoUser}
        >
          Explore the app
        </div>
        <div className="pt-2 font-montserrat">
          Not a member yet?
          <Link to="/register" className="ml-1 font-medium text-blue-500">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
