import React from "react";
import { logoImage } from "../../constants/ImagesConstant";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center md:justify-start md:pl-10 pt-10 cursor-default mx-auto">
        <img src={logoImage} alt="Logo" className="w-[48px] h-[48px]" />
        <div className="text-3xl font-montserrat pl-[0.5rem] text-blue-500">
          Hirefy
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="max-w-screen-lg mx-auto px-6 py-12 items-center text-center">
          <div className="flex flex-col items-center">
            <div className="">
              <h1 className="text-3xl font-bold mb-4">
                Welcome to <span className="text-blue-500">Hirefy</span>
              </h1>
            </div>
            <p className="text-gray-600 mb-4">
              In the world of full opportunities, Hirefy is your reliable
              partner in the quest for the perfect job. With our unique
              algorithms, we find the perfect match between talent and
              companies, creating pathways to success for all.
            </p>
            <div>
              <button
                href="#"
                className="border-2 border-black p-4 bg-blue-500 mr-4"
              >
                Register Now
              </button>
              <button
                href="#"
                className="border-2 border-black p-4 bg-blue-500"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
