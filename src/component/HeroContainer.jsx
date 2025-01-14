import React from "react";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";
import photo5 from "../assets/photo5.png";
import photo6 from "../assets/photo6.png";
import photo7 from "../assets/photo7.png";
import photo8 from "../assets/photo8.svg";
import HerosectionForm from "./HerosectionForm";

function HeroContainer() {
  const images = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
  ];

  const herotext = [
    "Topup",
    "LandLine",
    "Electricity",
    "Khanepani",
    "Flight",
    "Broker Payment",
    "Credit Card Payment",
    "More",
  ];

  return (
    <>
      <div className="w-[1250px] flex justify-center flex-col rounded-xl z-50 bg-white shadow-lg h-auto mt-8">
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-[156px] h-[150px] flex flex-col justify-center items-center border font-Tondo ${
                index === 0 ? "rounded-tl-lg" : ""
              } ${index === 7 ? "rounded-tr-lg" : ""}`}
            >
              <img src={image} alt="" className="w-11 h-11" />
              <span className="mt-3">{herotext[index]}</span>
            </div>
          ))}
        </div>
        <div>
          <HerosectionForm />
        </div>
      </div>
    </>
  );
}

export default HeroContainer;
