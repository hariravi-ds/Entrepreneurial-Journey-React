import React from "react";
import { FiMoreHorizontal, FiPlus } from "react-icons/fi";

const steps = [
  { number: 1, label: "Fill Bio", completed: false },
  { number: 2, label: "Career Path Assessment", completed: false },
  { number: 3, label: "Resume Upload", completed: false },
  { number: 4, label: "Video Upload", completed: false },
];

const AccountCompletion = () => {
  return (
    <div className="bg-[#5E4A92] rounded-xl p-4 w-80 text-white relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Account Completion</h2>
        <FiMoreHorizontal />
      </div>

      {/* Step List */}
      <div className="flex flex-col space-y-4 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center relative">
            {/* Step Number */}
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold z-10
                ${
                  step.number <= 2
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-500 text-white"
                }`}
            >
              {step.number}
            </div>

            {/* Vertical Line */}
            {index < steps.length - 1 && (
              <div className="absolute left-3 top-6 h-10 border-l-2 border-gray-400 z-0"></div>
            )}

            {/* Label + Action */}
            <div className="flex justify-between items-center bg-white text-purple-700 px-4 py-2 rounded-full ml-4 w-full">
              <span className="text-sm font-medium">{step.label}</span>
              <div className="bg-gradient-to-r from-purple-500 to-blue-400 rounded-full p-[6px]">
                <FiPlus size={16} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountCompletion;