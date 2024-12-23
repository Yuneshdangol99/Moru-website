import React, { useEffect, useState } from "react";
import moru from "../../assets/moru.png";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import CreateAcc from "./CreateAcc";
import ResetPass from "../../component/FunctionsContainer/ResetPass";
import Counter from "../Count/Counter";

function Signinpopup({ onclose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [createAcc, setCreateAcc] = useState(false);
  const [forgetPass, setForgetPass] = useState(false);
  const [IsLoggedin, setIsLoggedin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !email) {
      return setError("Email and Password required");
    }
    try {
      const response = await fetch("https://sandbox.api.pnpl.com.np/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accesstype: "1",
        },
        body: JSON.stringify({ username: email, password: password }),
      });

      const result = await response.json();

      if (response.ok) {
        if (result.data?.access_token && result.data?.refresh_token) {
          localStorage.setItem("refresh_token", result.data.refresh_token);
          localStorage.setItem("access_token", result.data.access_token);
          setResponseData(result);
          setError(null);
          setShowPopup(false);
          setIsLoggedin(true);
        }
      } else {
        setError(
          result.error_message || JSON.stringify(result.validation_errors)
        );
      }
    } catch (err) {
      console.error("Login Error:", err.message);
      setError("An error occurred. Please try again.");
    }
  };

  const openCreateAcc = () => setCreateAcc(true);
  const openForgetPass = () => setForgetPass(true);

  if (IsLoggedin) {
    return <Counter />;
  }

  return (
    showPopup && (
      <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="min-h-[500px] mt-24 flex shadow-2xl rounded-lg relative bg-white">
          {/* Container 1 */}
          <div className="bg-[#c70038] flex flex-col justify-center items-center w-[500px] rounded-tl-lg rounded-bl-lg">
            <div className="h-[90px] w-[90px] bg-white rounded-full flex justify-center items-center mb-6">
              <img src={moru} alt="Moru Logo" className="h-[30px]" />
            </div>
            <div className="text-center pt-10 text-white w-[100%]">
              <h1 className="text-[32px] font-bold mb-6">Welcome Back!</h1>
              <p className="text-[16px] px-5">
                Enter your personal details and start your journey with us
              </p>
            </div>
          </div>

          {/* Container 2 */}
          <div className="max-w-2xl mt-20 mx-auto w-full px-6">
            <h2 className="text-[32px] text-center mb-6 font-bold mt-12">
              Sign in with Moru
            </h2>
            {error && (
              <div className="bg-[#fff2f0] p-2 mb-2 text-sm text-black">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <input
                name="email"
                type="text"
                placeholder="Mobile Number*"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full p-[10px] rounded-lg bg-[#f2f2f2] outline-none"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password*"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full p-[10px] rounded-lg mt-2 bg-[#f2f2f2] outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-5"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEye /> : <FaRegEyeSlash />}
                </button>
              </div>
              <div className="text-right">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:underline"
                  onClick={openForgetPass}
                >
                  Forget Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-[#c70038] p-3 rounded-lg text-white mt-3"
              >
                PROCEED
              </button>
            </form>
            <p className="text-right text-sm text-gray-500">
              <a href="#" className="hover:underline" onClick={openCreateAcc}>
                Don't have an account? Sign up
              </a>
            </p>
            <RxCrossCircled
              className="text-3xl absolute right-4 top-3 cursor-pointer"
              onClick={onclose}
            />
          </div>
        </div>

        {createAcc && (
          <CreateAcc
            onclose={() => setShowPopup(false)}
            showPopup={showPopup}
          />
        )}

        {forgetPass && (
          <ResetPass
            onclose={() => setShowPopup(false)}
            showPopup={showPopup}
          />
        )}
      </div>
    )
  );
}

export default Signinpopup;
