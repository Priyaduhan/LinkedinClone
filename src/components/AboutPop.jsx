import React, { useEffect } from "react";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { changeBio } from "../features/bioSlice";
import {
  dispatchChangeBio,
  dispatchChangeHandlePriya,
} from "../features/reduxDispatch";

const AboutPop = ({ showDialog, setShowDialog }) => {
  //   const [about, setabout] = useState("");
  const dispatch = useDispatch();
  const { value, priyaId } = useSelector((state) => state.bio);

  const handleAbout = (e) => {
    // setbio(e.target.value);
    dispatchChangeBio(dispatch, e.target.value);
    // dispatch(changeBio(e.target.value));
    console.log(e.target.value);
  };
  const handlePriyaIdinitalState = () => {
    dispatchChangeHandlePriya(dispatch, 5);
  };

  console.log("redux store value", value, priyaId);

  useEffect(() => {
    dispatchChangeHandlePriya(dispatch, 5);
  }, []);

  return (
    <div className="fixed inset-0  bg-gray  bg-opacity-50 backdrop-blur-[10px] z-20">
      <div className=" flex justify-center bg-white h-[500px] rounded-md shadow-2xl w-[700px] z-20 mt-30 mx-auto">
        <div className="mt-3">
          <p className="border-b-1 border-gray-400 mb-5 font-medium text-xl">
            Edit About
          </p>
          <p onClick={handlePriyaIdinitalState}>priya id update</p>
          <textarea
            name=""
            id=""
            onChange={handleAbout}
            className="border-1 h-[300px] w-[600px] rounded-md border-gray-400"
            value={value}
          ></textarea>
          <br />
          <button
            className="border w-[70px] h-[30px] rounded-md bg-[#004182] text-white font-medium"
            onClick={() => setShowDialog(false)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPop;

