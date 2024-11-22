import React from "react";

function Cfooter() {
  return (
    <div className="w-full h-auto bg-white  text-[#727171] flex items-center justify-center">
      <div className="flex flex-col">
        <div className="flex  gap-56 font-semibold font-Tondo">
          <h2>About us</h2>
          <h2>Carrer</h2>
          <h2>Go Digital Now</h2>
          <h2>Notices</h2>
        </div>

        <div className="text-center mt-6">
          <footer>
            <p>
              © 2024 Pay Nep Private Limited. All Rights Reserved.
              <span className="text-blue-700">Terms of Use</span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Cfooter;
