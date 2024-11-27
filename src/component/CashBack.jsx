import React from "react";
import RecievedMoney from "../assets/RecievedMoney.svg";
import topup2 from "../assets/topup2.svg";
import morumall2 from "../assets/morumall2.svg";
import Dotdiv from "./Dotdiv";

function CashBack() {
  return (
    <>
      <div className="w-full sm:w-[1250px] sm:h-[588px] bg-[#dedede] rounded-lg sm:relative sm:mb-[30px] sm:mt-[30px]">
        {/* receive payment */}
        <div className="w-[270px] h-[294px] rounded-lg sm:absolute sm:top-[240px] sm:left-[57px] p-6 bg-white z-40 mt-10 m-auto">
          <div className="flex justify-center items-center h-[80px] w-[80px] bg-[#ffe7e7] rounded-2xl mb-5 ">
            <img src={RecievedMoney} alt="" className="w-11" />
          </div>
          <h1 className="sm:text-xl font-bold font-Tondo text-lg">
            Receive Payment
          </h1>
          <p className="text-[#7a7979]">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* Make Payment */}
        <div className="w-[270px] h-[294px]  rounded-lg sm:absolute sm:top-[80px] sm:left-[356px] p-6 bg-white shadow-lg z-40 m-auto mt-5 mb-5">
          <div className="flex justify-center items-center h-[80px] w-[80px] bg-[#ffe7e7] rounded-lg mb-5 ">
            <img src={topup2} alt="" className="w-8" />
          </div>
          <h1 className="sm:text-xl font-bold font-Tondo text-lg">
            Make Payment
          </h1>
          <p className="text-[#7a7979]">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* Booking */}
        <div className="w-[270px] h-[294px] rounded-lg sm:absolute sm:top-[399px] sm:left-[356px] bg-white shadow-lg p-6 m-auto mb-5">
          <div className="flex justify-center items-center h-[80px] w-[80px] bg-[#ffe7e7] rounded-lg mb-5">
            <img src={morumall2} alt="" className="w-11" />
          </div>
          <h1 className="sm:text-xl font-bold font-Tondo text-lg">Booking</h1>
          <p className="text-[#7a7979]">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* this is title part  */}

        <div>
          {" "}
          <div className="sm:absolute sm:top-[166px] sm:left-[657px] text-center mb-5">
            <h1 className="sm:text-[40px] font-bold font-Tondo text-[25px]">
              Unlimited cash back with <br /> no category restrictions
            </h1>
            <p className="sm:text-[17px] font-Tondo text-[#5d5d5d] text-[13px]">
              Enjoy unlimited cash back with no restriction.
            </p>
            <button className="px-16 py-3 bg-red-700 mt-4 rounded-full text-white font-semibold text-[15px] sm:text-[18px]">
              Learn More
            </button>
          </div>
        </div>

        <Dotdiv />
      </div>
    </>
  );
}

export default CashBack;

// 14
