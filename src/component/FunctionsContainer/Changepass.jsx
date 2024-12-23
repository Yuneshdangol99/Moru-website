import React, { useState } from "react";
import moru from "../../assets/moru.png";
import Button from "../Button";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function Changepass() {
  const [error, seterror] = useState("");
  const [password, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [ShowConfirmPassword, setShowConfirmpassword] = useState(false);

  const handleSubmit = async (e) => {
    console.log("passwordSubmitted:", password);
    console.log("confirmPassword:", confirmPassword);
    e.preventDefault();

    try {
      const response = await fetch(
        `https://sandbox.api.pnpl.com.np/users/reset-password`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accesstype: "1",
          },
          body: JSON.stringify({
            password: password,
            confirm_password: confirmPassword,
          }),
        }
      );

      if (!response.ok) {
        seterror("error occured");
      }
      const result = await response.json();
      console.log(result);
    } catch (err) {
      seterror("error occured");
    }
  };

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
        <div className=" mt-20  mx-auto w-full px-6 mb-10">
          <h2 className="text-[32px] text-center mb-6 font-Tondo font-bold mt-12">
            Change password
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 mt-4">
              <div className="w-full relative">
                <input
                  type={showpassword ? "text" : "password"}
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="p-[10px] bg- rounded-lg bg-[#f3f3f3] outline-none w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowpassword(!showpassword)}
                  className="absolute top-3 right-4"
                >
                  {showpassword ? <FaEye /> : <FaRegEyeSlash />}
                </button>
              </div>
              <div className="w-full relative">
                <input
                  type={ShowConfirmPassword ? "text" : "password"}
                  placeholder="Change Password"
                  value={confirmPassword}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="p-[10px] bg-[#f3f3f3] rounded-lg outline-none w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmpassword(!ShowConfirmPassword)}
                  className="absolute top-3 right-4"
                >
                  {ShowConfirmPassword ? <FaEye /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>
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
        </div>
      </div>
    </div>
  );
}

export default Changepass;
