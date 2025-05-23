import React from "react";
import { FiEdit2 } from "react-icons/fi";
import Completion from "../Components/Completion";
import PotentialMatches from "../Components/PotentialMatches";
import ProjectsSection from "./ProjectsSection";

const ProfileOverview = () => {
  return (
    <div className="bg-[#0D0628] min-h-screen text-white p-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Your Profile Overview</h2>
        <div className="bg-[#2C234D] rounded-full p-1 text-sm flex items-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full font-semibold mr-1">Owner</button>
          <button className="text-white px-4 py-1 font-semibold">Company</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left section - Profile Card */}
        <div className="w-full lg:max-w-[80%] mx-auto lg:mx-0">
          <div className="bg-[#2C234D] p-8 rounded-2xl shadow-lg border border-gray-400">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Profile"
                    className="w-24 h-24 rounded-full"
                  />
                  <div className="absolute bottom-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    70%
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">John Doe</h2>
                  <p className="text-sm">Software Engineer</p>
                  <p className="text-sm text-purple-200">Technology, Accounting</p>
                </div>
              </div>
              <FiEdit2 className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            </div>

            {/* Stats */}
            <div className="flex justify-between mt-6 text-center">
              <div>
                <p className="text-lg font-semibold">23</p>
                <p className="text-xs text-gray-300">Connections</p>
              </div>
              <div>
                <p className="text-lg font-semibold">5</p>
                <p className="text-xs text-gray-300">Teams</p>
              </div>
              <div>
                <p className="text-lg font-semibold">7</p>
                <p className="text-xs text-gray-300">Published Projects</p>
              </div>
              <div>
                <p className="text-lg font-semibold">8</p>
                <p className="text-xs text-gray-300">Current Projects</p>
              </div>
            </div>

            {/* Contact and Info */}
            <div className="mt-6 text-sm">
              <p className="mb-1">Passionate about technology and entrepreneurship.</p>
              <p><span className="font-semibold">Personal Office:</span> 123 Vista Dr. San Jose CA 95308</p>
              <p className="text-purple-300 hover:underline cursor-pointer">johndoe.com</p>
              <p className="text-xs mt-2">Joined 2/11/25</p>
            </div>

            {/* Bio */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Bio</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Experienced banking advisor with a background in financial advising in an insurance company for 5 years.
                My primary responsibilities at California State Bank include assisting clients with their credit and accounts.
                With 10 years in the industry, I remain the top trusted banking advisor in the company.
              </p>
              <p className="text-sm text-gray-300 mt-2">
                I graduated from University of San Francisco with a Bachelor’s degree in business.
                Later on, I took an online course in technology to better leverage my understanding of AI.
              </p>
            </div>
          </div>
        </div>

        {/* Right section - Sidebar */}
        <div className="w-[20%] flex flex-col gap-6">
          <Completion />
          <PotentialMatches />
        </div>
      </div>

      {/* Projects Section */}
      <div className="pt-2">
        <h1 className="text-white text-xl font-bold mb-6">Your Projects</h1>
        <ProjectsSection />
      </div>
    </div>
  );
};

export default ProfileOverview;