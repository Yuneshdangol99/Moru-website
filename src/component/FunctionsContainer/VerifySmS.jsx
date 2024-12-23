import React, { useEffect, useState } from "react";
import moru from "../../assets/moru.png";
import { RxCrossCircled } from "react-icons/rx";
import Changepass from "./Changepass";

function VerifySmS() {
  const [localData, setLocaldata] = useState(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [IsSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const getDatafromStorage = () => {
      const data = localStorage.getItem("data");
      const parseData = JSON.parse(data);
      console.log("localdata", localData);
      setLocaldata(parseData?.data);
    };
    getDatafromStorage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://sandbox.api.pnpl.com.np/users/verify-password-reset-code`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accesstype: "1",
          },
          body: JSON.stringify({
            secret: localData.secret,
            code: code,
          }),
        }
      );
      console.log("response", response);
      if (!response.ok) {
        const ErrorData = await response.json();
        setError(ErrorData.validation_errors.code);
        console.log("error", error);
        return;
      }
      const result = await response.json();
      setIsSubmitted(true);
    } catch (err) {
      setError("Invalid code reset code");
    }
  };

  if (IsSubmitted) {
    return <Changepass />;
  }

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 ">
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
              Enter your personal details and start journey with us
            </p>
          </div>
        </div>

        {/* Container 2  */}
        <div className="mt-20  mx-auto w-full px-6">
          <h2 className="text-[32px] text-center mb-6 font-Tondo font-bold mt-12">
            Verify SMS Code
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="p-[6px] font-semibold border mb-1">
              <p>
                verification code :
                {localData ? localData.verification_code : "loading.."}
              </p>
            </div>
            <input
              type="text"
              value={code}
              onChange={() => setCode(e.target.value)}
              placeholder="Enter verification code sent to your phone number"
              className="w-full bg-[#f2f2f2] outline-none p-[10px] mt-1"
            />
            {error && <div className="text-red-600">{error}</div>}
            <div className="flex gap-2">
              <button
                type="submit"
                className="w-full bg-[#c70038] p-3 rounded-lg font-bold text-white mt-3"
              >
                PROCEED
              </button>
              <button className="w-full bg-[#c70038] p-3 rounded-lg font-bold text-white mt-3">
                RESEND
              </button>
            </div>
          </form>
          <RxCrossCircled className="text-3xl absolute right-4 top-3 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default VerifySmS;
