import React from "react";

const professionals = [
  {
    name: "Matija C.",
    role: "Software Engineer",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sarah Q.",
    role: "Business Development",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Jessy Y.",
    role: "UX Designer",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "James .B",
    role: "Accounting Professional",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Anna J.",
    role: "Project Manager",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const companies = [
  {
    name: "Vibrance",
    tag: "Ecommerce",
    date: "1/15/25",
    connections: 60,
    employees: 7,
    published: 8,
    description:
      "Vibrance is a community-driven grocery delivery startup focused on connecting eco-conscious consumers with local farmers and vendors.",
    icon: "🛒",
  },
  {
    name: "JoiAll",
    tag: "Software",
    date: "8/16/24",
    connections: 200,
    employees: 12,
    published: 3,
    description:
      "JoiAll is a forward thinking AI software company, creating innovative tools to support sustainable and profitable business solutions.",
    icon: "🔗",
  },
  {
    name: "YumWell",
    tag: "Foods",
    date: "5/18/24",
    connections: 380,
    employees: 22,
    published: 4,
    description:
      "YumWell creates delicious plant-based substitute for meat and dairy products.",
    icon: "🥗",
  },
];

const videos = [
  {
    title: "How to Prepare for an interview with CEO",
    img: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
  },
  {
    title: "Create Presentations in Less Than 5 Mins",
    img: "https://img.youtube.com/vi/3fumBcKC6RE/0.jpg",
  },
  {
    title: "Team Building Tips",
    img: "https://img.youtube.com/vi/oHg5SJYRHA0/0.jpg",
  },
];

const Explore = () => {
  return (
    <div className="bg-[#1A1233] min-h-screen text-white p-8">
      {/* Professionals */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Potential Matches:{" "}
          <span className="text-white underline">Professionals</span>
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {professionals.map((pro, i) => (
            <div
              key={i}
              className="bg-[#3E2B5B] rounded-xl p-4 w-[160px] text-center"
            >
              <img
                src={pro.img}
                alt={pro.name}
                className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
              />
              <h3 className="font-semibold text-sm">{pro.name}</h3>
              <p className="text-xs text-gray-300">{pro.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Companies */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">
          Featured: <span className="text-white underline">Companies</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((comp, i) => (
            <div key={i} className="bg-[#3E2B5B] rounded-xl p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{comp.name}</h3>
                <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-md">
                  {comp.tag}
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Joined {comp.date}</p>
              <div className="flex justify-between text-xs text-gray-300 mt-2">
                <div>{comp.connections} Connections</div>
                <div>{comp.employees} Employees</div>
                <div>{comp.published} Published</div>
              </div>
              <p className="text-sm text-gray-200 mt-3">{comp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Videos */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">
          Media: <span className="text-white underline">Videos</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, i) => (
            <div key={i} className="bg-[#3E2B5B] rounded-xl overflow-hidden">
              <img
                src={video.img}
                alt={video.title}
                className="w-full h-36 object-cover"
              />
              <p className="p-3 text-sm font-medium text-white">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
