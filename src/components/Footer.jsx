import React from "react";
import linkedinImg from "../assets/linkedinImg.png";

const Footer = () => {
  return (
    <div className="   mr-4 mt-4 pb-4 lg:w-[250px]">
        <div className="bg-white border border-gray-300 h-0.5  ml-1 rounded-sm"></div>
      <div className="flex text-[14px]   text-gray-500 flex-wrap w-full gap-3 justify-center pt-3 lg:text-[12px]">
        <p>About</p>
        <p>Accessibility</p>
        <p>Help Center</p>
        <p>Privacy & Terms</p>
        <p>Ad Choices</p>
        <p>Advertising</p>
        <p>Business Services</p>
        <p>Get the LinkedIn app</p>
        <p>More</p>
      </div>
      <div className="text-[12px] flex justify-center gap-1 text-gray-700 pt-3">
        <img src={linkedinImg} alt="" className="w-[55px]" />
        <p>LinkedIn Corporation © 2025</p>
      </div>
    </div>
  );
};

export default Footer;
