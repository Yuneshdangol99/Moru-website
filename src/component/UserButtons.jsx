import React from "react";
import people from "../assets/people.png";

function UserButtons() {
  return (
    <div className="flex bg-[#c70038] rounded-full gap-2 border border-[#c70038] overflow-hidden">
      <div className="flex justify-center items-center p-2  ">
        <img src={people} className="w-6" />
      </div>
      <div className=" flex items-center justify-center  px-6 bg-white">
        <p className="text-[#c70038]">Sign In</p>
      </div>
    </div>
  );
}

export default UserButtons;
