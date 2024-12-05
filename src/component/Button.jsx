import React from "react";

function Button({ text }) {
  return (
    <div>
      <button className="bg-red-600 text-white px-5 py-2 w-full rounded-lg">
        {text}
      </button>
    </div>
  );
}

export default Button;
