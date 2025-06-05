import React, { useState } from "react";

const messages = [
  {
    name: "Sophia Manny",
    role: "UX Researcher",
    time: "typing...",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    active: true,
  },
  {
    name: "Liam Onor",
    role: "You: Lorem ipsum...",
    time: "38 mins",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Lisa Bloomy",
    role: "User. Lorem ipsum...",
    time: "Yesterday",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Jack Roby",
    role: "You: Lorem ipsum...",
    time: "Tuesday",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "Naomi Beseo",
    role: "You: Lorem ipsum...",
    time: "Monday",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "Kier Smith",
    role: "You: Lorem ipsum...",
    time: "Monday",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

const MessageDashboard = () => {
  const [selectedUser, setSelectedUser] = useState(messages[0]);
  const [majorTab, setMajorTab] = useState("Direct");
  const [messageType, setMessageType] = useState("Primary");
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  return (
    <div className="bg-[#1A1233] text-white min-h-screen font-sans relative">
      {/* Compose Modal */}
      {isComposeOpen && (
        <div className="absolute inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="w-[700px] bg-white rounded-lg overflow-hidden text-black shadow-lg">
            {/* Modal Header */}
            <div className="bg-[#2C1C50] text-white flex justify-between items-center px-4 py-3">
              <span className="text-lg font-semibold">New Message</span>
              <div className="flex items-center space-x-3 text-xl">
                <button title="Minimize">➖</button>
                <button title="Maximize">⛶</button>
                <button onClick={() => setIsComposeOpen(false)} title="Close">❌</button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4">
              <div className="flex items-center mb-4">
                <label className="font-semibold mr-2 text-black text-sm">To:</label>
                <input
                  className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                  placeholder="Search user"
                />
              </div>
              <textarea
                className="w-full border border-gray-300 rounded p-3 h-40 text-sm"
                placeholder="Write a message..."
              ></textarea>

              {/* Footer */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4 text-xl text-gray-600">
                  <span title="Attach">📎</span>
                  <span title="Image">🖼️</span>
                  <span title="Mic">🎤</span>
                  <span title="Emoji">😊</span>
                </div>
                <button className="px-6 py-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setIsComposeOpen(true)}
            className="w-40 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-full font-bold"
          >
            📨 Compose
          </button>
          <div className="flex space-x-4">
            {["Direct", "Group"].map((tab) => (
              <button
                key={tab}
                onClick={() => setMajorTab(tab)}
                className={`px-4 py-1 rounded-full font-semibold ${
                  majorTab === tab
                    ? "bg-white text-purple-800"
                    : "border border-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex space-x-4">
          {["Primary", "Archived", "Unread", "Starred", "Mute"].map((item) => (
            <button
              key={item}
              onClick={() => setMessageType(item)}
              className={`px-4 py-1 rounded-full text-sm ${
                item === messageType
                  ? "bg-purple-700 text-white"
                  : "text-purple-300 border border-purple-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Layout */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[300px] border-r border-gray-700">
          {messages.map((msg, i) => (
            <div
              key={i}
              onClick={() => setSelectedUser(msg)}
              className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-purple-900 ${
                selectedUser.name === msg.name
                  ? "bg-purple-800 border-l-4 border-purple-300"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={msg.avatar}
                  alt={msg.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold text-sm">{msg.name}</div>
                  <div className="text-xs text-gray-400">{msg.role}</div>
                </div>
              </div>
              <div className="text-xs text-gray-400">{msg.time}</div>
            </div>
          ))}
        </div>

        {/* Main Chat Panel */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-gray-700 p-4">
            <div>
              <h2 className="text-lg font-bold">{selectedUser.name}</h2>
              <p className="text-sm text-purple-300">{selectedUser.role}</p>
            </div>
            <div className="flex space-x-3 text-xl text-white">
              <span>📞</span>
              <span>🎥</span>
              <span>📎</span>
              <span>⭐</span>
              <span>⋯</span>
            </div>
          </div>

          {/* Chat Empty State */}
          <div className="flex flex-col items-center justify-center flex-grow p-6 text-center">
            <img
              src={selectedUser.avatar}
              className="w-24 h-24 rounded-full mb-4"
              alt={selectedUser.name}
            />
            <h3 className="font-bold text-xl">{selectedUser.name}</h3>
            <p className="text-gray-400 mt-2">
              This is the beginning of your direct message history with{" "}
              {selectedUser.name}.
            </p>
            <button className="mt-4 px-4 py-2 rounded bg-gray-200 text-black font-semibold text-sm">
              View User Profile
            </button>
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-700 px-4 py-3 flex items-center gap-3">
            <button title="Attach">📎</button>
            <button title="Image">🖼️</button>
            <input
              className="flex-1 px-4 py-2 rounded-full text-black"
              placeholder="Write a message..."
            />
            <button title="Send">📤</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDashboard;
