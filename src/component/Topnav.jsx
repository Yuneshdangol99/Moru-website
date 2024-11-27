import React from "react";
import { IoEarthOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import announced from "../assets/announced.svg";

function Topnav() {
  return (
    <div className="w-auto h-auto border-[#a3a2a2] border-b pt-2 sm:h-9">
      <div className="flex justify-between px-10 items-center sm:px-[150px]">
        <div className="flex gap-1 items-center">
          <img src={announced} alt="" className="sm:w-8 w-7 " />
          <p className="text-[#c70038] text-[11px] sm:text-[12px]">
            Get Your Moru Wallet
          </p>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-4 text-[13px] text-[#5d5e5e]">
            <li>
              <a href="#">Charges</a>
            </li>
            <li>
              <a href="#">Grievances</a>
            </li>
            <li>
              <a href="#">NRB Gunaso Portal</a>
            </li>
            <li>
              <a href="#">24x7</a>
            </li>
            <li className="flex items-center gap-1">
              <a href="#">
                <IoEarthOutline />
              </a>
              EN
              <FaAngleDown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
