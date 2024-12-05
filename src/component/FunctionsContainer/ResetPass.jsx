import React, { useEffect, useState } from "react";
import moru from "../../assets/moru.png";
import { RxCrossCircled } from "react-icons/rx";
import VerifySmS from "./VerifySmS";

function ResetPass() {
  const [responseData, setresponseData] = useState([]);
  const [error, seterror] = useState(null);
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(responseData));
  }, [responseData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://sandbox.api.pnpl.com.np/users/password-reset-code`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accesstype: "1",
          },
          body: JSON.stringify({ phone: phone }),
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error(
          "For more information, please contact us at 9801035348."
        );
      }
      const result = await response.json();
      setresponseData(result);
      setIsSubmitted(true);
    } catch (err) {
      seterror(err.message);
    }
  };

  if (isSubmitted) {
    return (
      <VerifySmS
        phone={phone}
        secret={responseData.secret}
        verification_code={responseData.verification_code}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 ">
      <div className="min-h-500px mt-24 max-w-[800px] flex shadow-2xl rounded-lg relative bg-white">
        <div className="max-w-[333px] bg-[#c70038] flex flex-col justify-center items-center py-32 px-20">
          <div className="h-[90px] w-[90px] bg-white rounded-full flex justify-center items-center ">
            <img src={moru} alt="" className="h-[30px] " />
          </div>
          <div className="text-center pt-10 text-white mx-auto">
            <h1 className="text-4xl font-Tondo font-bold mb-10">
              Welcome Back!
            </h1>
            <p className="text-[16px] font-medium">
              To keep connected with us please login your personal info
            </p>
          </div>
        </div>
        {/* Container 2  */}
        <div className="mt-20  mx-auto w-full px-6">
          <h2 className="text-[32px] text-center mb-6 font-Tondo font-bold mt-12">
            Reset Password
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              {error && (
                <div className="w-full px-3 py-2 bg-[#fff2f0] mb-2 rounded-lg">
                  {error}
                </div>
              )}
              <input
                name="phone"
                type="text"
                placeholder="Mobile Number*"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className="w-full p-[10px] rounded-lg bg-[#f2f2f2] font-semibold outline-none"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="w-full bg-[#c70038] p-3 rounded-lg font-bold text-white mt-3"
              >
                PROCEED
              </button>
              <button className="w-full bg-[#c70038] p-3 rounded-lg font-bold text-white mt-3">
                CANCEL
              </button>
            </div>
          </form>
          <RxCrossCircled className="text-3xl absolute right-4 top-3 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default ResetPass;
