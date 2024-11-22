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
    <div className="h-auto w-[1250px]  flex mt-8 flex-col">
      <div>
        <h2 className="font-bold text-[20px] font-Tondo">Book On Moru</h2>
      </div>
      <div className="flex">
        {downimages.map((downimage, index) => (
          <div
            key={index}
            className="w-[156px] h-[150px]  border  flex justify-center items-center flex-col gap-1"
          >
            <img src={downimage} alt="" className="w-11" />
            <p className="font-Tondo">{downtext[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookOn;
