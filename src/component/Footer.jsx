import React from "react";
import cashback from "../assets/cashback.svg";
import merchant from "../assets/merchant.svg";
import ref from "../assets/ref.svg";
import help from "../assets/help.svg";
import Bfooter from "./Bfooter";

function Footer() {
  return (
    <div className="w-full bg-[#f3f3f3] ">
      <div className="flex justify-between items-center px-60 py-10 border-b font-Tondo">
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <div>
              <img src={cashback} alt="" className="w-[50px] h-[50px]" />
            </div>
            <div>
              <h2 className="font-bold">Cashback & offer</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src={merchant} alt="" className="w-[50px] h-[50px]" />
            </div>
            <div>
              <h2 className="font-bold">Become a Merchant</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <div>
              <img src={ref} alt="" className="w-[50px] h-[50px]" />
            </div>
            <div>
              <h2 className="font-bold">refer & Earn</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src={help} alt="" className="w-[50px] h-[50px]" />
            </div>
            <div>
              <h2 className="font-bold">help and support </h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <Bfooter />
    </div>
  );
}

export default Footer;
