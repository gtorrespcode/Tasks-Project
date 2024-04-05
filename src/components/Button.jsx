import React from "react";

const Button = ({children, ...props}) => {
  return (
    <button {...props} className="px-4 py-2 text-xs md:text-base rounded-md bg-green-700 text-green-400 hover:bg-green-600 hover:text-green-100">
      {children}
    </button>
  );
};

export default Button;
