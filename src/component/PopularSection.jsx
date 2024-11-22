import React from "react";
import topup from "../assets/topup.png";
import wifi from "../assets/wifi.png";
import dishhome from "../assets/dishhome.png";

function PopularSection() {
  return (
    <div className="w-[1250px]">
      <h2 className="font-bold text-[20px] font-Tondo">Popular Offer</h2>
      <div className="flex gap-4">
        <div className="w-[180px] h-[180px] bg-blue-900 rounded-lg flex justify-center items-center flex-col">
          <div className="w-[65px] h-[65px] bg-white flex justify-center items-center rounded-full">
            <img src={topup} alt="" className="w-[48px] h-[48px]" />
          </div>
          <p className="text-white">Topup</p>
        </div>
        <div className="w-[180px] h-[180px] bg-blue-900 rounded-lg flex justify-center items-center flex-col">
          <div className="w-[65px] h-[65px] bg-white flex justify-center items-center rounded-full">
            <img src={wifi} alt="" className="w-[48px] h-[48px]" />
          </div>
          <p className="text-white">WorldLink</p>
        </div>
        <div className="w-[180px] h-[180px] bg-blue-900 rounded-lg flex justify-center items-center flex-col">
          <div className="w-[65px] h-[65px] bg-white flex justify-center items-center rounded-full">
            <img src={dishhome} alt="" className="w-[48px] h-[48px]" />
          </div>
          <p className="text-white">DishHome</p>
        </div>
      </div>
    </div>
  );
}

export default PopularSection;
