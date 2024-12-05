import React from "react";
import ajaya from "../assets/ajaya.png";
import anup from "../assets/anup.png";
import quotes from "../assets/quotes.png";

function Testamonials() {
  const testimonials = [
    {
      id: 1,
      name: "Anup Paudel",
      date: "Oct 17, 2022",
      platform: "Google Play Store",
      feedback:
        "Very good app. Minimal and clean UI. Smooth wallet load and fast transfer. Must have app to use on a daily basis.",
      image: anup,
    },
    {
      id: 2,
      name: "Ajaya Mushyakhow",
      date: "Mar 28, 2022",
      platform: "Google Play Store",
      feedback:
        "Using this for more than 8 months. It's very best, and cashback is awesome compared to esewa and imepay.",
      image: ajaya,
    },
  ];
  return (
    <div className=" py-12 w-full">
      <h2 className=" font-bold text-center mb-4 sm:text-[40px] font-Tondo">
        Help us make you happier
      </h2>
      <p className="text-center text-gray-600 mb-8 font-Tondo text-[16px] font-medium">
        We would love to hear how we can make you happier, smarter, richer,
        safer, and healthier.
      </p>

      {/* <div className="flex justify-center gap-12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-lg rounded-lg p-6 sm:relative sm:w-[500px] sm:h-[300px] "
          >
            <div className="absolute top-0 right-0 text-[25px] h-[60px] w-[60px] bg-[#f0f0f0] flex justify-center items-center">
              <img src={quotes} alt="" className="text-[20px]" />
            </div>
            <p className="text-gray-700 mb-6 mt-8">{testimonial.feedback}</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}`}
                className="w-12 h-12 rounded-full border border-pink-500"
              />
              <div>
                <h3 className="text-pink-600 font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {testimonial.date} on {testimonial.platform}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Testamonials;
