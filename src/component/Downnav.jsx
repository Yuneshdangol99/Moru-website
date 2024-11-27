import React from "react";
import moru from "../assets/moru.png";
import AddMoney from "../assets/AddMoney.svg";
import BankTransfer from "../assets/BankTransfer.svg";
import SendMoney from "../assets/SendMoney.svg";
import UserButtons from "./UserButtons";

function Downnav() {
  return (
    <div className="w-full px-10 pt-5 sm:px-[150px] sm:pt-5 sm:h-10">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <img src={moru} alt="logo" className="h-10 w-15 sm:h-10 sm:w-auto" />
        </div>

        {/* Navigation Items Section */}
        <div className="hidden  md:flex md:gap-14 md:text-[16px]">
          {/* Add Money */}
          <div className="flex items-center gap-2">
            <img src={AddMoney} alt="" className="w-[30px] h-[30px]" />
            <p className="font-Tondo">Add Money</p>
          </div>

          {/* Send & Request */}
          <div className="flex items-center gap-2">
            <img src={SendMoney} alt="" className="w-[30px] h-[30px]" />
            <p className="font-Tondo">Send & Request</p>
          </div>

          {/* Bank Transfer */}
          <div className="flex items-center gap-2">
            <img src={BankTransfer} alt="" className="w-[30px] h-[30px]" />
            <p className="font-Tondo">Bank Transfer</p>
          </div>

          {/* nav buttons  */}
          <UserButtons />
        </div>

        <div className="hidden sm:block">
          <p className="text-[13px]">
            <span className="text-[#c70038]">Sign In /</span>
            Register
          </p>
        </div>
      </div>
    </div>
  );
}

export default Downnav;
