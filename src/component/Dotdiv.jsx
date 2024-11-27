import React from "react";

function Dotdiv() {
  return (
    <div className="sm:relative sm:p-10 sm:flex sm:items-center sm:justify-center sm:h-screen hidden">
      <div className="sm:absolute sm:bottom-40  sm:-left-10  w-40 h-40">
        <div className="grid grid-cols-12 grid-rows-12 gap-2 -z-10">
          {[...Array(12 * 12)].map((_, index) => (
            <div key={index} className="w-1 h-1 bg-red-500 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="sm:absolute sm:top-4 w-40 h-40">
        <div className="grid grid-cols-12 grid-rows-12 gap-2 -z-10">
          {[...Array(12 * 12)].map((_, index) => (
            <div key={index} className="w-1 h-1 bg-red-500 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dotdiv;
