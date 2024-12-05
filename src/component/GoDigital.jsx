import React from "react";
import video from "../assets/video.mp4";

function GoDigital() {
  return (
    <div className="mt-8 w-full bg-[#c70038] flex flex-col justify-center items-center  h-auto ">
      <div className="text-white mb-6 text-center px-5 mt-5">
        <h1 className="sm:text-[40px] text-[20px] font-bold font-Tondo">
          Go Digital Now
        </h1>
        <p className="text-[15px]">
          With Moru you have the best way to begin your digital life.
        </p>
      </div>
      <div className="sm:w-[853px] sm:max-w-3xl mt-6 sm:h-[480px] w-auto h-auto px-3 mb-5">
        <video className="w-full h-auto shadow-lg" controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default GoDigital;
