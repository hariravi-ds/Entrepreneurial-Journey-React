// CalendarView.jsx
import React, { useState } from "react";

const CalendarView = () => {
  const [view, setView] = useState("Month");
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const changeWeek = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + offset * 7);
    setCurrentDate(newDate);
  };

  const changeDay = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + offset);
    setCurrentDate(newDate);
  };

  const renderCalendar = () => {
    switch (view) {
      case "Day":
        return (
          <div className="text-white mt-4 space-y-4">
            <div className="bg-[#3E2B5B] p-4 rounded-lg shadow text-center">
              <h3 className="text-lg font-bold">
                {currentDate.toDateString()}
              </h3>
              <p className="text-sm mt-2">No events scheduled for today.</p>
            </div>
          </div>
        );
      case "Week": {
        const startOfWeek = new Date(currentDate);
        const day = startOfWeek.getDay();
        const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
        startOfWeek.setDate(diff);
        const days = Array.from({ length: 7 }, (_, i) => {
          const d = new Date(startOfWeek);
          d.setDate(d.getDate() + i);
          return d;
        });
        return (
          <div className="overflow-x-auto mt-4">
            <table className="w-full table-fixed border border-gray-700 text-white">
              <thead className="bg-[#3E2B5B]">
                <tr>
                  {days.map((day, i) => (
                    <th key={i} className="py-2 border border-gray-700">
                      {day.toLocaleDateString("en-US", { weekday: "short" })}
                      <br />
                      {day.getDate()}/{day.getMonth() + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {days.map((_, i) => (
                    <td
                      key={i}
                      className="border border-gray-700 h-32 align-top text-sm text-gray-300 px-2"
                    >
                      <strong className="block">No events</strong>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
      case "Month":
      default: {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const calendar = [];
        let dayCounter = 1 - (firstDay === 0 ? 6 : firstDay - 1);

        for (let i = 0; i < 6; i++) {
          const week = [];
          for (let j = 0; j < 7; j++) {
            week.push(dayCounter);
            dayCounter++;
          }
          calendar.push(week);
        }

        return (
          <div className="overflow-x-auto mt-4">
            <table className="w-full table-fixed border border-gray-700 text-white">
              <thead className="bg-[#3E2B5B]">
                <tr>
                  {"MON TUE WED THR FRI SAT SUN".split(" ").map((day, i) => (
                    <th key={i} className="py-2 border border-gray-700">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {calendar.map((week, weekIndex) => (
                  <tr key={weekIndex}>
                    {week.map((day, dayIndex) => (
                      <td
                        key={dayIndex}
                        className="border border-gray-700 h-24 align-top text-sm text-gray-300 px-2"
                      >
                        {day > 0 && day <= daysInMonth ? (
                          <strong>{day}</strong>
                        ) : (
                          ""
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
  };

  const renderSidebar = () => (
    <div className="w-[300px] bg-[#3E2B5B] ml-6 rounded-xl p-4">
      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded text-lg font-semibold mb-4">
        Add New
      </button>
      <h3 className="text-white text-lg font-semibold mb-2">Today</h3>
      {[
        "Weekly Standup Call",
        "Usability Review Call",
        "Wireframing Session",
        "Client Meeting",
      ].map((title, idx) => (
        <div key={idx} className="border-b border-white/10 py-2">
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="text-xs text-gray-300">11 June 2025</div>
          <div className="text-sm text-white mt-1">Brief description</div>
          <div className="text-xs text-purple-200 mt-1">👥 12 members</div>
        </div>
      ))}
    </div>
  );

  const handleNavigation = (offset) => {
    if (view === "Day") changeDay(offset);
    else if (view === "Week") changeWeek(offset);
    else changeMonth(offset);
  };

  return (
    <div className="bg-[#1A1233] min-h-screen text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Calendar</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleNavigation(-1)}
            className="px-3 py-1 rounded bg-purple-800 hover:bg-purple-700"
          >
            ◀
          </button>
          <span className="text-lg">
            {view === "Month"
              ? currentDate.toLocaleDateString("default", {
                  month: "long",
                  year: "numeric",
                })
              : view === "Week" || view === "Day"
              ? currentDate.toDateString()
              : ""}
          </span>
          <button
            onClick={() => handleNavigation(1)}
            className="px-3 py-1 rounded bg-purple-800 hover:bg-purple-700"
          >
            ▶
          </button>
        </div>
        <div className="flex space-x-2">
          {["Day", "Week", "Month"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-3 py-1 rounded transition ${
                view === v
                  ? "bg-purple-600 text-white"
                  : "bg-purple-900 text-purple-300 hover:bg-purple-800"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">{renderCalendar()}</div>
        {renderSidebar()}
      </div>
    </div>
  );
};

export default CalendarView;
