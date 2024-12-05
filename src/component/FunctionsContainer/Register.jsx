import React, { useEffect, useState } from "react";
import moru from "../../assets/moru.png";
import Button from "../Button";

function Register({ phone, verification_code }) {
  const [error, seterror] = useState("");
  const [localData, setLocalData] = useState(null);
  const [validation, setvalidation] = useState("");
  const [firstname, setfirstname] = useState("");
  const [middlename, setmiddlename] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");

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

  console.log("localData", localData);

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

      console.log(response);
      if (!response.ok) {
        throw new Error("invalid verification code");
      }
      const result = await response.json();
    } catch (error) {
      seterror(error.message);
      setvalidation("");
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 ">
        <div className="min-h-500px mt-24 max-w-[800px] flex shadow-2xl rounded-lg relative bg-white">
          <div className="max-w-[333px] bg-[#c70038] flex flex-col justify-center items-center py-32 px-20">
            <div className="h-[90px] w-[90px] bg-white rounded-full flex justify-center items-center ">
              <img src={moru} alt="" className="h-[30px] " />
            </div>
            <div className="text-center pt-10 text-white mx-auto">
              <h1 className="text-4xl font-Tondo font-bold mb-10">
                Hello Friend!
              </h1>
              <p className="text-[16px] font-medium">
                Enter your personal details and start journey with us
              </p>
            </div>
          </div>
          {/* Container 2  */}
          <div className="max-w-2xl mt-20  mx-auto w-full px-6 mb-10">
            <h2 className="text-[32px] text-center mb-6 font-Tondo font-bold mt-12">
              Sign Up Verification
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="text-center">{renderVerificationcode()}</div>
              <div className="flex flex-col gap-1 mt-4">
                <input
                  type="text"
                  name="code"
                  onChange={(e) => setvalidation(e.target.value)}
                  placeholder="Verification code*"
                  value={validation}
                  className="p-[10px] bg- rounded-lg bg-[#f3f3f3]"
                />
                {error && <div>{error}</div>}
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name*"
                  onChange={(e) => setfirstname(e.target.value)}
                  value={firstname}
                  className="p-4 bg-[#f3f3f3] rounded-lg"
                />
                <input
                  type="text"
                  name="middlename"
                  placeholder="Middle Name*"
                  onChange={(e) => setmiddlename(e.target.value)}
                  value={middlename}
                  className="p-4 bg-[#f3f3f3] rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  onChange={(e) => setlastname(e.target.value)}
                  value={lastname}
                  className="p-4 bg-[#f3f3f3]  rounded-lg"
                />
                <div className="flex flex-col gap-1">
                  <select
                    value={gender}
                    onChange={(e) => setgender(e.target.value)}
                    className="p-4 bg-[#f3f3f3] rounded-lg"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Password*"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  className="p-4 bg-[#f3f3f3] rounded-lg"
                />
              </div>
              <div className="w-full flex justify-between mt-3">
                <Button text={"PROCEED"} type="submit" />
                <Button text={"CANCEL"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
