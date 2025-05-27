import React, { useState } from "react";

const AddUser = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    position: "",
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
          <button className="text-2xl bg-white text-black p-1 rounded-lg">
            ⬅
          </button>
          <h1 className="text-2xl font-bold">Add Team Member</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">First Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md text-black"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md text-black"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md text-black"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Contact</label>
                <input
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md text-black"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Position</label>
                <input
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md text-black"
                  required
                ></input>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              type="button"
              className="bg-gray-300 text-black px-6 py-2 rounded-md font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-md font-semibold"
            >
              Add Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
