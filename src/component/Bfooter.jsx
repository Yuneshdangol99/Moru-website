import React from "react";

const services = [
  {
    title: "Recharge & Pay Bills",
    items: [
      "Mobile Recharge",
      "Television Bill Payment",
      "Data & Voice Pack",
      "Electricity Bill Payment",
      "Landline Bill Payment",
      "Internet Bill Payment",
      "Flight",
      "Water Bill Payment",
      "Insurance Bill Payment",
      "Broker Payment",
      "Credit Card Payment",
      "Government Services",
    ],
  },
];

function Bfooter() {
  return (
    <div className="w-full px-14 bg-[#f2f2f2]">
      {services.map((service, index) => (
        <div key={index}>
          <h3 className="font-semibold font-Tondo">{service.title}</h3>
          <div className="grid sm:grid-cols-6 grid-cols-2 sm:gap-2 text-[14px] sm:text-[15px] mt-2">
            {service.items.map((_i, indx) => (
              <span key={indx}>{_i}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bfooter;
