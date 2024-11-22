import React from "react";
import send from "../assets/send.png";
import playstore from "../assets/playstore.png";
import apple from "../assets/apple.png";

function HeroDownloads() {
  return (
    <div className="w-[1250px] z-50 rounded-lg flex justify-between items-center shadow-lg h-auto p-8 ">
      <div>
        <h2 className="text-[20px] font-bold font-Tondo">
          Download Moru App to Pay from Anywhere
        </h2>
        <p className="text-[15px] font-medium text-[#878787] font-Tondo">
          Enter Mobile Number to get download Link on Mobile
        </p>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter Mobile Number"
          className="px-3 py-2 border border-[#c9c7c7] outline-none font-semibold"
        />
        <div className="px-3 py-2 bg-[#c70038] rounded-tr-lg rounded-br-lg">
          <img src={send} alt="" className="text-white text-[20px]" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="px-8 py-1  bg-black text-white rounded-lg flex items-center">
          <div className="mr-3">
            <img src={playstore} alt="" />
          </div>
          <div>
            <p className="font-light text-[12px]">GET IT ON</p>
            <p className="font-bold">Google Play</p>
          </div>
        </div>
        <div className="px-8 py-1  bg-black text-white rounded-lg flex items-center">
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
  );
}

export default HeroDownloads;
