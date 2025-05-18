import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import NewsContent from "./NewsContent";

//icons and image import
import logo from "../assets/logo.jpg";
import profile from "../assets/Profile.jpg";
import bg from "../assets/profile-bg.png";

import { RiCheckboxFill } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import { BiCalendarEvent } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdSmartDisplay } from "react-icons/md";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { LuDot } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineArrowDropUp } from "react-icons/md";

const Home = () => {
  const [Show, setShow] = useState(false);
  // const [buttonText, setButtonText] = useState("Show more");
  const handleButton = () => {
    setShow(!Show);
  };

  return (
    <div className="bg-[#F4F2EE]  ">
      <Navbar />
      <div className=" md:flex md:justify-around md:mt-5 md:mr-4 gap-1  ">
        <div className=" md:ml-15 lg:ml-[150px]  ">
          {/* <IoPersonCircleOutline /> */}
          <div className=" pl-4 mt-2 bg-white pt-0.5 md:border  md:border-gray-300 md:rounded-sm md:mt-0 lg:rounded-md">
            <img
              src={profile}
              alt=""
              className="h-[70px] w-[70px] rounded-full mt-5  "
            />

            <p className="text-[20px] font-medium">Priya Duhan</p>
            <p className="text-[12px] mt-1 mb-0 pr-1">
              Attended Guru Jambheshwar University
            </p>
            <p className="text-[12px] text-gray-500">Hansi,Haryana</p>
            <div className="flex mx-0">
              <img src={logo} alt="uni-logo" className="w-[26px] h-[25px] " />
              <p className="text-[12px] font-semibold mt-1 mb-2 ">
                K.R. Mangalam Universtiy
              </p>
            </div>
          </div>

          {/* -----Show more-------- */}

          <button
            onClick={handleButton}
            className="text-[14px] font-semibold text-gray-700  flex text-center align-middle mx-auto mt-4 mb-3 md:hidden hover:bg-gray-200  hover:rounded-sm hover:p-0.5 hover:cursor-pointer "
          >
            {Show ? "Show Less" : "Show more"}

            {Show ? (
              <MdOutlineArrowDropUp className="relative top-0.5 text-[18px]" />
            ) : (
              <IoMdArrowDropdown className="relative top-1 text-[15px]" />
            )}
          </button>
          <div
            className={
              Show
                ? "  flex-col bg-white text-[12px]  p-3 mt-2 md:rounded-sm border border-gray-300"
                : "hidden md:flex md:w-[225px] md:gap-3 p-3 mt-2 md:rounded-sm border border-gray-300  bg-white text-[12px] flex-col "
            }
          >
            <div className="flex flex-row justify-between">
              <p className="font-medium">Profile Viewers</p>
              <p className="text-[#0A66C2] font-medium">2</p>
            </div>
            <p className="font-medium">View all analytics</p>
          </div>
          <div
            className={
              Show
                ? " bg-white border border-gray-300 pl-4 py-3 gap-1 flex flex-col mt-3"
                : "hidden bg-white border border-gray-300 pl-4 py-3 gap-1 md:flex flex-col mt-3"
            }
          >
            <p className="text-gray-500 text-[12px]">
              Unlock premium tools & insights{" "}
            </p>

            <div className="text-[12px] flex font-medium">
              <RiCheckboxFill className="text-[15px] text-yellow-700 " />
              <p>Try premium for ₹0</p>
            </div>
          </div>
          <div
            className={
              Show
                ? " md:flex gap-3 flex-col font-medium text-[#000000E6] bg-white border border-gray-300 rounded-sm mt-2 p-4 mb-4"
                : "hidden md:flex gap-3 flex-col font-medium text-[#000000E6] bg-white border border-gray-300 rounded-sm mt-2 p-4 mb-4"
            }
          >
            <div className="flex text-[12px] gap-3 align-center ">
              <FaBookmark className="relative top-0.5 w-[10px] h-[12px]" />
              <p>Saved items</p>
            </div>
            <div className="flex text-[12px] h-[16px] gap-2 ">
              <MdGroups className=" relative  w-[16px] h-[16px]" />
              <p className="text-[12px]">Groups</p>
            </div>
            <div className="flex text-[12px] gap-3 ">
              <FaRegNewspaper className="pt-0.5 w-[12px] h-[14px]" />
              <p>Newsletters</p>
            </div>
            <div className="flex text-[12px] gap-2 ">
              <BiCalendarEvent className="pt-0 w-[12px] h-[16px]" />
              <p>Events</p>
            </div>
          </div>
        </div>
        {/* --------------stylin for large screen-------- */}
        <div className="lg:flex lg:gap-7 lg:justify-between   lg:mr-20 lg:ml-15">
          {/* ------start a post-----3---- */}
          <div>
            <div className="flex flex-col pl-4 bg-white pt-3 md:rounded-sm md:border md:border-gray-300 ">
              <div className="flex gap-1 ">
                <IoPersonCircleOutline className="w-[40px] h-[40px]" />
                <div className="w-[230px] h-[40px] rounded-2xl border border-gray-500 text-gray-800 text-left pl-3 pt-2">
                  Start a Post{" "}
                </div>
              </div>
              <div className="flex pt-4 justify-around pb-3">
                <div className="flex gap-1">
                  <MdSmartDisplay className="h-[25px] w-[24px] text-green-600 -mt-1 " />
                  <p className="text-[14px] text-gray-700 font-medium">Video</p>
                </div>
                <div className="flex gap-1">
                  <MdPhotoSizeSelectActual className="h-[24px] w-[24px] text-blue-500 -mt-1  " />
                  <p className="text-[14px] text-gray-700 font-medium">
                    Photos
                  </p>
                </div>
                <div className="flex gap-1">
                  <BiNews className="h-[24px] w-[24px] text-orange-700 -mt-1  " />
                  <p className="text-[14px] text-gray-700 font-medium">
                    Write article
                  </p>
                </div>
              </div>
            </div>
            <Card
              namei="ISHA VERMA"
              profession="Python Backend Developer"
              posted_days="4d"
              description="If you're preparing for interviews or just love leveling up your JS
          brain, it’s worth spending time on these advanced topics. Mastering
          them isn’t just for passing interviews. it makes you a better
          problem-solver."
            />
            <Card
              namei="Vihan Verma"
              profession="Front-end Developer"
              posted_days="2d"
              description="Passinate web developer."
            ></Card>
          </div>
          {/* -------start a post div ends--------- */}
          <div className="lg:w-[260px]">
            {/* --------linkedin news-----------1-- */}
            <div className="bg-white pl-2 mt-4 pt-2 border border-gray-300 rounded-sm lg:mt-0 lg:w-[250px] ">
              <h2 className="text-[20px] font-medium  ">LinkedIn News</h2>
              <h3 className="text-[14px] text-gray-500 font-medium py-1">
                Top Stories
              </h3>
              <NewsContent
                headline=" Impact of India, Pakistan tensions"
                time="1d ago "
                readers="39,486 readers"
              />
              <NewsContent
                headline=" Impact of Social Media"
                time="1d ago "
                readers="29,486 readers"
              />
              <NewsContent
                headline=" Impact of India, Pakistan tensions"
                time="4d ago "
                readers="30,000 readers"
              />
              <NewsContent
                headline=" Impact of India, Pakistan tensions"
                time="5d ago "
                readers="39,486 readers"
              />

              <div className="text-[15px] flex text-gray-600 font-medium py-2">
                <p> Show more </p>
                <RiArrowDropDownLine className="mt-0.5 text-[18px]" />{" "}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
