import React from "react";
import Governmentrevenu from "../assets/Governmentrevenu.png";
import trafficepolice from "../assets/trafficepolice.png";
import loksewa from "../assets/loksewa.png";
import societyfund from "../assets/societyfund.png";

const images = [Governmentrevenu, trafficepolice, loksewa, societyfund];

const text = [
  "Government Revenu Payment",
  "Traffic police fine payment",
  "Loksewa",
  "Social security Fund",
];

function GovernmentPay() {
  return (
    <div className="flex flex-col w-[90%] sm:w-[1250px]">
      <div>
        <h2 className="font-bold sm:text-[20px] font-Tondo text-[15px]">
          Government Payment
        </h2>
      </div>
      <div className="overflow-auto no-scrollbar">
        <ul className="flex gap-5">
          {images.map((image, index) => (
            <li className="w-[180px] h-[180px] bg-blue-900 flex flex-col items-center justify-center shrink-0 rounded-lg p-6">
              <div className="h-16 w-16 bg-white rounded-full flex justify-center items-center">
                <img src={image} alt="" className="w-12" />
              </div>
              <p className="text-white text-center">{text[index]}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GovernmentPay;
