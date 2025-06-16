import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import linkdinLogo from "../assets/linkedinImg.png";
import googleLogo from "../assets/google.png";
import microsoftLogo from "../assets/microsoft.png";
import LoginFooter from "./LoginFooter";

const Signup = () => {
  const navigate = useNavigate();
  const [details, setdetails] = useState({
    email: "",
    password: "",
  });
  const submitSignup = (e) => {
    console.log("clicked");

    e.preventDefault();
    console.log(details);

    localStorage.setItem("signup-details", JSON.stringify(details));
    navigate("/signin");
  };
  return (
    <>
      <div className="bg-[#F3F2F0] h-[100vh]">
        <div>
          <div>
            <img
              src={linkdinLogo}
              alt="logo"
              className="h-[1.8rem] sm:h-[2.8rem]  sm:ml-[10%] sm:mb-4 sm:pt-4 pl-3 pt-3"
            />
          </div>
          <h1 className="sm:text-2xl font-medium sm:text-center sm:my-5 text-center my-3 ">
            Make the most of your professional life
          </h1>
          {/* //form start */}
          <form action="" onSubmit={submitSignup}>
            <div className="bg-white flex flex-col justify-center align-middle sm:ml-auto sm:mr-auto px-8 py-4  sm:w-[400px] sm:rounded-2xl rounded-xl ml-[3px] mr-[3px] w-auto">
              <div className="flex flex-col my-2 ">
                <p className="text-[14px] font-medium ">
                  Email or phone number
                </p>
                <input
                  type="text"
                  name=""
                  id="emailId"
                  value={details.email}
                  onChange={(e) =>
                    setdetails({ ...details, email: e.target.value })
                  }
                  className="border border-black rounded-md px-3 py-0.5 h-[2rem]"
                />
              </div>
              <div className="flex flex-col my-2  ">
                <p className="text-[14px] font-medium ">Password</p>
                <input
                  type="password"
                  name=""
                  id="passwordId"
                  value={details.password}
                  onChange={(e) =>
                    setdetails({ ...details, password: e.target.value })
                  }
                  className="border border-black rounded-md px-3 py-0.5  h-[2rem]"
                />
              </div>
              <div className="flex my-2 gap-1 mb-5 ">
                <input type="checkbox" />
                <p className="text-[14px] text-gray-600">Remember me</p>
              </div>
              <p className="sm:text-[12px] text-[10px] text-center">
                By clicking Agree & Join or Continue, you agree to the LinkedIn
              </p>
              <p className="sm:text-[12px] text-[10px]  text-center">
                User Agreement, Privacy Policy, and Cookie Policy.
              </p>
              <button
                type="submit"
                className="mt-6 mb-4 w-full bg-blue-700 text-md  text-white rounded-xl sm:h-[2.5rem] h-[2rem] font-semibold cursor-pointer "
              >
                Agree & Join
              </button>
              <div></div>
              <p className="text-center text-gray-600 mt-1 mb-4">or</p>
              <div className="  my-2 w-full sm:h-[2.5rem] border border-gray-600 rounded-3xl   h-[2.2rem] flex justify-center hover:bg-[#f1eded]">
                <button className=" flex gap-5 items-center font-medium text-gray-800  ">
                  <span>Continue with Google </span>
                  <img src={googleLogo} alt="" className="h-[16px] w-[18px] " />
                </button>
              </div>

              <div className="  my-2 w-full sm:h-[2.5rem] border border-gray-600 rounded-3xl   h-[2.2rem] flex justify-center hover:bg-[#f1eded]">
                <button className=" flex gap-3 items-center font-medium text-gray-800  ">
                  <span>Continue with Microsoft </span>
                  <img
                    src={microsoftLogo}
                    alt=""
                    className="h-[16px] w-[18px] "
                  />
                </button>
              </div>

              <div className="flex justify-center text-[16px] gap-1 my-2 ">
                <p>Already on LinkedIn?</p>
                <p className="text-[#0A66C2] font-medium cursor-pointer">
                  <Link to="/signin">Sign in</Link>
                </p>
              </div>
            </div>
          </form>
          {/* form ends here */}
          <div className="flex justify-center text-[14px] gap-1 sm:mt-4 mt-5 ">
            <p>Looking to create a page for a business?</p>
            <p className="text-[#0A66C2] font-medium">Get help</p>
          </div>
        </div>
      </div>
      <LoginFooter />
    </>
  );
};

export default Signup;
