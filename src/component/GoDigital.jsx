import React from "react";
import video from "../assets/video.mp4";

function GoDigital() {
  return (
    <div className="mt-8 w-full bg-[#c70038] flex flex-col justify-center items-center py-8">
      <div className="text-white mb-6 text-center">
        <h1 className="text-[40px] font-bold font-Tondo">Go Digital Now</h1>
        <p>With Moru you have the best way to begin your digital life.</p>
      </div>
      <div className="relative w-[853px] max-w-3xl mt-6 h-[480px]">
        <video className="w-full h-auto shadow-lg" controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default GoDigital;
