import React from "react";
import pkorganic from "../assets/pkorganic.png";
import lumbinitek from "../assets/lumbinitek.png";

function Exclusive() {
  return (
    <div className="w-[1250px]">
      <h2 className="font-bold text-[20px] font-Tondo">Exclusive Product</h2>
      <div className="flex gap-4">
        <div className="w-[180px] h-[180px] bg-blue-900 rounded-lg flex justify-center items-center flex-col">
          <div className="w-[65px] h-[65px] bg-white flex justify-center items-center rounded-full overflow-hidden">
            <img src={pkorganic} alt="" className="w-[48px] h-[48px]" />
          </div>
          <p className="text-white">Topup</p>
        </div>
        <div className="w-[180px] h-[180px] bg-blue-900 rounded-lg flex justify-center items-center flex-col">
          <div className="w-[65px] h-[65px] bg-white flex justify-center items-center rounded-full">
            <img
              src={lumbinitek}
              alt=""
              className="w-[48px] h-[48px] overflow-hidden"
            />
          </div>
          <p className="text-white">Start to tell</p>
        </div>
      </div>
    </div>
  );
}

export default Exclusive;
