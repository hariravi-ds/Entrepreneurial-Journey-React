import React, { useState } from "react";

const CreateTask = () => {
  const [form, setForm] = useState({
    title: "",
    type: "",
    startDate: "",
    endDate: "",
    description: "",
    assignee: "Yash Ghori",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating task:", form);
    // You can POST to backend here
  };

  return (
    <div className="min-h-screen bg-[#1A1233] text-white p-6">
      <div className="max-w-4xl mx-auto bg-[#4C3A6D] p-10 rounded-lg">
        <div className="flex gap-4 items-center mb-8">
          <button className="text-2xl bg-white text-black p-1 rounded-lg">⬅</button>
          <h1 className="text-2xl font-bold">Create Task</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Task Title</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md text-black"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Task Type</label>
                <input
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md text-black"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block mb-2">Task Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">Task End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={form.endDate}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md text-black"
                    required
                  />
                </div>
            </div>

            <div>
              <label className="block mb-2">Task Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 rounded-md text-black"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block mb-2">Assign to</label>
                  <select
                    name="assignee"
                    value={form.assignee}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md text-black"
                  >
                    <option>Yash Ghori</option>
                    <option>Aliya K</option>
                    <option>James Sully</option>
                  </select>
                </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-md font-semibold"
            >
              Create
            </button>
            <button
              type="button"
              className="bg-gray-300 text-black px-6 py-2 rounded-md font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
