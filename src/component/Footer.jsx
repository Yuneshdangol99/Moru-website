import React from "react";
import cashback from "../assets/cashback.svg";
import merchant from "../assets/merchant.svg";
import ref from "../assets/ref.svg";
import help from "../assets/help.svg";
import Bfooter from "./Bfooter";

const image = [cashback, merchant, ref, help];

const title = [
  "Cashback & Offers",
  "Become a Merchant",
  "Refer & Earn",
  "24X7 Help & Support",
];
const text = [
  "Exciting and cash backoffer",
  "Register your business",
  "refer moru to your friends and get reward",
  "We would love to hear from you",
];

function Footer() {
  return (
    <>
      <div className="w-full sm:grid sm:grid-cols-2 grid grid-cols-1 px-10 sm:px-20 py-5 bg-[#f2f2f2]">
        <div className=" flex pt-5 gap-4">
          <div>
            <img src={cashback} alt="" className="w-[50px]" />
          </div>
          <div>
            <p className="font-bold font-Tondo">Cashback & Offers</p>
            <p>Exciting and cash backoffer</p>
          </div>
        </div>
        <div className="flex pt-5 gap-4">
          <div>
            <img src={ref} alt="" className="w-[50px]" />
          </div>
          <div>
            <p className="font-bold font-Tondo">Ref & Earn</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className=" flex pt-5 gap-4">
          <div>
            <img src={merchant} alt="" className="w-[50px]" />
          </div>
          <div>
            <p className="font-bold font-Tondo">Become a merchant</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className=" flex pt-5 gap-4">
          <div>
            <img src={help} alt="" className="w-[50px]" />
          </div>
          <div>
            <p className="font-bold font-Tondo">24x7 help & Support</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <Bfooter />
    </>
  );
}

export default Footer;
