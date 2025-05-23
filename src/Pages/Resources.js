import React from "react";
import ResourceBlock from "../Components/ResourceBlock";
import { IoMdBook } from "react-icons/io";
import { VscTools } from "react-icons/vsc";

function Dashboard() {

  return (
    <div className="flex-1 p-10 overflow-y-auto">
    <div className="flex gap-14">
      <ResourceBlock
        title="Education"
        icon={IoMdBook}
        items={[
          "Courses",
          "Videos",
          "Podcasts",
          "Success Stories",
          "Case Studies",
          "Newsletters & Blogs",
        ]}
      />
      <ResourceBlock
        title="Tools"
        icon={VscTools}
        items={[
          "Team Planning",
          "Mind Mapper",
          "Progress Tracker",
          "Resume Templates",
          "Portfolio Templates",
          "Build Your Own",
        ]}
      />
    </div>
  </div>
  );
}

export default Dashboard;