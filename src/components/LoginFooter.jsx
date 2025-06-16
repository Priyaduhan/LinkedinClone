import React from "react";
// import linkdinLogo from "../assets/linkedinImg.png";

const LoginFooter = () => {
  return (
    <div>
      <div className="   ">
        <div className="flex text-[12px] sm:text-[14px]   text-gray-500 flex-wrap w-full gap-3 justify-center pt-3 lg:text-[12px]">
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
        <div className="text-[12px]  text-gray-700 pt-3">
          {/* <img src={linkedinImg} alt="" className="w-[55px]" /> */}
          <p className="text-center">LinkedIn Corporation © 2025</p>
        </div>
      </div>
    </div>
  );
};

export default LoginFooter;
