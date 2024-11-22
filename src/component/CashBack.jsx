import React from "react";
import cash1 from "../assets/cash1.png";
import RecievedMoney from "../assets/RecievedMoney.svg";
import topup2 from "../assets/topup2.svg";
import morumall2 from "../assets/morumall2.svg";
import Dotdiv from "./Dotdiv";

function CashBack() {
  return (
    <div className="w-[1250px] h-[588px] bg-[#dedede] rounded-lg relative mb-[30px] mt-[30px]">
      <div className="w-[270px] h-[294px] shadow-lg rounded-lg absolute top-[240px] left-[57px] p-6 bg-white z-40">
        <div className="flex justify-center items-center h-[80px] w-[80px] bg-[#ffe7e7] rounded-lg mb-5">
          <img src={RecievedMoney} alt="" className="w-11" />
        </div>
        <h1 className="text-xl font-bold font-Tondo">Receive Payment</h1>
        <p className="text-[#7a7979]">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="w-[270px] h-[294px]  rounded-lg absolute top-[80px] left-[356px] p-6 bg-white shadow-lg z-40">
        <div className="flex justify-center items-center h-[80px] w-[80px] bg-[#ffe7e7] rounded-lg mb-5 ">
          <img src={topup2} alt="" className="w-8" />
        </div>
        <h1 className="text-xl font-bold font-Tondo">Make Payment</h1>
        <p className="text-[#7a7979]">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="w-[270px] h-[294px] rounded-lg absolute top-[399px] left-[356px] bg-white shadow-lg p-6">
        <div className="flex justify-center items-center h-[80px] w-[80px] bg-[#ffe7e7] rounded-lg mb-5">
          <img src={morumall2} alt="" className="w-11" />
        </div>
        <h1 className="text-xl font-bold font-Tondo">Booking</h1>
        <p className="text-[#7a7979]">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="absolute top-[166px] left-[657px]">
        <h1 className="text-[40px] font-bold font-Tondo">
          Unlimited cash back with <br /> no category restrictions
        </h1>
        <p className="text-[17px] ">
          Enjoy unlimited cash back with no restriction.
        </p>
        <button className="px-16 py-3 bg-red-700 mt-4 rounded-full text-white font-semibold">
          Learn More
        </button>
      </div>
      <Dotdiv />
    </div>
  );
}

export default CashBack;

// 14
