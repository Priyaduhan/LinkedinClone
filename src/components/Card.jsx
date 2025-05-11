import React from "react";
import cardImg from "../assets/cardimg1.png";
import postImg from "../assets/post-img.jpeg";

import { PiDotsThreeBold } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { LuDot } from "react-icons/lu";
import { IoEarthSharp } from "react-icons/io5";

const Card = () => {
  return (
    <div>
      <div>
        <p>Suggested</p>
        <PiDotsThreeBold />
        <RxCross1 />
      </div>
      <div>
        <img src={cardImg} alt="cardImage" />
        <div>
          <p>Isha Verma</p>
          <span>
            <LuDot />
          </span>
          <span>3rd+</span>
          <p>Python Backend Developer</p>
          <p>2d</p>
          <span>
            <LuDot />
          </span>
          <span>
            <IoEarthSharp />
          </span>
        </div>
        <p>
          If you're preparing for interviews or just love leveling up your JS
          brain, it’s worth spending time on these advanced topics. Mastering
          them isn’t just for passing interviews. it makes you a better
          problem-solver
        </p>
        <img src={postImg} alt="postImage" />
      </div>
    </div>
  );
};

export default Card;
