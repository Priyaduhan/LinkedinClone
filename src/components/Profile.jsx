import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import AboutPop from "./AboutPop";
import ProfileFooter from "./ProfileFooter";
// import Comment from "./Comment";

//images
import introBg2 from "../assets/intro-bg.jpg";
import profile from "../assets/Profile.jpg";
import logo from "../assets/logo.jpg";
import cardImg from "../assets/cardimg1.png";
import krlogo from "../assets/logo.jpg";

import gjulogo from "../assets/gjulogo.png";
import { useSelector } from "react-redux";

//
import { LuDot } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
import { RiPencilLine } from "react-icons/ri";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { IoEye } from "react-icons/io5";
import { TiLocationArrowOutline } from "react-icons/ti";

const Profile = () => {
  const [showDialog, setShowDialog] = useState(false);

  // Add this inside the Profile component
  const bio = useSelector((state) => state.bio.value);
  //   const [bio, setbio] =
  //     useState(` My journey began with a fascination for Linux systems, which led me to delve into the world of networking. As I honed my skills, Iembraced the power of Kali Linux tools and ventured into Python programming. I channeled my creativity into crafting applications
  // using Django, showcasing my ability to bring ideas to life. Seeking to expand my horizons, I transitioned to the dynamic realmof JavaScript, immersing myself in the MERN (MongoDB, Express.js,
  //               React, Node.js) stack. For the past 3 years, I've been dedicated
  //               to mastering this ecosystem, using it to build innovative and
  //               responsive web applications. My passion for learning, combined
  //               with my diverse technical expertise, fuels my drive to tackle new
  //               challenges and contribute to the ever-evolving tech landscape.
  //               Let's connect and explore the endless possibilities at the
  //               intersection of innovation and technology!`);

  return (
    <div className="bg-[#F4F2EE]  ">
      <Navbar />
      <div className="md:flex justify-around  ">
        <div className="md:w-[400px] lg:w-[636px]">
          <div>
            {/* -------------profile card--------------- */}
            <div className="my-4 bg-white border-b border-gray-300   ">
              <div className="relative ">
                <img
                  src={introBg2}
                  alt="intro"
                  className="rounded-t-lg w-full h-[130px] object-cover border-gray-300"
                />
                <div className=" pl-4  absolute top-16">
                  <img
                    src={profile}
                    alt="profile"
                    className=" rounded-full border-4 border-white w-[128px] h-[128px]"
                  />
                </div>
              </div>

              {/* profile name */}

              <div className="flex flex-col pt-20 pl-4 ">
                <div className=" flex flex-col gap-0.5">
                  <div className="sm:flex justify-between">
                    <div>
                      <p className="text-[24px] font-medium">Priya Duhan</p>
                      <p className="text-[16px]">
                        {" "}
                        Javascript || React || Next.js || Node js || Typescript
                      </p>
                      <p className="text-[14px] text-gray-500">
                        Attended Guru Jambheshwar University
                      </p>
                    </div>

                    <div className="  flex pr-4 ">
                      <img src={logo} alt="" className="h-[32px] w-[32px]" />
                      <p className="text-[14px] pt-1 font-medium ">
                        K.R. Mangalam University{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex text-[14px]">
                    <p>Haryana,India </p>
                    <LuDot className=" text-xl text-gray-600 pt-1 font-bold" />
                    <p className="text-[#0A66C2] font-medium">Contact info</p>
                  </div>
                  <p className="text-[14px] text-[#0A66C2] font-medium">
                    500+ connections
                  </p>
                </div>
              </div>
              {/* open to work div */}
              <div className="bg-[#DDE7F1] pl-4 rounded-md text-[14px] py-2 my-4 mx-4">
                <p className="font-medium">Open to Work</p>
                <p>Frontend Web Developer</p>
                <button className="text-[#0A66C2] font-medium cursor-pointer">
                  Show Details
                </button>
              </div>
            </div>
          </div>
          {/* -----------------About------------------ */}
          <div className="bg-white p-4 my-2 border border-gray-300 ">
            <div className="flex  justify-between">
              <h2 className="text-[20px] font-medium">About</h2>

              <RiPencilLine
                className="h-[25px] w-[25px] hover:cursor-pointer hover:h-[30px] hover:w-[30px]"
                onClick={() => setShowDialog(true)}
              />
              {/* --dialog box------- */}
              {showDialog && (
                <AboutPop
                  showDialog={showDialog}
                  setShowDialog={setShowDialog}
                  // bio={bio}
                  // setbio={setbio}
                />
              )}
            </div>
            {/* //here Write */}
            <p className="text-[14px] justify-center">{bio}</p>
            <div className="border border-gray-300 rounded-md mt-3 p-4">
              <div className="flex gap-1 font-medium">
                <IoDiamondOutline className="text-[20px]" />
                <p className="text-[16px]">Top Skills</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px] pl-5">
                  {" "}
                  JavaScript • React.js • Django • Node.js • Linux{" "}
                </p>
                <HiArrowRight />
              </div>
            </div>
          </div>
          {/* -----------services------------------------ */}
          <div className="bg-white border border-gray-300 p-4 flex flex-col gap-2 my-2">
            <h1 className="text-[20px] font-medium">Services</h1>
            <p className="text-[14px] font-semibold">Web Development</p>
            <p className="h-[32px] text-[14px] pt-1 mt-1 border font-medium text-gray-700 border-gray-500 w-40  text-center rounded-full">
              Request Services
            </p>
            <div className="text-[16px]  justify-center pt-2 p-1 border-t flex border-gray-300 text-gray-700 font-medium">
              <p>Show all services</p>
              <HiArrowRight className="mt-1.5" />
            </div>
          </div>
          {/* -----------Education----------------- */}
          <div className="bg-white border border-gray-300 p-4 my-2 flex flex-col gap-2">
            <p className="text-[20px] font-medium ">Education</p>
            <div className="flex gap-1.5">
              <img
                src={krlogo}
                alt="krlogo"
                className="h-[40px] w-[40px]  -ml-1.5"
              />

              <div>
                <p className="text-[14px] font-medium">
                  K.R. Mangalam University
                </p>
                <p className="text-[14px]">Masters of Computer Applications</p>
                <p className="text-[14px] text-gray-500">
                  August 2023-June 2025
                </p>
              </div>
            </div>
            <div className="flex gap-1.5">
              <img src={gjulogo} alt="krlogo" className="h-[30px] w-[30px]" />
              <div>
                <p className="text-[14px] font-medium">
                  Guru Jambheshwar University of Science & Technology
                </p>
                <p className="text-[14px] ">
                  Bachelors of Computer Applications
                </p>
                <p className="text-[14px] text-gray-500 ">
                  August 2023-June 2025
                </p>
              </div>
            </div>
          </div>
          {/* ----------Projects------------------- */}
          <div className="bg-white border border-gray-300 p-4 flex flex-col gap-2 my-2">
            <p className="text-[20px] font-medium ">Projects</p>
            <div className="flex flex-col gap-1 mb-2">
              <p className="text-[16px] font-medium">SnapTalk</p>
              <p className="text-[14px] ">May 2022 - Jun 2022</p>
              {/* -----show project button---- */}
              <div className="flex relative">
                <button className="h-[32px] text-[16px]  w-[20px ] mt-1 pr-5 border font-medium text-gray-700 border-gray-500 w-40   rounded-full">
                  Show Project
                </button>
                <LuSquareArrowOutUpRight className="absolute left-30 top-2.5" />
              </div>
              <p className="text-[14px]">
                Snap Talk is a social media platform like an instagram, where
                you can share their moments with friends.
              </p>
              <div className="flex text-[14px] mt-1 gap-0.5">
                <IoDiamondOutline className="h-[16px] w-[16px] mt-0.5" />
                <p>Next.js and GraphQl</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 mb-2 border-t border-gray-300">
              <p className="text-[16px] font-medium">SnapTalk</p>
              <p className="text-[14px] ">May 2022 - Jun 2022</p>
              {/* -----show project button---- */}
              <div className="flex relative">
                <button className="h-[32px] text-[16px]  w-[20px ] mt-1 pr-5 border font-medium text-gray-700 border-gray-500 w-40   rounded-full">
                  Show Project
                </button>
                <LuSquareArrowOutUpRight className="absolute left-30 top-2.5" />
              </div>
              <p className="text-[14px]">
                Snap Talk is a social media platform like an instagram, where
                you can share their moments with friends.
              </p>
              <div className="flex text-[14px] mt-1 gap-0.5">
                <IoDiamondOutline className="h-[16px] w-[16px] mt-0.5" />
                <p>Next.js and GraphQl</p>
              </div>
            </div>
            <div className="flex justify-center gap-0.5 border-t border-gray-300 pt-2 ">
              <p className="text-[16px] font-medium text-gray-700">
                Show all 2 projects
              </p>
              <HiArrowRight className="mt-1" />
            </div>
          </div>
          {/* -----------skills------------- */}
          <div className="bg-white border border-gray-300 p-4 flex flex-col gap-2 my-2">
            <p className="text-[20px] font-medium">Skills</p>
            <div className="text-[16px] font-normal">
              <p>JavaScript</p>
              <p>React</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <div className="flex justify-center gap-0.5 border-t border-gray-300 pt-2 ">
              <p className="text-[16px] font-medium text-gray-700">
                Show all skills
              </p>
              <HiArrowRight className="mt-1" />
            </div>
          </div>
        </div>
        <div className="md:w-[300px] md:mt-2 lg:w-[300px]">
          <div>
            {/* -----language--------- */}
            <div className="bg-white border border-gray-300 p-4 flex flex-col gap-2 my-2">
              <div className="flex justify-between">
                <div>
                  <p className="text-[18px] font-medium">Profile Language</p>
                  <p className="text-[14px] text-gray-500">English</p>
                </div>
                <RiPencilLine className="h-[24px] w-[24px]" />
              </div>
              <div className="flex justify-between border-t border-gray-300 my-2 pt-2">
                <div>
                  <p className="text-[18px] font-medium">
                    Public profile & URL
                  </p>
                  <p className="text-[14px] text-gray-500">www.linkedi.com</p>
                </div>
                <RiPencilLine className="h-[24px] w-[24px]" />
              </div>
            </div>
            {/* --------border div----------------- */}
            <div className="h-1 border border-gray-300 bg-white my-2"></div>
          </div>
          {/* ------Who viewed your profile---------------- */}
          <div className="bg-white border border-gray-300 p-4 flex flex-col gap-2 my-2">
            <div>
              <p className="text-[16px] font-medium">
                Who your viewers also viewed{" "}
              </p>
              <div className="flex">
                <IoEye className="mt-0.5 text-gray-600" />
                <p className="text-[14px] text-gray-600">Private to you</p>
              </div>
            </div>
            {/* ----viewer1--------- */}
            <div className="flex gap-2">
              <img src={cardImg} alt="" className="h-[48px] w-[48px]" />
              <div>
                <div className="flex">
                  <p className="text-[14px] font-medium">Isha Verma</p>
                  <LuDot className="text-gray-400 mt-1" />
                  <p className="text-[12px] text-gray-500 ">2nd</p>
                </div>
                <p className="text-[14px]">Aspiring Software Engineer</p>
                <div className="flex border border-gray-600 rounded-full p-1 mt-1 w-[110px]">
                  <TiLocationArrowOutline className="h-[16px] w-[16px] ml-2 mt-1" />
                  <p className="text-[16px] ml-1">Message</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 my-2 border-t border-gray-300 pt-3">
              <img src={cardImg} alt="" className="h-[48px] w-[48px]" />
              <div>
                <div className="flex">
                  <p className="text-[14px] font-medium">Isha Verma</p>
                  <LuDot className="text-gray-400 mt-1" />
                  <p className="text-[12px] text-gray-500 ">2nd</p>
                </div>
                <p className="text-[14px]">Aspiring Software Engineer</p>
                <div className="flex border border-gray-600 rounded-full p-1 mt-1 w-[110px]">
                  <TiLocationArrowOutline className="h-[16px] w-[16px] ml-2 mt-1" />
                  <p className="text-[16px] ml-1">Message</p>
                </div>
              </div>
            </div>
          </div>

          {/* --------people you may know------- */}
          <div className="bg-white border border-gray-300 p-4 flex flex-col gap-2 my-2">
            <div>
              <p className="text-[16px] font-medium">People you may know </p>

              <p className="text-[14px] text-gray-600">From your school</p>
            </div>
            {/* ----viewer1--------- */}
            <div className="flex gap-2">
              <img src={cardImg} alt="" className="h-[48px] w-[48px]" />
              <div>
                <div className="flex">
                  <p className="text-[14px] font-medium">Isha Verma</p>
                  <LuDot className="text-gray-400 mt-1" />
                  <p className="text-[12px] text-gray-500 ">2nd</p>
                </div>
                <p className="text-[14px]">Aspiring Software Engineer</p>
                <div className="flex border border-gray-600 rounded-full p-1 mt-1 w-[110px]">
                  <TiLocationArrowOutline className="h-[16px] w-[16px] ml-2 mt-1" />
                  <p className="text-[16px] ml-1">Message</p>
                </div>
              </div>
            </div>
            {/* ------viewer 2------------- */}
            <div className="flex gap-2 my-2 border-t border-gray-300 pt-3">
              <img src={cardImg} alt="" className="h-[48px] w-[48px]" />
              <div>
                <div className="flex">
                  <p className="text-[14px] font-medium">Isha Verma</p>
                  <LuDot className="text-gray-400 mt-1" />
                  <p className="text-[12px] text-gray-500 ">2nd</p>
                </div>
                <p className="text-[14px]">Aspiring Software Engineer</p>
                <div className="flex border border-gray-600 rounded-full p-1 mt-1 w-[110px]">
                  <TiLocationArrowOutline className="h-[16px] w-[16px] ml-2 mt-1" />
                  <p className="text-[16px] ml-1">Message</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 ">
              <p className="text-[16px] text-gray-600 font-medium text-center mt-1">
                Show all
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProfileFooter />
      </div>
    </div>
  );
};
export default Profile;
