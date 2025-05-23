import React from "react";
import ResourceBlock from "../Components/ResourceBlock";
import { FaRegCircleQuestion } from "react-icons/fa6";

function Dashboard() {
  return (
    <div className="flex-1 p-10 overflow-y-auto flex justify-center">
      <div className="w-1/2">
        <ResourceBlock
          title="FAQs / Help"
          icon={FaRegCircleQuestion}
          items={[
            "FAQs",
            "User Forum",
            "Open Support Ticket",
            "Give Us Feedback",
          ]}
        />
      </div>
    </div>
  );
}

export default Dashboard;