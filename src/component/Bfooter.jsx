import React from "react";

function Bfooter() {
  return (
    <div className="flex  justify-center items-center  mt-7 flex-col font-Tondo">
      <div>
        <div>
          <h1 className="font-bold mb-3">Recharge & pay Bills</h1>
        </div>

        <div className="flex gap-14 text-[14px] mb-6 font-Tondo">
          <div>
            <p className="mb-3">Mobile Recharge</p>
            <p>Flight</p>
          </div>
          <div>
            <p className="mb-3">Television Bill Payment</p>
            <p>Water Bill Payment</p>
          </div>
          <div>
            <p className="mb-3">Data & Voice Pack</p>
            <p>Insurance Bill Payment</p>
          </div>
          <div>
            <p className="mb-3">Electricity Bill Payment</p>
            <p>Broker Payment</p>
          </div>
          <div>
            <p className="mb-3">Landline Bill Payment</p>
            <p>Credit Card Payment</p>
          </div>
          <div>
            <p className="mb-3">Internet Bill Payment</p>
            <p>Government Services</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bfooter;
