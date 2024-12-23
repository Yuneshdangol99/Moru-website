import React, { useEffect, useState } from "react";
import moru from "../../assets/moru.png";
import { RxCrossCircled } from "react-icons/rx";
import VerifySmS from "./VerifySmS";
import Signinpopup from "./Signinpopup";

function ResetPass({ onclose, showpopup }) {
  const [responseData, setresponseData] = useState("");
  const [error, seterror] = useState(null);
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

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

      const result = await response.json();
      if (response.ok) {
        setresponseData(result);
        seterror(null);
        setIsSubmitted(true);
      } else {
        seterror(result.validation_errors.phone[0] || result.error_message);
        console.log(error);
      }
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

  const CancelButtonclicked = () => {
    setIsCancel(true);
  };

  if (isCancel) {
    return <Signinpopup />;
  }

  return (
    <>
      <div className="fixed inset-0 bg-opacity-30 backdrop-blur-0 flex justify-center items-center z-50 ">
        <div className="min-h-[500px] mt-24 w-[800px] flex shadow-2xl rounded-lg relative bg-white">
          <div className="bg-[#c70038] flex flex-col justify-center items-center w-[500px] rounded-tl-lg rounded-bl-lg">
            <div className="h-[90px] w-[90px] bg-white rounded-full flex justify-center items-center mb-6">
              <img src={moru} alt="" className="h-[30px]" />
            </div>
            <div className="text-center pt-10 text-white w-[100%]">
              <h1 className="text-[32px] font-Tondo font-bold mb-6">
                Welcome Back!
              </h1>
              <p className="text-[16px] font-medium px-5">
                To keep connected with us please login your personal info
              </p>
            </div>
          </div>
          {/* Container 2  */}
          <div className="mt-20  mx-auto w-full px-6 max-w-2xl">
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
              <div className="flex gap-1">
                <button
                  type="submit"
                  className="w-full bg-[#c70038] p-3 rounded-lg font-bold text-white mt-3"
                >
                  PROCEED
                </button>
                <button
                  className="w-full bg-[#c70038] p-3 rounded-lg font-bold text-white mt-3"
                  onClick={CancelButtonclicked}
                >
                  CANCEL
                </button>
              </div>
            </form>
            <RxCrossCircled
              className="text-3xl absolute right-4 top-3 cursor-pointer"
              onClick={onclose}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPass;
