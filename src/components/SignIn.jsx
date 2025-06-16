import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import linkdinLogo from "../assets/linkedinImg.png";
import googleLogo from "../assets/google.png";
import microsoftLogo from "../assets/microsoft.png";
import LoginFooter from "./LoginFooter";

const SignIn = () => {
  const navigate = useNavigate();
  const [details, setdetails] = useState({
    username: "",
    password: "",
  });
  const handleSignin = (e) => {
    e.preventDefault();
    let temp = JSON.parse(localStorage.getItem("signup-details"));
    console.log("temp", temp);
    console.log("detials value", details);
    if (details.username === temp.email && details.password === temp.password) {
      console.log("matched and redirect");
      navigate("/home");
    } else {
      alert("please enter correct details");
    }
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
          <form action="" onSubmit={handleSignin}>
            <div className="bg-white flex flex-col justify-center align-middle sm:ml-auto sm:mr-auto px-8 py-4  sm:w-[400px] sm:rounded-2xl rounded-xl ml-[3px] mr-[3px] w-auto">
              <div className="  my-2 w-full sm:h-[2.5rem] border border-gray-600 rounded-3xl   h-[2.4rem] flex justify-center hover:bg-[#f1eded]">
                <button className=" flex gap-5 items-center font-medium text-gray-800  ">
                  <span>Continue with Google </span>
                  <img src={googleLogo} alt="" className="h-[16px] w-[18px] " />
                </button>
              </div>

              <div className="  my-2 w-full sm:h-[2.5rem] border border-gray-600 rounded-3xl   h-[2.4rem] flex justify-center hover:bg-[#f1eded]">
                <button className=" flex gap-3 items-center font-medium text-gray-800  ">
                  <span>Continue with Microsoft </span>
                  <img
                    src={microsoftLogo}
                    alt=""
                    className="h-[16px] w-[18px] "
                  />
                </button>
              </div>

              <div></div>
              <p className="text-center text-gray-600 mt-1 mb-4">or</p>
              <div className="flex flex-col my-2 ">
                <p className="text-[14px] font-medium ">
                  Email or phone number
                </p>
                <input
                  type="text"
                  name=""
                  id="signinUsername"
                  value={details.username}
                  onChange={(e) =>
                    setdetails({ ...details, username: e.target.value })
                  }
                  className="border border-black rounded-md px-3 py-0.5 h-[2.5rem]"
                />
              </div>
              <div className="flex flex-col my-2  ">
                <p className="text-[14px] font-medium ">Password</p>
                <input
                  type="password"
                  name=""
                  id="signinPassword"
                  value={details.password}
                  onChange={(e) => {
                    setdetails({ ...details, password: e.target.value });
                  }}
                  className="border border-black rounded-md px-3 py-0.5 h-[2.5rem]"
                />
              </div>

              <div className="flex justify-items-start text-[16px] gap-1 my-2 ">
                <p className="text-[#0A66C2] font-medium">Forgot Password?</p>
              </div>
              <div className="flex my-2 gap-1">
                <input type="checkbox" />
                <p className="text-[14px] text-gray-600">Keep me logged in</p>
              </div>
              <button
                type="submit"
                className="mt-6 mb-4 w-full bg-blue-700 text-md  text-white rounded-xl sm:h-[2.5rem] h-[2.4rem] font-semibold cursor-pointer "
              >
                Sign in
              </button>
            </div>
          </form>
          {/* form ends here */}
          <div className="flex justify-center text-[14px] gap-1 sm:mt-4 mt-5 ">
            <p>New to LinkedIn?</p>
            <p className="text-[#0A66C2] font-medium">
              <Link to="/">Join now </Link>
            </p>
          </div>
        </div>
      </div>
      <LoginFooter />
    </>
  );
};

export default SignIn;
