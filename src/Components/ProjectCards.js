import React from "react";
import { FiCalendar } from "react-icons/fi";
import DailyChecklist from "./DailyChecklist";

const ProjectCards = ({ checklist, handleCheckboxChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-2 items-stretch mb-6">
      <ProjectCard
        title="Project: Green Loop"
        status="Published"
        tasks={["Contact Gandalf", "Complete Comp An..", "Send report to ..."]}
        meeting="4/25 @ 1:30pm"
        extraLabel="Applicants to review"
        extraValue="3"
        date="Sept 25th"
        progress="70%"
      />
      <ProjectCard
        title="Project: eTrail"
        status="Private"
        tasks={["Sketch Storyboard", "Complete B-Plan", "Send report to..."]}
        meeting="4/25 @ 3:30pm"
        extraLabel="Reminder"
        extraValue="Call Beth @ 2:15pm"
        date="Dec 21st"
        progress="50%"
      />
      <div className="w-full h-full">
        <DailyChecklist
          checklist={checklist}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
};

const ProjectCard = ({
  title,
  status,
  tasks,
  meeting,
  extraLabel,
  extraValue,
  date,
  progress,
}) => (
  <div className="rounded-2xl overflow-hidden shadow-lg mb-6 h-full flex flex-col bg-[#3F3161]">
    {/* Header */}
    <div className="flex justify-between items-center px-4 py-3 bg-[#5B4B83]">
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-300">{status}</p>
      </div>
      <span className="text-white text-2xl leading-none">⋯</span>
    </div>

    {/* Body */}
    <div className="grid grid-cols-2 gap-4 p-4">
      {/* Tasks */}
      <div className="bg-[#4B3A79] p-4 rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
        <h4 className="font-semibold mb-2">Today’s Tasks</h4>
        <ul className="text-sm list-disc list-inside text-gray-200">
          {tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>

      {/* Meeting and Extra Info */}
      <div className="flex flex-col gap-4">
        <div className="bg-[#4B3A79] p-4 rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
          <h4 className="font-semibold mb-1">Team Meeting</h4>
          <p className="flex items-center gap-2 text-sm text-gray-200">
            <FiCalendar /> {meeting}
          </p>
        </div>
        <div className="bg-[#4B3A79] p-4 rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
          <h4 className="font-semibold mb-1">{extraLabel}</h4>
          <p className="text-sm text-gray-200">
            <span className="inline-block px-2 py-0.5 text-sm font-bold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              {extraValue}
            </span>
          </p>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="px-6">
      <p className="text-xs text-right text-gray-300 mb-1">{date}</p>
      <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden mt-1">
        <div
          className="h-full rounded-full"
          style={{
            width: progress,
            background: "linear-gradient(to right, #9D38DF, #F26479)",
          }}
        ></div>
      </div>
    </div>
  </div>
);

export default ProjectCards;
