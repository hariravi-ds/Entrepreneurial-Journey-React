import React, { useState } from 'react';

const MatchTabs = () => {
  const [activeTab, setActiveTab] = useState('Professionals');
  const tabs = ['Professionals', 'Advisors', 'Investors'];

  return (
    <div className="flex items-center gap-4">
      <h3 className="text-lg font-medium text-[#979797]">Potential Matches:</h3>
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-base transition-all ${
              activeTab === tab
                ? 'text-white underline underline-offset-4'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
        <button className="text-base text-gray-400 hover:text-white">See All</button>
      </div>
    </div>
  );
};

export default MatchTabs;