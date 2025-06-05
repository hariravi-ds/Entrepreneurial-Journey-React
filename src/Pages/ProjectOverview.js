import React from "react";

const progressData = [
  {
    name: "Datascale AI",
    manager: "Neilsan Mando",
    date: "Jun 10, 2025",
    status: "Delayed",
    color: "bg-yellow-500",
    progress: "35%",
  },
  {
    name: "Media channel branding",
    manager: "Sarah Parker",
    date: "Jun 18, 2025",
    status: "Completed",
    color: "bg-teal-400",
    progress: "100%",
  },
  {
    name: "iOS app development",
    manager: "Matty Kane",
    date: "Jul 09, 2025",
    status: "Pending",
    color: "bg-red-400",
    progress: "15%",
  },
  {
    name: "Website development",
    manager: "Laila Zayd",
    date: "Jul 20, 2025",
    status: "In progress",
    color: "bg-blue-400",
    progress: "65%",
  },
];

const activities = [
  {
    name: "Karen",
    action: "commented on the Green Loop Design document - Rev 2.",
    time: "Aug 10, 10:00 am",
  },
  {
    name: "John",
    action: "updated project info on Project Homepage",
    time: "Aug 09, 5:00 pm",
  },
  {
    name: "Sarah",
    action: "revised the due date to a new date.",
    time: "Aug 09, 4:00 pm",
  },
  {
    name: "Matthew",
    action: "updated the task timeline to Completed.",
    time: "Aug 09, 1:00 pm",
  },
  {
    name: "Alizeh",
    action: "commented on the Green Loop Design document - Rev 2.",
    time: "Aug 08, 5:00 pm",
  },
];

const DashboardOverview = () => {
  return (
    <div className="bg-[#1A1233] min-h-screen text-white p-8 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          {/* Header */}
          <div className="bg-[#6D4EA0] p-6 rounded-xl">
            <h1 className="text-3xl font-bold text-purple-100 mb-2">Green Loop</h1>
            <p className="text-white/80 text-sm">
              Green Loop is a community-driven grocery delivery startup focused on connecting eco-conscious consumers with local farmers and vendors. The goal is to reduce food miles, packaging waste, and carbon emissions by creating efficient hyperlocal loops for weekly deliveries.
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-[#3E2B5B] p-6 rounded-xl">
            <div className="flex items-center justify-between text-xs text-white">
              <div className="flex flex-col items-center">
                <div className="text-green-400 text-2xl">✅</div>
                <p>Business Plan</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-green-400 text-2xl">✅</div>
                <p>Investors</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-6 h-6 rounded-full"></div>
                <p>Recruit</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-gray-400"></div>
                <p>Partnerships</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-gray-400"></div>
                <p>Launch</p>
              </div>
            </div>
            <button className="mt-4 self-center px-4 py-2 bg-[#C5B4D6] text-[#922B90] rounded-full font-medium text-sm">
              Add Team Members
            </button>
          </div>

          {/* Project Progress */}
          <div className="bg-[#3E2B5B] p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4">Project Progress</h3>
            <table className="w-full text-left text-sm">
              <thead className="text-purple-200">
                <tr>
                  <th>Project Name</th>
                  <th>Project manager</th>
                  <th>Due date</th>
                  <th>Status</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {progressData.map((p, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="py-2">{p.name}</td>
                    <td>{p.manager}</td>
                    <td>{p.date}</td>
                    <td>
                      <span className={`text-xs px-2 py-1 rounded-full ${p.color}`}>{p.status}</span>
                    </td>
                    <td>
                      <div className="bg-gray-700 rounded-full w-24 h-3 overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-3" style={{ width: p.progress }}></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          {/* Project Stats */}
          <div className="bg-[#3E2B5B] p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4">Project Stats</h3>
            <img
              src="https://via.placeholder.com/200x200?text=Pie+Chart"
              alt="chart"
              className="mx-auto"
            />
          </div>

          {/* Recent Activity */}
          <div className="bg-[#3E2B5B] p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
            <ul className="space-y-3 text-sm">
              {activities.map((a, i) => (
                <li key={i} className="border-b border-white/10 pb-2">
                  <span className="font-semibold text-white">{a.name}</span> {a.action}
                  <div className="text-xs text-gray-400">{a.time}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;