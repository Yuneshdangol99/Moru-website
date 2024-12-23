import React, { useEffect, useState } from "react";
import moru from "../assets/moru.png";
import AddMoney from "../assets/AddMoney.svg";
import BankTransfer from "../assets/BankTransfer.svg";
import SendMoney from "../assets/SendMoney.svg";
import UserButtons from "./UserButtons";
import Signinpopup from "./FunctionsContainer/Signinpopup";
import CreateAcc from "./FunctionsContainer/CreateAcc";

function Downnav() {
  const [showpopup, setshowpopup] = useState(false);

  useEffect(() => {
    if (showpopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showpopup]);

  return (
    <>
      <div className="w-full px-10 pt-5 sm:px-[150px] sm:pt-5 sm:h-10">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <img
              src={moru}
              alt="logo"
              className="h-10 w-15 sm:h-10 sm:w-auto"
            />
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
            <UserButtons setshowpopup={setshowpopup} />
          </div>

          <div className="sm:hidden cursor-pointer">
            <p className="text-[13px]">
              <span className="text-[#c70038]">Sign In /</span>
              Register
            </p>
          </div>
        </div>
      </div>
      {showpopup && <Signinpopup onclose={() => setshowpopup(false)} />}
    </>
  );
}

export default Downnav;
