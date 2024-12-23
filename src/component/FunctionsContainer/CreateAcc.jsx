import React, { useEffect, useState } from "react";
import moru from "../../assets/moru.png";
import { RxCrossCircled } from "react-icons/rx";
import Register from "./Register";
import Signinpopup from "./Signinpopup";

function CreateAcc({ onclose }) {
  const [respondData, setrespondData] = useState([]);
  const [error, seterror] = useState("");
  const [phone, setphone] = useState("");
  const [isSubmitted, setisSubmitted] = useState(false);
  const [HaveAccount, setHaveAccount] = useState(false);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(respondData));
  }, [respondData]);

  const handleSubmit = async (e) => {
    if (!phone) {
      seterror("Mobile number is required");
    }
    e.preventDefault();
    try {
      const response = await fetch(
        `https://sandbox.api.pnpl.com.np/users/register`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accesstype: "1",
          },
          body: JSON.stringify({
            phone: phone,
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setrespondData(result);
        setisSubmitted(true);
      } else {
        seterror(result.validation_errors?.phone || result.error_message);
      }
    } catch (err) {
      seterror(err.message);
      setphone("");
    }
  };

  if (isSubmitted) {
    return <Register phone={phone} />;
  }

  const haveanAccount = () => {
    setHaveAccount(true);
  };

  if (HaveAccount) {
    return <Signinpopup />;
  }

  return (
    <>
      <div>
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="min-h-[500px] mt-24 w-[800px] flex shadow-2xl rounded-lg relative bg-white">
            <div className="bg-[#c70038] flex flex-col justify-center items-center w-[500px] rounded-tl-lg rounded-bl-lg">
              <div className="h-[90px] w-[90px] bg-white rounded-full flex justify-center items-center mb-6">
                <img src={moru} alt="" className="h-[30px]" />
              </div>
              <div className="text-center pt-10 text-white w-[100%]">
                <h1 className="text-[32px] font-Tondo font-bold mb-6">
                  Hello Friend!
                </h1>
                <p className="text-[16px] font-medium px-5">
                  Enter your personal details and start journey with us
                </p>
              </div>
            </div>
            {/* Container 2  */}
            <div className="max-w-2xl mt-20  mx-auto w-full px-6">
              <h2 className="text-[32px] text-center mb-6 font-Tondo font-bold mt-12">
                Sign up with Moru
              </h2>
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="px-3 py-2 bg-[#fff2f0] mb-2">{error}</div>
                )}
                <div>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Mobile Number*"
                    onChange={(e) => setphone(e.target.value)}
                    value={phone}
                    className="w-full p-[10px] rounded-lg bg-[#f2f2f2] font-semibold outline-none"
                  />
                </div>
                <p className="text-sm mt-4 font-Tondo">
                  By creating your account you agree with our
                  <a href="https://moru.com.np/company/terms-conditions/">
                    <span className="text-blue-600"> Terms &Conditions</span>
                  </a>
                </p>
                <button
                  type="submit"
                  className="w-full bg-[#c70038] p-3 rounded-lg font-bold text-white mt-3"
                >
                  PROCEED
                </button>
              </form>
              <p className="text-right text-sm text-gray-500">
                <a href="#" onClick={haveanAccount}>
                  Already have account? sign In
                </a>
              </p>
              <RxCrossCircled
                className="text-3xl absolute right-4 top-3 cursor-pointer"
                onClick={onclose}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAcc;
