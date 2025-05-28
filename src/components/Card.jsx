import React from "react";
import cardImg from "../assets/cardimg1.png";
import postImg from "../assets/post-img.jpeg";
import Comment from "./Comment.jsx";

import { PiDotsThreeBold } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { LuDot } from "react-icons/lu";
import { IoEarthSharp } from "react-icons/io5";
import { IoIosThumbsUp } from "react-icons/io";
import { IoHeartCircleSharp } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
const Card = ({ namei, profession, posted_days, description }) => {
  return (
    <div className="bg-white mt-5 px-4 border border-gray-300 mb-2  ">
      <div className="flex gap-2 w-full justify-between py-1.5  border-b border-gray-300 ">
        <div>
          <p className="text-[12px] text-gray-400">Suggested</p>
        </div>

        <div className="flex gap-4  ">
          <PiDotsThreeBold className="text-[22px]" />
          <RxCross1 className="text-[16px] mt-1 font-medium" />
        </div>
      </div>
      {/* ---card-content---- */}
      <div className="pt-2">
        <div className="flex justify-center">
          <img
            src={cardImg}
            alt="cardImage"
            className="h-[42px] w-[40px] mt-1 mx-auto"
          />
          <div className="flex  pl-2 flex-row w-full justify-between">
            <div className="flex flex-col pl-2">
              <div className="flex">
                <p className="text-[16px] font-medium">{namei}</p>
                <LuDot className="text-gray-500 mt-1" />

                <span className="text-[12px] text-gray-500 mt-1">3rd+</span>
              </div>
              <div className="text-[12px]  text-gray-500">
                <p>{profession}</p>
              </div>
              <div className="flex text-[12px] text-gray-500">
                <p>{posted_days}</p>
                <span>
                  <LuDot className="text-gray-600 mt-0.5" />
                </span>
                <span>
                  <IoEarthSharp className="mt-0.5 text-gray-700" />
                </span>
              </div>
            </div>
            <div className="flex text-[16px]  text-[#0367bf] font-medium justify-center mr-1 mt-1 ">
              <FaPlus className="mt-1" />
              <p>Follow</p>
            </div>
          </div>
        </div>

        <p className="text-[14px] mt-0.5">{description}</p>
        <img
          src={postImg}
          alt="postImage"
          className="h-[420px] mt-1 border-b border-gray-400"
        />
        {/* // ---repost and comment section-------- */}
        <div className="flex flex-row py-1.5 justify-between">
          <div className="flex text-[16px]  ">
            <IoIosThumbsUp className="text-[#378FE9] border rounded-full" />
            <IoHeartCircleSharp className="text-[#DF704D] -ml-2  border rounded-full " />
            <FaHandHoldingHeart className="text-[#BBA9D1] -ml-1  border rounded-full" />
          </div>

          <div className="flex text-[14px] text-gray-500 pr-0.5 ">
            {/* <p>Hitesh and 175 others</p> */}
            <p>15 comments</p>
            <span className="mt-1">
              <LuDot />
            </span>
            <span>4 repost</span>
          </div>
        </div>
        {/* -------repost----- */}
        <div className="flex justify-around py-3 border-t border-gray-300 ">
          <div className=" hover:bg-gray-100 hover:rounded-sm lg:flex lg:gap-0.5 ">
            <IoIosThumbsUp className="text-[18px] cursor-pointer" />
            <p className="hidden cursor-pointer lg:flex text-[14px] ">Like</p>
          </div>
          <div className="lg:flex lg:gap-0.5 hover:bg-gray-100 hover:rounded-sm">
            <FaRegCommentDots className="text-[18px] cursor-pointer" />
            <p className="hidden  lg:flex text-[14px] ">Comment</p>
          </div>
          <div className="lg:flex lg:gap-0.5 hover:bg-gray-100 hover:rounded-sm ">
            <BiRepost className="text-[18px] cursor-pointer" />
            <p className="hidden  lg:flex text-[14px] ">Repost</p>
          </div>
          <div className="lg:flex lg:gap-0.5 hover:bg-gray-100 hover:rounded-sm">
            <IoIosSend className="text-[18px] cursor-pointer" />
            <p className="hidden  lg:flex text-[14px] ">Send</p>
          </div>
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default Card;
