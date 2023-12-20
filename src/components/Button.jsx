import React from "react";
import { twJoin, twMerge } from "tailwind-merge";

const Button = ({ className, text }) => {
  return (
    <button className={twMerge("relative inline-block text-lg group active:scale-95 duration-100", className)}>
      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium rounded-sm leading-tight text-gray-800 transition-colors duration-300 ease-out border-gray-900 group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-sm bg-gray-50"></span>
        <span className="absolute left-0 w-60 h-60 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative text-sm font-bold">{text}</span>
      </span>
    </button>
  );
};

export default Button;
