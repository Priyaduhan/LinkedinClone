import React from "react";
import { LuDot } from "react-icons/lu";

const NewsContent = ({ headline, time, readers }) => {
  return (
    <div>
      <div className="mb-0.5">
        <p className="text-[14px] font-medium">{headline}</p>
        <div className="flex flex-row text-[12px] text-gray-500">
          <p>{time} </p>
          <span className="mt-1">
            <LuDot />
          </span>
          <span>{readers}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
