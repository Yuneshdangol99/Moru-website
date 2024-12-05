import React from "react";
import playstore from "../assets/playstore.png";
import apple from "../assets/apple.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Download() {
  return (
    <div className=" w-full bg-[#c70038] sm:flex sm:items-center sm:justify-between sm:px-56 gap-10 sm:py-10">
      <div className="sm:w-full ">
        <h1 className="sm:text-[30px] font-bold text-white font-Tondo text-center  text-[20px] mt-5">
          Download moru App to pay from anywhere
        </h1>
      </div>
      <div className="flex gap-4 w-full items-center justify-center mt-6 mb-6">
        <div className=" bg-black text-white rounded-lg flex items-center sm:w-[170px] px-2">
          <div className="mr-3">
            <img src={playstore} alt="" />
          </div>
          <div>
            <p className="font-light text-[12px]">GET IT ON</p>
            <p className="font-bold">Google Play</p>
          </div>
        </div>
        <div>
          <div className=" bg-black text-white rounded-lg flex items-center sm:w-[170px] px-2 ">
            <div className="mr-3">
              <img src={apple} alt="" />
            </div>
            <div>
              <p className="font-light text-[12px]">Download on the</p>
              <p className="font-bold">App Store</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 w-full justify-center items-center mb-5">
        <div className="w-[44px] h-[44px] bg-black flex items-center justify-center rounded-full">
          <FaFacebookF className="text-white text-[25px] " />
        </div>
        <div className="w-[44px] h-[44px] bg-black flex items-center justify-center rounded-full">
          <FaInstagram className="text-white text-[25px] " />
        </div>
        <div className="w-[44px] h-[44px] bg-black flex items-center justify-center rounded-full">
          <FaTwitter className="text-white text-[25px] " />
        </div>
      </div>
    </div>
  );
}

export default Download;
