import React from "react";
import { logoImage } from "../../constants/ImagesConstant";

const LoginPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center md:justify-start cursor-default mx-auto pb-10 pt-10">
        <img src={logoImage} alt="Logo" className="w-[48px] h-[48px]" />
        <div className="text-3xl font-montserrat pl-[0.5rem] text-blue-500">
          Hirefy
        </div>
      </div>
      <h1 className="text-2xl font-bold text-bluePurple uppercase mb-4 text-center">
        Login
      </h1>
      <form className="flex flex-col items-center">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-800 text-white border-none rounded-lg px-4 py-3"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-800 text-white border-none rounded-lg px-4 py-3"
          />
        </div>
        <button
          type="submit"
          className="bg-bluePurple text-white py-2 px-4 rounded-lg hover:bg-galaxy transition-colors duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
