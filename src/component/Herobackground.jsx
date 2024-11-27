import React from "react";

function Herobackground() {
  return (
    <div className=" w-full h-64 bg-gradient-to-r from-[#c70038] to-[#c70038] flex justify-center items-center ">
      <div className="absolute w-full sm:w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,256L80,234.7C160,200,320,171,480,165.3C640,160,800,192,960,186.7C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Herobackground;
