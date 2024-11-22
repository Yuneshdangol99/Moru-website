import React from "react";

function HerosectionForm() {
  return (
    <div className="flex justify-center items-center gap-3 mt-14 mb-14">
      <input
        type="text"
        className="w-[375px] h-11 border-[#a3a2a2] border rounded-lg px-2 py-1 font-medium outline-none"
        placeholder="Enter Mobile Number"
      />
      <input
        type="text"
        className="w-[375px] h-11 border-[#a3a2a2] border rounded-lg px-2 py-1 font-medium outline-none"
        placeholder="Enter Amount"
      />
      <button className="bg-[#c70038] w-[375px] h-11 text-white font-medium rounded-lg font-Tondo">
        PROCEED TO PAYMENT
      </button>
    </div>
  );
}

export default HerosectionForm;
