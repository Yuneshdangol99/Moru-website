import React from "react";
import rightarrow from "../assets/rightarrow.png";

function Faq() {
  return (
    <div className="bg-gray-100 w-full h-auto">
      <h2 className="sm:text-[40px]  font-bold text-center mb-6 mt-6 font-Tondo text-[20px]">
        Frequently Asked Questions
      </h2>
      <div className="sm:flex sm:justify-center sm:items-center sm:gap-3 mb-9 text-[13px] sm:text-[15px] px-5">
        <div className="flex flex-col gap-3">
          <div className="h-[65px] sm:w-[558px]  rounded-lg border bg-white p-6 font-semibold flex justify-between items-center font-Tondo">
            <h1>What is Moru ?</h1>
            <img src={rightarrow} alt="" className="h-3" />
          </div>
          <div className="h-[65px] sm:w-[558px] rounded-lg border bg-white p-6 font-semibold flex justify-between items-center">
            <h1>Do I need to pay any charge?</h1>
            <img src={rightarrow} alt="" className="h-3" />
          </div>
          <div className="h-[65px] sm:w-[558px] rounded-lg border bg-white p-6 font-semibold flex justify-between items-center">
            <h1>What is the registration process?</h1>
            <img src={rightarrow} alt="" className="h-3" />
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-3 sm:mt-0">
          <div className="h-[65px] sm:w-[558px] rounded-lg border bg-white p-6 font-semibold flex justify-between items-center">
            <h1>why moru ?</h1>
            <img src={rightarrow} alt="" className="h-3" />
          </div>
          <div className="h-[65px] sm:w-[558px] rounded-lg border bg-white p-6 font-semibold flex justify-between items-center">
            <h1>How can I be a user of Moru?</h1>
            <img src={rightarrow} alt="" className="h-3" />
          </div>
          <div className="h-[65px] sm:w-[558px] rounded-lg border bg-white p-6 font-semibold flex justify-between items-center">
            <h1>How do I load money in Moru wallet?</h1>
            <img src={rightarrow} alt="" className="h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
