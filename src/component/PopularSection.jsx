import React from "react";
import topup from "../assets/topup.png";
import wifi from "../assets/wifi.png";
import dishhome from "../assets/dishhome.png";

const images = [topup, wifi, dishhome];

const text = ["Topup", "Worldink", "Dishhome"];

function PopularSection() {
  return (
    <>
      <div className="flex flex-col w-[90%] sm:w-[1250px]">
        <div>
          <h2 className="font-bold sm:text-[20px] font-Tondo text-[15px]">
            Popular Offer
          </h2>
        </div>
        <div className="overflow-auto">
          <ul className="flex gap-5">
            {images.map((image, index) => (
              <li className="w-[180px] h-[180px] bg-blue-900 flex flex-col items-center justify-center shrink-0 rounded-lg">
                <div className="h-16 w-16 bg-white rounded-full flex justify-center items-center">
                  <img src={image} alt="" className="w-12" />
                </div>
                <p className="text-white">{text[index]}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default PopularSection;
