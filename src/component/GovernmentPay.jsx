import React from "react";
import Governmentrevenu from "../assets/Governmentrevenu.png";
import trafficepolice from "../assets/trafficepolice.png";
import loksewa from "../assets/loksewa.png";
import societyfund from "../assets/societyfund.png";

function GovernmentPay() {
  return (
    <div className="w-[1250px]">
      <h2 className="font-bold text-[20px] font-Tondo">Government Payment</h2>
      <div className="flex gap-4">
        <div className="w-[180px] h-[180px] bg-blue-900 rounded-lg flex justify-center items-center flex-col">
          <div className="w-[65px] h-[65px] bg-white flex justify-center items-center rounded-full">
            <img src={Governmentrevenu} alt="" className="w-[48px] h-[48px]" />
          </div>
          <p className="text-white">Topup</p>
        </div>
        <div className="w-[180px] h-[180px] bg-blue-900 rounded-lg flex justify-center items-center flex-col">
          <div className="w-[65px] h-[65px] bg-white flex justify-center items-center rounded-full">
            <img src={trafficepolice} alt="" className="w-[48px] h-[48px]" />
          </div>
          <p className="text-white">WorldLink</p>
        </div>
        <div className="w-[180px] h-[180px] bg-blue-900 rounded-lg flex justify-center items-center flex-col">
          <div className="w-[65px] h-[65px] bg-white flex justify-center items-center rounded-full">
            <img src={loksewa} alt="" className="w-[48px] h-[48px]" />
          </div>
          <p className="text-white">DishHome</p>
        </div>
        <div className="w-[180px] h-[180px] bg-blue-900 rounded-lg flex justify-center items-center flex-col">
          <div className="w-[65px] h-[65px] bg-white flex justify-center items-center rounded-full">
            <img src={societyfund} alt="" className="w-[48px] h-[48px]" />
          </div>
          <p className="text-white">DishHome</p>
        </div>
      </div>
    </div>
  );
}

export default GovernmentPay;
