import React from "react";
import pkorganic from "../assets/pkorganic.png";
import lumbinitek from "../assets/lumbinitek.png";

const image = [pkorganic, lumbinitek];

const text = ["Pk organic & wellness", "Lumbini Tekwondo Assocation"];

function Exclusive() {
  return (
    <div className="flex flex-col w-[90%] sm:w-[1250px]">
      <div>
        <h2 className="font-bold sm:text-[20px] font-Tondo text-[15px]">
          Exclusive deals
        </h2>
      </div>
      <div className="overflow-auto no-scrollbar">
        <ul className="flex gap-5">
          {image.map((image, index) => (
            <li className="w-[180px] h-[180px] bg-blue-900 flex flex-col items-center justify-center shrink-0 rounded-lg">
              <div className="h-16 w-16 bg-white rounded-full flex justify-center items-center overflow-hidden">
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

export default Exclusive;
