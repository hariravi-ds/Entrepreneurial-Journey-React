import React from 'react';
import { FaRegEdit } from "react-icons/fa";

const DailyChecklist = ({ checklist = {}, handleCheckboxChange }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg mb-6 h-full flex flex-col bg-[#3F3161]">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-[#5B4B83]">
        <h3 className="text-lg font-bold text-white">Daily Checklist</h3>
        <FaRegEdit size={18} className="text-white cursor-pointer" />
      </div>

      {/* Checklist Items */}
      <ul className="p-4 flex-1 text-white text-sm space-y-3">
        {Object.entries(checklist).length > 0 ? (
          Object.entries(checklist).map(([key, value]) => (
            <li className="flex items-center" key={key}>
              <input
                type="checkbox"
                className="mr-3 w-4 h-4"
                style={{ accentColor: '#9D38DF' }}
                checked={value}
                onChange={() => handleCheckboxChange(key)}
              />
              <span>
                {key === 'budget' && 'finish AI Garden quarter budget'}
                {key === 'call' && 'call Great Harvest for muffins'}
                {key === 'email' && 'email contacts about prototype test'}
                {key === 'explore' && 'explore advisors'}
              </span>
            </li>
          ))
        ) : (
          <li className="text-gray-400 italic">No tasks for today.</li>
        )}
      </ul>
    </div>
  );
};

export default DailyChecklist;