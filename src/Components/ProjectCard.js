import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

const statusStyles = {
  "In Progress": "bg-blue-500",
  "Delayed": "bg-yellow-500",
  "At Risk": "bg-red-500",
};

const ProjectCard = ({ image, title, status, progress }) => {
  return (
    <div className="bg-[#5E4A92] rounded-xl p-4 flex-1 text-white relative">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg">{title}</h3>
        <FiMoreHorizontal className="text-white" />
      </div>

      {/* Image */}
      <div className="mt-2 mb-4">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 rounded-full object-cover mx-auto"
        />
      </div>

      {/* Status and Progress */}
      <div className="flex justify-between items-center mt-2">
        <div className="text-center">
          <p className="text-sm text-gray-300">Status</p>
          <span className={`px-3 py-1 text-sm rounded-full ${statusStyles[status]}`}>
            {status}
          </span>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-300">Progress</p>
          <div className="w-10 h-10 rounded-full bg-[#7D6BB3] flex items-center justify-center text-sm font-bold">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;