import React, { useState } from "react";

const AccordionSection = ({ title, isOpen, onToggle, children }) => (
  <div className="border-t border-white/10">
    <button
      className="w-full text-left px-6 py-4 flex justify-between items-center bg-[#3E2B5B] text-white font-semibold"
      onClick={onToggle}
    >
      <span>{title}</span>
      <span>{isOpen ? "−" : "+"}</span>
    </button>
    {isOpen && <div className="p-6">{children}</div>}
  </div>
);

const EntrepreneurProfile = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "Johndoe@gmail.com",
    phone: "+234 813344969221",
    language: "English",
    url: "Mediaai.com",
    interest1: "Business",
    interest2: "Accounting",
    tagline: "Entrepreneur and Innovator",
    role: "Software Engineer",
    old_password: "",
    new_password: "",
    bio: "I graduated from University of San Francisco with a Bachelor’s degree in business. Later on, I took an online course in technology to better leverage my understand of AI.",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="bg-[#1A1233] text-white min-h-screen p-8">
      <h2 className="text-xl font-semibold mb-6">
        Entrepreneur Profile Overview
      </h2>

      <div className="bg-[#3E2B5B] rounded-xl overflow-hidden">
        {/* Profile Accordion */}
        <AccordionSection
          title="Profile"
          isOpen={activeSection === "profile"}
          onToggle={() => toggleSection("profile")}
        >
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">📷</span>
              </div>
              <p className="text-xs text-center mt-2 text-gray-300">
                * The uploaded image must be 500px wide and 500px long
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="rounded-full px-4 py-2 bg-white text-black"
                placeholder="First Name"
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="rounded-full px-4 py-2 bg-white text-black"
                placeholder="Last Name"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-full px-4 py-2 bg-white text-black"
                placeholder="Email"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="rounded-full px-4 py-2 bg-white text-black"
                placeholder="Phone"
              />
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="rounded-full px-4 py-2 bg-white text-black"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
              <input
                name="url"
                value={formData.url}
                onChange={handleChange}
                className="rounded-full px-4 py-2 bg-white text-black"
                placeholder="URL (Links)"
              />
              <select
                name="interest1"
                value={formData.interest1}
                onChange={handleChange}
                className="rounded-full px-4 py-2 bg-white text-black"
              >
                <option>Business</option>
                <option>Finance</option>
                <option>Technology</option>
              </select>
              <select
                name="interest2"
                value={formData.interest2}
                onChange={handleChange}
                className="rounded-full px-4 py-2 bg-white text-black"
              >
                <option>Accounting</option>
                <option>Operations</option>
                <option>Marketing</option>
              </select>
              <input
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                className="rounded-full px-4 py-2 bg-white text-black"
                placeholder="Tagline"
              />
              <input
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="rounded-full px-4 py-2 bg-white text-black"
                placeholder="Role"
              />
            </div>

            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="mt-6 w-full rounded-2xl px-4 py-2 bg-white text-black"
              rows="4"
              placeholder="Bio"
            ></textarea>

            <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-full text-white font-semibold">
              Save Changes
            </button>
          </div>
        </AccordionSection>

        {/* Password Accordion */}
        <AccordionSection
          title="Password"
          isOpen={activeSection === "password"}
          onToggle={() => toggleSection("password")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <input
              name="old_password"
              value={formData.old_password}
              onChange={handleChange}
              className="rounded-full px-4 py-2 bg-white text-black"
              placeholder="Old Password"
            />
            <input
              name="new_passowrd"
              value={formData.new_password}
              onChange={handleChange}
              className="rounded-full px-4 py-2 bg-white text-black"
              placeholder="New Password"
            />
          </div>
        </AccordionSection>

        {/* Company Profile Accordion */}
        <AccordionSection
          title="Company Profile"
          isOpen={activeSection === "company"}
          onToggle={() => toggleSection("company")}
        >
          <p>Company profile form or info goes here...</p>
        </AccordionSection>
      </div>
    </div>
  );
};

export default EntrepreneurProfile;
