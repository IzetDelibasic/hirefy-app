import React from "react";
import { Link } from "react-router-dom";
import { FormRow } from "..";
import { CustomButton } from "..";
import { logoImage } from "../../constants/ImagesConstant";

const LoginPage = () => {
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
        <form className="flex flex-col items-center">
          <FormRow type="Email" name="Email" />
          <FormRow type="Password" name="Password" />
          <Link href="/dashboard">
            <CustomButton
              className="relative bg-blue-500 text-white font-medium py-[1rem] px-[3.5rem] md:px-[4rem] lg:px-[5rem] mr-0 mb-[20px] md:mb-0 rounded-[3rem] group overflow-hidden z-[1]"
              title="Login"
              titleClassName="group-hover:text-white font-subtitle"
              href="/dashboard"
            >
              <div className="absolute inset-0 bg-black w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
            </CustomButton>
          </Link>
        </form>
        <div className="pt-4 font-montserrat">
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
