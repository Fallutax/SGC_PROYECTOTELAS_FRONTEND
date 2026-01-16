import React from "react";
import Icono from "../assets/castillo logo.jpg";

export function Button({ title, description }) {
  return (
    <div
      className={
        "bg-gradient-to-br from-[#3a3b3c] to-[#2a2b2c] hover:from-[#4a4b4c] hover:to-[#3a3b3c] text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform border border-gray-600 hover:border-gray-500 text-left w-full ${cl} "
      }
    >
      <div className="flex gap-10 py-2 min-h-22">
        <div className="">
          <img
            src={Icono}
            alt="icon"
            className="w-16 h-16 object-cover rounded-full"
          ></img>
        </div>
        <div className="max-w-full">
          <h4 className="text-white font-bold text-[20px]">{title}</h4>
          <p className="text-white font-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}
