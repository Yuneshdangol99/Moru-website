import React, { useState } from "react";
import moru from "../../assets/moru.png";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import CreateAcc from "./CreateAcc";
import ResetPass from "../../component/FunctionsContainer/ResetPass";

function Signinpopup({ onclose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [showpopup, setshowpopup] = useState(true);
  const [respondData, setrespondData] = useState(null);
  const [error, seterror] = useState(null);
  const [createacc, setcreateacc] = useState(false);
  const [forgetpass, setforgetpass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://sandbox.api.pnpl.com.np/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accesstype: "1",
        },
        body: JSON.stringify({ username: email, password: password }),
      });

      console.log(response);
      if (!response.ok) {
        throw new Error("failed to post data");
      }
      const result = await response.json();
      setrespondData(result);
    } catch (err) {
      seterror(err.message);
    }
  };

  const OpenCreateacc = () => {
    setcreateacc(true);
  };

  const clickForgetpass = () => {
    setforgetpass(true);
  };

  return (
    showpopup && (
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
          <div className="max-w-2xl mt-20  mx-auto w-full px-6">
            <h2 className="text-[32px] text-center mb-6 font-Tondo font-bold mt-12">
              Sign up with Moru
            </h2>
            {error && (
              <div className="max-w-full bg-[#fff2f0] p-2 mb-2 text-sm">
                {error.response
                  ? error.response.data.error || "Invalid username or password"
                  : "Invalid username or password"}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  name="email"
                  type="text"
                  placeholder="Mobile Number*"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  className="w-full p-[10px] rounded-lg bg-[#f2f2f2] font-semibold outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password*"
                  name="password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  className="w-full p-[10px] rounded-lg mt-2 bg-[#f2f2f2] font-semibold outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-5"
                >
                  {showPassword ? <FaEye /> : <FaRegEyeSlash />}
                </button>
              </div>
              <div className="text-right">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:underline"
                  onClick={clickForgetpass}
                >
                  Forget Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-[#c70038] p-3 rounded-lg font-bold text-white mt-3"
              >
                PROCEED
              </button>
            </form>
            <p className="text-right text-sm text-gray-500">
              <a href="#" className="hover:underline" onClick={OpenCreateacc}>
                Don't have an account ? sign up
              </a>
            </p>
            <RxCrossCircled
              className="text-3xl absolute right-4 top-3 cursor-pointer"
              onClick={onclose}
            />
          </div>
        </div>
        {respondData && (
          <div>
            <pre>{JSON.stringify(respondData, null, 2)}</pre>
          </div>
        )}
        {createacc ? <CreateAcc /> : null}
        {forgetpass ? <ResetPass /> : null}
      </div>
    )
  );
}

export default Signinpopup;
