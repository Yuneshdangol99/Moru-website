import React from "react";
import kitabyatra from "../assets/kitabyatra.png";
import starttotell from "../assets/starttotell.png";

const images = [kitabyatra, starttotell];
const text = ["kitab Yatra", "Start to tell"];

function FreshProduct() {
  return (
    <div className="flex flex-col w-[90%] sm:w-[1250px]">
      <div>
        <h2 className="font-bold sm:text-[20px] font-Tondo text-[15px]">
          Fresh Product
        </h2>
      </div>
      <div className="overflow-auto no-scrollbar">
        <ul className="flex gap-5">
          {images.map((image, index) => (
            <li
              key={index}
              className="w-[180px] h-[180px] bg-blue-900 flex flex-col items-center justify-center shrink-0 rounded-lg"
            >
              <div className="h-16 w-16 bg-white rounded-full flex justify-center items-center">
                <img src={image} alt="" className="w-12" />
              </div>
              <p className="text-white">{text[index]}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FreshProduct;
