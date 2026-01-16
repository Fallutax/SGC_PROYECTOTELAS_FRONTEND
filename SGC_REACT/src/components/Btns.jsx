// Btns.jsx - Mejorado con más estilos
import React from 'react';

export const Btns = ({ title, description, icon, className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-gradient-to-br from-[#3a3b3c] to-[#2a2b2c] 
        hover:from-[#4a4b4c] hover:to-[#3a3b3c]
        text-white p-6 rounded-xl shadow-lg hover:shadow-xl
        transition-all duration-300 transform
        border border-gray-600 hover:border-gray-500
        text-left w-full
        ${className}
      `}
    >
      <div className="flex items-start space-x-4">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-white">
            {title}
          </h3>
          <p className="text-gray-300 text-sm">
            {description}
          </p>
        </div>
        <div className="text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default Btns;