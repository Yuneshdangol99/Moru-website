import React, { useEffect, useState } from "react";
import moru from "../../assets/moru.png";
import { RxCrossCircled } from "react-icons/rx";

function VerifySmS({ phone, verification_code }) {
  const [localData, setLocaldata] = useState(null);
  const [verificationcode, setVerificationcode] = useState("");

  useEffect(() => {
    const getDatafromStorage = () => {
      const data = localStorage.getItem("data");
      const parseData = JSON.parse(data);
      setLocaldata(parseData?.data);
    };
    getDatafromStorage();
  }, []);

  const renderVerificationCode = () => {
    if (!localData || !localData.verification_code) {
      return <p>Loading verification code...</p>;
    }
    return <h1>Verification code: {localData.verification_code}</h1>;
  };

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
          body: JSON.stringify({
            phone: phone,
            secret: localData.secret,
            code: verification_code,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("failed to fetch data");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

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
            Verify SMS Code
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="px-5 py-1 border border-[#f2f2f2]">
              {renderVerificationCode()}
            </div>
            <input
              type="text"
              value={verificationcode}
              onChange={(e) => setVerificationcode(e.target.value)}
              placeholder="Enter verification code sent to your phone number"
              className="w-full bg-[#f2f2f2] outline-none px-5 py-1 mt-1"
            />
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
