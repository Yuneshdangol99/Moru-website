import React from "react";
import moru from "../assets/moru.png";
import AddMoney from "../assets/AddMoney.svg";
import BankTransfer from "../assets/BankTransfer.svg";
import SendMoney from "../assets/SendMoney.svg";
import UserButtons from "./UserButtons";

function Downnav() {
  return (
    <div className=" w-full px-[150px] flex items-center justify-between pt-5">
      {/* Logo Section */}
      <div>
        <img src={moru} alt="logo" className="h-11 w-auto" />
      </div>

      {/* Navigation Items Section */}
      <div className="flex gap-14 text-[16px]">
        {/* Add Money */}
        <div className="flex items-center gap-2">
          <img src={AddMoney} alt="" className="w-8 h-8" />
          <p className="font-Tondo">Add Money</p>
        </div>

        {/* Send & Request */}
        <div className="flex items-center gap-2">
          <img src={SendMoney} alt="" className="w-8 h-8" />
          <p className="font-Tondo">Send & Request</p>
        </div>

        {/* Bank Transfer */}
        <div className="flex items-center gap-2">
          <img src={BankTransfer} alt="" className="w-8 h-8" />
          <p className="font-Tondo">Bank Transfer</p>
        </div>

        {/* nav buttons  */}
        <UserButtons />
      </div>
    </div>
  );
}

export default Downnav;
