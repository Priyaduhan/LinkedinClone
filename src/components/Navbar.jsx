import React from "react";
import { NavLink } from "react-router-dom";

import linkedinlogo from "../assets/linkedin-logo.png";
import { TiHome } from "react-icons/ti";
import { IoPeopleSharp } from "react-icons/io5";
import { PiBagFill } from "react-icons/pi";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RiCheckboxFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    // ----------main div-------------------------------
    <div
      className="flex bg-[#FFFFFF] border border-black justify-around pt-2 cursor-pointer  sm:border-amber-300 sm:border-2 sm:w-auto w-full md:w-auto md:px-1"
      style={{ color: "#00000099" }}
    >
      {/* ----------------------nav------------------------ */}
      <nav className="  border border-blue-500 w-full  flex grow  justify-between flex-nowrap items-center mx-3 gap-1 sm:border-2 sm:border-purple-500 sm:min-w-[700px] sm:max-w-auto sm:mx-auto sm:justify-around sm:flex-row md:w-auto md:grow md:flex-nowrap lg:w-full md:mx-0  ">
        <div className="flex  border-2 grow border-amber-500 shrink-0 justify-around mr-1 gap-1 pr-2 sm:gap-7  sm:border-2 sm:border-amber-300 md:w-auto md:grow md:items-center md:px-0 md:justify-center lg:grow-0">
          <img
            src={linkedinlogo}
            alt="logo"
            className=" h-[35px] w-[35px]] bottom-0.4 relative md:top-0.5 md:h-[38px] md:w-[38px] lg:top-0"
          />
          <div className="flex items-center gap-1 md:flex-col lg:flex-row ">
            <FaSearch
              className="h-4.5 text-[#3D3D3D] w-4 mt-0.6 sm:h-6 md:relative md:top-1 lg:absolute lg:top-6 lg:left-21 lg:text-[#3D3D3D] lg:z-10 "
              // style={{ color: "#00000099" }}
            />
            <p className="hidden md:block md:text-[0.8rem ] lg:hidden ">
              Search
            </p>
            <input
              type="text"
              placeholder="Search"
              className=" h-[34px] hidden lg:block lg:relative lg:w-60 lg:pl-8 lg:min-w-[280px] lg:bg-[#F2F2F2] lg:text-[#292a29] lg:rounded-sm"
            />
          </div>
        </div>
        {/* ------------------buttons------------------------- */}
        <div className="flex justify-around border mx-0 border-pink-500 grow gap-3 relative top-0.4  sm:border-r-1  sm:w-[360px] sm:h-[47px] sm:pr-1 sm:border-2 sm:border-pink-500 sm:justify-between md:w-[400px]  md:grow md:items-center md:justify-around lg:ml-10 lg:justify-end lg:gap-5 ">
          <div>
            <NavLink to="/">
              <TiHome className="h-[24px] w-[24px]  relative top-0.1 bottom-0.5 hover:text-[#191919] sm:h-[30px] sm:w-[30px] sm:relative sm:top-1 md:top-0.5" />
              <p className="hidden md:block md:relative md:bottom-0.5 md:text-[0.8rem] hover:text-[#191919]">
                Home
              </p>
            </NavLink>
          </div>
          <div>
            <IoPeopleSharp className="h-[24px] w-[24px]  relative top-0.1 bottom-0.5 hover:text-[#191919] sm:h-[30px] sm:w-[30px] sm:top-1 md:left-1.5" />
            <p className="hidden hover:text-[#191919] md:block md:relative md:bottom-0.5 md:text-[0.8rem] md:right-1">
              Network
            </p>
          </div>
          <div>
            <PiBagFill className="h-[24px] w-[24px]  relative top-0.1 bottom-0.5 hover:text-[#191919] sm:h-[30px] sm:w-[30px] sm:top-1 md:w-[23px]" />
            <p className="hidden hover:text-[#191919] md:block md:relative md:bottom-0.5 md:text-[0.8rem]">
              Jobs
            </p>
          </div>
          <div>
            <BiSolidMessageSquareDots className="h-[24px] w-[24px]  relative top-0.6 hover:text-[#191919] sm:h-[30px] sm:w-[30px] sm:top-1 md:w-[21px] md:left-4" />
            <p className="hidden hover:text-[#191919] md:block md:relative md:bottom-0.5 md:text-[0.8rem]">
              Messaging
            </p>
          </div>
          <div>
            <IoNotifications className="h-[24px] w-[24px]  relative top-0.8 hover:text-[#191919] sm:h-[30px] sm:w-[30px] sm:top-1 md:w-[22px] md:left-5" />
            <p className="hidden hover:text-[#191919] md:block md:relative md:bottom-0.5 md:text-[0.8rem]">
              Notifications
            </p>
          </div>
          <div>
            <IoPersonCircleOutline className="hidden sm:block h-[24px] w-[24px]  relative top-0.8 hover:text-[#191919]  sm:h-[30px] sm:w-[30px] sm:top-1 md:w-[22px] md:left-0.5" />
            <div>
              <p className="hidden hover:text-[#191919] md:block md:relative md:bottom-0.5 md:text-[0.8rem] md:flex ">
                Me
                <IoMdArrowDropdown className="md:relative md:top-0.3 md:text-xl" />
              </p>
            </div>
          </div>
          <div className="sm:hidden">
            <BsThreeDots className="h-[24px] w-[24px]  relative top-0.1 bottom-0.5 hover:text-[#191919]" />
          </div>
        </div>
        {/* ------------------another div----------- */}

        <div className="flex hidden  sm:border-2 sm:border-blue-500 sm:flex  md:grow md:items-center md:justify-center md:flex ">
          <div>
            <BsFillGrid3X3GapFill className=" sm:h-[24px] sm:w-[28px] sm:relative sm:top-1.7 sm:left-6 md:top-0 md:left-4" />
            <p className="hidden hover:text-[#191919] sm:block sm:flex sm:flex-row sm:text-[0.8rem] md:flex md:text-[0.8rem] md:bottom-0 md:top-0.8 md:relative">
              For Business{" "}
              <IoMdArrowDropdown className=" sm:relative sm:top-0.5 sm:text-md md:relative  md:top-0.3 md:text-xl" />
            </p>
          </div>
          <div className="sm:flex sm:flex-col sm:ml-5 sm:items-center ">
            <RiCheckboxFill className=" sm:h-[24px] sm:w-[22px] md:w-[28px ] md:h-[26px] md:text-4xl" />
            <p className="hidden hover:text-[#191919] sm:block  sm:text-[0.8rem] md:flex md:text-[0.8rem] md:bottom-0 md:top-0.8 md:relative">
              Try Premium for ₹0
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
