import React from "react";
import playstore from "../assets/playstore.png";
import apple from "../assets/apple.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Download() {
  return (
    <div className="h-[200px] w-full bg-[#c70038] flex items-center justify-between px-56">
      <div>
        <h1 className="text-[30px] font-bold text-white font-Tondo">
          Download moru App to <br /> pay from anywhere
        </h1>
      </div>
      {/* icon */}
      <div className="flex gap-4">
        <div className=" bg-black text-white rounded-lg flex items-center w-[170px] px-2">
          <div className="mr-3">
            <img src={playstore} alt="" />
          </div>
          <div>
            <p className="font-light text-[12px]">GET IT ON</p>
            <p className="font-bold">Google Play</p>
          </div>
        </div>
        <div>
          <div className=" bg-black text-white rounded-lg flex items-center w-[170px] px-2 py-1">
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
      {/* social media icon  */}
      <div className="flex gap-3">
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
