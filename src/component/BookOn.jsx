import React from "react";
import photox1 from "../assets/photox1.svg";
import photox2 from "../assets/photox2.svg";
import photox3 from "../assets/photox3.svg";
import photox4 from "../assets/photox4.png";
import photox5 from "../assets/photox5.svg";
import photox6 from "../assets/photox6.png";
import photox7 from "../assets/photox7.png";
import photox8 from "../assets/photox8.png";

function BookOn() {
  const downimages = [
    photox1,
    photox2,
    photox3,
    photox4,
    photox5,
    photox6,
    photox7,
    photox8,
  ];

  const downtext = [
    "Fight",
    "Bus",
    "Movies",
    "Cable Car",
    "Insurance",
    "schools",
    "Tours",
    "Antivirus",
  ];

  return (
    <>
      <div className="w-[90%]  sm:max-w-7xl">
        <div>
          <h2 className="font-bold sm:text-[20px] font-Tondo text-[15px]">
            Book on moru
          </h2>
        </div>

        {/* icon and text container */}
        <div className="overflow-auto scrollbar-hide">
          <ul className="flex w-full">
            {downimages.map((image, index) => (
              <li key={index}>
                <div className="w-[160px] h-[160px] flex flex-col justify-center items-center border ">
                  <img src={image} alt="" className="w-9" />
                  <p>{downtext[index]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default BookOn;
