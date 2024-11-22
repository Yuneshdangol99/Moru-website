import React from "react";
import { IoEarthOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import announced from "../assets/announced.svg";

function Topnav() {
  return (
    <div className="w-full h-9 border-[#a3a2a2] border-b pt-2">
      <div className="flex justify-between px-[150px] items-center">
        <div className="flex gap-1 items-center">
          <img src={announced} alt="" className="w-6" />
          <p className="text-[#c70038] text-[12px]">Get Your Moru Wallet</p>
        </div>
        <div>
          <ul className="flex gap-4 text-[13px] text-[#5d5e5e]">
            <li className="border-r">
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
