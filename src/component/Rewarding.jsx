import React from "react";
import m1 from "../assets/m1.svg";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.svg";
import m4 from "../assets/m1.svg";
import m5 from "../assets/m1.svg";
import m6 from "../assets/m1.svg";

function Rewarding() {
  const mimage = [m1, m2, m3, m4, m5, m6];

  const mtext = [
    "Payment",
    "Cards",
    "Shopping",
    "Wallet",
    "Discounts",
    "Support",
  ];

  return (
    <div className="mt-24">
      <div className="flex flex-col items-center">
        <p className="text-[#666666] font-Tondo">
          MANAGE YOUR MONEY QUICKLY AND SECURELY WITH A DIGITAL WALLET USED BY
          MILLIONS
        </p>
        <h1 className="text-[40px] font-bold font-Tondo">
          Digital Wallets have never been so rewarding
        </h1>
      </div>
      <div className="flex max-w-[1250px] gap-7">
        {mimage.map((mimages, index) => (
          <div className="w-[180px] h-[180px] rounded-lg mt-4 flex justify-center items-center bg-[#dedede]">
            <img src={mimages} alt="" className="h-[70px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rewarding;
