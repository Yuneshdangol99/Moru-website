import React, { useEffect, useState } from "react";

function Counter() {
  const [error, setError] = useState("");
  const [count, setCount] = useState(null);
  const [IsLoggedin, setIsLoggedin] = useState(false);
  const [localData, setLocalData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setLocalData(token);
    console.log("token aairaxa", token);

    const fetchdata = async () => {
      if (!token) {
        return;
      }
      try {
        const response = await fetch(
          `https://sandbox.api.pnpl.com.np/me/notifications-count`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              accesstype: "1",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error_message || "Failed to fetch data.");
        }
        const result = await response.json();
        setCount(result.data.count);
        setIsLoggedin(true);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchdata();
  }, []);

  return <div>{IsLoggedin ? <p className="text-white">{count}</p> : null}</div>;
}

export default Counter;
