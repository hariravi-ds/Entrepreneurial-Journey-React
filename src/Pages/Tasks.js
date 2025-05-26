import React from "react";

const tasks = {
  pending: [
    {
      title: "Requirement Analysis",
      team: "Aliya K, James Sully",
      priority: "High",
      status: "Pending",
      deadline: "06/10/2025",
      comments: 3,
      avatars: ["👩‍💼", "👨‍💼"],
    },
    {
      title: "Persona Research",
      team: "Aliya K, James Sully",
      priority: "Low",
      status: "Pending",
      deadline: "06/29/2025",
      comments: 3,
      avatars: ["👩‍💼", "👨‍💼"],
    },
    {
      title: "Hi-Fidelity Mockups",
      team: "Aliya K, James Sully",
      priority: "High",
      status: "Pending",
      deadline: "06/20/2025",
      comments: 3,
      avatars: ["👩‍💼", "👨‍💼"],
    },
  ],
  inProgress: [
    {
      title: "Design System Documentation",
      team: "Aliya K, James Sully",
      priority: "Low",
      status: "Pending",
      deadline: "06/20/2025",
      comments: 3,
      avatars: ["👩‍💼", "👨‍💼"],
    },
    {
      title: "User Interviews",
      team: "Aliya K, James Sully",
      priority: "High",
      status: "Completed",
      deadline: "05/19/2025",
      comments: 3,
      avatars: ["👩‍💼", "👨‍💼"],
    },
  ],
  completed: [
    {
      title: "Marketing Campaign",
      team: "Aliya K, James Sully",
      priority: "High",
      status: "Completed",
      deadline: "05/05/2025",
      comments: 3,
      avatars: ["👩‍💼", "👨‍💼"],
    },
  ],
};

const priorityColor = {
  High: "text-red-400",
  Medium: "text-yellow-400",
  Low: "text-green-400",
};

const TaskCard = ({ task }) => (
  <div className="bg-[#2D234C] p-4 rounded-xl text-white gap-4 flex flex-col">
    <h3 className="text-lg font-semibold">{task.title}</h3>
    <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
            <div className="text-sm mb-1">Team</div>
            <div className="text-sm mb-1">{task.team}</div>
        </div>
        <div className="flex flex-col">
            <div className="text-sm mb-1">Priority</div>
            <div className={`text-sm mb-1 ${priorityColor[task.priority]}`}>
              {task.priority}
            </div>
        </div>
        <div className="flex flex-col">
            <div className="text-sm mb-1">Status</div>
            <div className="text-sm mb-1">{task.status}</div>
        </div>
        <div className="flex flex-col">
            <div className="text-sm mb-1">Deadline</div>
            <div className="text-sm mb-1">🗓️ {task.deadline}</div>
        </div>
    </div>
    <div className="bg-[#C4A8FD] h-[1px]"></div>
    <div className="flex items-center justify-between">
      <div className="flex gap-1 text-xl">
        {task.avatars.map((a, i) => (
          <span key={i}>{a}</span>
        ))}
      </div>
      <span className="text-sm">{task.comments} comments</span>
    </div>
  </div>
);

const TaskColumn = ({ title, tasks, color }) => (
  <div className="flex-1 min-w-[300px] bg-[#5B4B7A] rounded-xl px-1 py-3 h-full gap-8 flex flex-col">
    <div>
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-white font-bold text-lg">{title}</h2>
        <span className="text-sm text-gray-400">
          {tasks.length} {tasks.length === 1 ? "Task" : "Tasks"}
        </span>
      </div>
      <div className="h-1 w-full rounded-full bg-gray-700">
        <div
          className={`h-1 rounded-full ${color}`}
          style={{ width: `${(tasks.length / 3) * 100}%` }}
        ></div>
      </div>
    </div>
    {tasks.map((task, idx) => (
      <TaskCard key={idx} task={task} />
    ))}
  </div>
);

const TaskBoard = () => (
  <div className="bg-[#1A1233] min-h-screen p-10 text-white">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Tasks</h1>
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md font-semibold">
        + New Task
      </button>
    </div>
    <div className="flex gap-6 overflow-x-auto">
      <TaskColumn title="Pending" tasks={tasks.pending} color="bg-pink-400" />
      <TaskColumn
        title="In Progress"
        tasks={tasks.inProgress}
        color="bg-purple-400"
      />
      <TaskColumn
        title="Completed"
        tasks={tasks.completed}
        color="bg-pink-400"
      />
    </div>
  </div>
);

export default TaskBoard;
