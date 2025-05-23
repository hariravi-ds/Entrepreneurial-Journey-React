import React, { useState } from "react";
import { FiBell, FiMail, FiCalendar, FiUser, FiFilter } from "react-icons/fi";

const navLinks = [
  { label: "Overview" },
  { label: "Explore" },
  { label: "Resources" },
  { label: "Help" },
];

const TopNav = ({ onNavClick }) => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex justify-between px-10 py-6 border-b h-[164px] bg-[#0D0628] text-white">
      {/* Logo */}
      <div className="flex items-center space-x-8">
        <h1 className="font-bold text-2xl flex items-center gap-2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 w-4 h-4 rounded-md"></span>
          Entrepreneurs Journey
        </h1>
      </div>

      {/* Navigation + Actions */}
      <div className="flex flex-col gap-[20px] w-[80%]">
        {/* Tabs & Icons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center w-[712px] justify-between">
            {navLinks.map(({ label }) => (
              <button
                key={label}
                onClick={() => {
                  setActiveTab(label);
                  onNavClick(label);
                }}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeTab === label
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl font-bold"
                    : "text-gray-300 hover:text-white text-xl font-semibold"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex gap-[30px]">
            <IconWithBadge icon={<FiCalendar size={28} />} />
            <IconWithBadge icon={<FiMail size={28} />} count={5} />
            <IconWithBadge icon={<FiBell size={28} />} count={3} />
            <FiUser size={28} className="text-white text-xl" />
          </div>
        </div>

        {/* Filter + Search + Button */}
        <div className="flex px-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <FiFilter className="text-white text-xl" />
            <span className="font-medium text-base">Filter</span>
            <input
              type="text"
              placeholder="Search..."
              className="w-[632px] px-4 py-2 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
            />
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium hover:opacity-90">
            + Create New Project
          </button>
        </div>
      </div>
    </div>
  );
};

const IconWithBadge = ({ icon, count }) => (
  <div className="relative">
    <div className="text-white text-xl">{icon}</div>
    {count && (
      <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1 rounded-full">
        {count}
      </span>
    )}
  </div>
);

export default TopNav;
