import React from "react";
import kitabyatra from "../assets/kitabyatra.png";
import starttotell from "../assets/starttotell.png";

function FreshProduct() {
  return (
    <div className="w-[1250px]">
      <h2 className="font-bold text-[20px] font-Tondo">Fresh Product</h2>
      <div className="flex gap-4">
        <div className="w-[180px] h-[180px] bg-blue-900 rounded-lg flex justify-center items-center flex-col">
          <div className="w-[65px] h-[65px] bg-white flex justify-center items-center rounded-full">
            <img src={kitabyatra} alt="" className="w-[48px] h-[48px]" />
          </div>
          <p className="text-white">Topup</p>
        </div>
        <div className="w-[180px] h-[180px] bg-blue-900 rounded-lg flex justify-center items-center flex-col">
          <div className="w-[65px] h-[65px] bg-white flex justify-center items-center rounded-full">
            <img src={starttotell} alt="" className="w-[48px] h-[48px]" />
          </div>
          <p className="text-white">Start to tell</p>
        </div>
      </div>
    </div>
  );
}

export default FreshProduct;
