import React, { useEffect, useState } from "react";
import moru from "../../assets/moru.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Signinpopup from "./Signinpopup";

function Register() {
  const [error, seterror] = useState(null);
  const [localData, setLocalData] = useState(null);
  const [validation, setvalidation] = useState("");
  const [firstname, setfirstname] = useState("");
  const [middlename, setmiddlename] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");
  const [Showpassword, setShowpassword] = useState(false);
  const [IsSucessfull, setIsSucessfull] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  useEffect(() => {
    const getDataFromStorage = () => {
      const data = localStorage.getItem("data");
      const parsedData = JSON.parse(data);
      setLocalData(parsedData.data);
    };
    getDataFromStorage();
  }, []);

  const renderVerificationcode = () => {
    if (!localData || !localData.verification_code) {
      return <p>Loading verification code...</p>;
    }
    return <h1>Verification code : {localData.verification_code}</h1>;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://sandbox.api.pnpl.com.np/users/verify`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accesstype: "1",
          },
          body: JSON.stringify({
            code: `${localData.verification_code}`,
            secret: localData.secret,
            first_name: firstname,
            gender: gender,
            password: password,
            last_name: lastname,
          }),
        }
      );

      if (!response.ok) {
        const ErrorData = await response.json();
        seterror(ErrorData);
        return;
      }
      const result = await response.json();
      setIsSucessfull(true);
    } catch (error) {
      seterror(error.message);
      setvalidation("");
    }
    setIsCancel(true);
  };

  if (IsSucessfull) {
    return <Signinpopup />;
  }

  const CancelRegister = () => {
    setIsCancel(true);
  };

  if (isCancel) {
    return <Signinpopup />;
  }

  return (
    <div>
      <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 ">
        <div className="flex shadow-2xl rounded-lg relative bg-white mt-24">
          <div className="bg-[#c70038] flex flex-col justify-center items-center rounded-tl-lg rounded-bl-lg">
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
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-[32px] text-center mb-6 font-Tondo font-bold mt-12">
              Sign Up Verification
            </h2>
            <form onSubmit={handleSubmit} className="flex  flex-col px-7">
              <div className="text-center mb-3">{renderVerificationcode()}</div>
              <div className="flex flex-col gap-1 mt-4">
                <input
                  type="text"
                  name="code"
                  onChange={(e) => setvalidation(e.target.value)}
                  placeholder="Verification code*"
                  value={validation}
                  className="p-[10px] bg- rounded-lg bg-[#f3f3f3]"
                />
                {/* {error?.validation_errors.code[0](
                  <div>{error.validation_errors.code[0]}</div>
                )} */}
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name*"
                  onChange={(e) => setfirstname(e.target.value)}
                  value={firstname}
                  className="p-[10px] bg-[#f3f3f3] rounded-lg outline-none"
                />
                <input
                  type="text"
                  name="middlename"
                  placeholder="Middle Name*"
                  onChange={(e) => setmiddlename(e.target.value)}
                  value={middlename}
                  className="p-[10px] bg-[#f3f3f3] rounded-lg outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  onChange={(e) => setlastname(e.target.value)}
                  value={lastname}
                  className="p-[10px] bg-[#f3f3f3]  rounded-lg outline-none"
                />
                <div className="flex flex-col gap-1">
                  <select
                    value={gender}
                    onChange={(e) => setgender(e.target.value)}
                    className="p-[10px] bg-[#f3f3f3] rounded-lg outline-none"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="relative">
                  <input
                    type={Showpassword ? "text" : "password"}
                    placeholder="Password*"
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                    className="p-[10px] bg-[#f3f3f3] rounded-lg w-full outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowpassword(!Showpassword)}
                    className="absolute right-4 top-5"
                  >
                    {Showpassword ? <FaEye /> : <FaRegEyeSlash />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-600">
                  {error?.validation_errors.password[0]}
                </div>
              )}

              <div className="w-full flex mt-3 mb-8 text-white gap-2">
                <button className="w-full px-10 py-3 rounded-lg bg-[#c70038]">
                  PROCCED
                </button>
                <button
                  className="w-full px-10 py-3 rounded-lg bg-[#c70038]"
                  onClick={CancelRegister}
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
