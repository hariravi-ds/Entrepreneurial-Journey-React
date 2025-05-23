import React, { useState } from "react";
import ProjectCards from "../Components/ProjectCards";
import PotentialMatches from "../Components/PotentialMatches";
import Opportunities from "../Components/Opportunities";
import MatchTabs from "../Components/MatchTabs";

function Dashboard() {
  const [checklist, setChecklist] = useState({
    budget: true,
    call: false,
    email: false,
    explore: false,
  });

  const handleCheckboxChange = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex-1 p-10 overflow-y-auto">
    <ProjectCards
      checklist={checklist}
      handleCheckboxChange={handleCheckboxChange}
    />
    <div className="flex flex-col gap-4">
      <MatchTabs></MatchTabs>
      <PotentialMatches />
    </div>
    <div className="flex flex-col gap-4">
      <span className="text-lg font-medium text-[#979797]">
        Opportunities
      </span>
      <Opportunities />
    </div>
  </div>
  );
}

export default Dashboard;
