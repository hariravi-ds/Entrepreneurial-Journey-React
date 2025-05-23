import React, {useState} from "react";
import Sidebar from "../Components/Sidebar";
import TopNav from "../Components/TopNav";
import Overview from "./Overview"
import Help from "./Help"
import Resources from "./Resources"
import Profile from "./Profile"

function Dashboard() {
  const [selectedPage, setSelectedPage] = useState("overview");
  const renderPage = () => {
    switch (selectedPage) {
      case "Help":
        return <Help />;
      case "Resources":
        return <Resources />
      case "overview":
        return <Overview />
      default:
        return <Profile />;
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--page-background)" }}
    >
      <TopNav onNavClick={setSelectedPage} />
      <div className="flex flex-1 h-full">
        <div className="w-[256px] flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex-1 p-4">{renderPage()}</div>
      </div>
    </div>
  );
}

export default Dashboard;
