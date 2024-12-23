import React, { useState } from "react";
import people from "../assets/people.png";
import Counter from "./Count/Counter";

function UserButtons({ setshowpopup }) {
  return (
    <div
      onClick={() => setshowpopup(true)}
      className="relative flex bg-[#c70038] rounded-full gap-2 border border-[#c70038]  cursor-pointer z-10 overflow-hidden"
    >
      <div className="flex justify-center items-center p-2  ">
        <img src={people} className="w-6" />
      </div>
      <div className=" flex items-center justify-center  px-6 bg-white z-10">
        <p className="text-[#c70038]">Sign In</p>
      </div>

      <div className="absolute right-0 w-4 h-5 bg-[#c70038] z-40 text-center rounded-full font-bold">
        <Counter />
      </div>
    </div>
  );
}

export default UserButtons;
