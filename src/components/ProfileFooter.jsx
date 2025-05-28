import React from "react";

import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";

const ProfileFooter = () => {
  return (
    <>
      <div>
        <div className="md:flex justify-between md:mx-1 my-4 lg:justify-around">
          <div className="grid grid-cols-2 text-[12px] my-2">
            <div>About</div>
            <div>Accessibility</div>
            <div>Talent Solutions</div>
            <div>Professional Community Policies</div>
            <div>Careers</div>
            <div>Marketing Solutions</div>
            <div>Privacy & Terms </div>
            <div>Ad Choices</div>
            <div>Advertising</div>
            <div>Sales Solutions</div>
            <div>Mobile</div>
            <div>Small Business</div>
            <div>Safety Center</div>
          </div>

          {/* -----2 div---- */}
          <div>
            <div className="flex gap-1 mb-1.5">
              <BsFillQuestionCircleFill className="text-gray-700 mt-1" />
              <div>
                <p className="text-[14px] text-gray-600 font-medium">
                  Questions
                </p>
                <p className="text-[12px] text-gray-600">
                  Visit our Help Center.{" "}
                </p>
              </div>
            </div>

            <div className="flex gap-1 mb-1.5">
              <IoSettingsSharp className="text-gray-700 mt-1" />
              <div>
                <p className="text-[14px] text-gray-600 font-medium">
                  Manage your account and privacy
                </p>
                <p className="text-[12px] text-gray-600">
                  Go to your Settings.{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-1 mb-1.5">
              <FaShieldAlt className="text-gray-700 mt-1" />
              <div>
                <p className="text-[14px] text-gray-600 font-medium">
                  Recommendation transparency
                </p>
                <p className="text-[12px] text-gray-600">
                  Learn more about Recommended Content.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* -----3 div------- */}
          <div>
            <p className="text-[12px] text-gray-600">Select Language</p>
            <select
              name=""
              id="language"
              className="w-full border border-gray-500 rounded-sm text-[12px] p-1.5"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
        </div>

        <p className="text-[12px] text-gray-500 lg:flex lg:justify-around">LinkedIn Corporation © 2025</p>
      </div>
    </>
  );
};

export default ProfileFooter;
