// -React-
import React from "react";
// -Components-
import { LandingPageAction } from "..";
// -Constants-
import { logoImage, landingImage } from "../../constants/ImagesConstant";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center md:justify-start md:pl-10 pt-10 cursor-default mx-auto">
        <img src={logoImage} alt="Logo" className="w-[48px] h-[48px]" />
        <div className="text-3xl font-montserrat pl-[0.5rem] text-blue-500">
          Hirefy
        </div>
      </div>
      <div className="flex items-center justify-center pt-[5rem]">
        <div className="max-w-screen-lg flex lg:flex-row lg:justify-between flex-col-reverse justify-center mx-auto px-6 py-12 items-center text-center w-[80%]">
          <div className="flex flex-col items-center lg:w-[50%] lg:mr-20">
            <h1 className="text-3xl font-bold mb-4">
              Welcome to <span className="text-blue-500">Hirefy</span>
            </h1>
            <p className="text-gray-600 font-montserrat mb-4">
              In the world of full opportunities, Hirefy is your reliable
              partner in the quest for the perfect job. With our unique
              algorithms, we find the perfect match between talent and
              companies, creating pathways to success for all.
            </p>
            <LandingPageAction />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={landingImage}
              alt="LandingImage"
              className="w-full md:w-[70%] lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
