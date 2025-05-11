import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
//icons and image import
import logo from "../assets/logo.jpg";

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

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <IoPersonCircleOutline />
          <p>Priya Duhan</p>
          <p>Attended Guru Jambheshwar University</p>
          <p>Hansi,Haryana</p>
          <div>
            <img src={logo} alt="uni-logo" className="w-[40px] h-[40px]" />
            <p>K.R. Mangalam Universtiy</p>
          </div>
          {/* -------------- */}
          <button>
            Show More <IoMdArrowDropdown />
          </button>
          <div>
            <div>
              <p>Profile Viewers</p>
              <p>2</p>
            </div>
            <p>View all analytics</p>
          </div>
          <div>
            <p>Unlock premium tools & insights </p>
            <RiCheckboxFill />
            <p>Try premium for ₹0</p>
          </div>
          <div>
            <div>
              <FaBookmark />
              <p>Saved</p>
            </div>
            <div>
              <MdGroups />
              <p>Groups</p>
            </div>
            <div>
              <FaRegNewspaper />
              <p>Newsletters</p>
            </div>
            <div>
              <BiCalendarEvent />
              <p>Events</p>
            </div>
          </div>
        </div>
        {/* ------start a post--------- */}
        <div>
          <div>
            <IoPersonCircleOutline />
            <div>Start a Post </div>
          </div>
          <div>
            <div>
              <MdSmartDisplay />
              <p>Play</p>
            </div>
            <div>
              <MdPhotoSizeSelectActual />
              <p>Photos</p>
            </div>
            <div>
              <BiNews />
              <p>Write article</p>
            </div>
          </div>
        </div>
        {/* -------start a post div ends--------- */}
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
