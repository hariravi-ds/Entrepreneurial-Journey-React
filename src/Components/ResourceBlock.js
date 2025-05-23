import React from 'react';

const ResourceBlock = ({ title, icon, items }) => (
  <div className="p-20 rounded-2xl shadow-md w-full" style={{ backgroundColor: 'var(--card-fill)' }}>
    <h3 className="text-xl font-semibold text-center mb-4" style={{ color: 'var(--text-primary)' }}>
      {title}
    </h3>
    <div className="flex justify-center mb-4">
      <div className="w-32 h-32 rounded-full flex items-center justify-center text-5xl" style={{ backgroundColor: '#4B3A79' }}>
      {icon && React.createElement(icon, { size: 64, className: "text-white" })}
      </div>
    </div>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
      />
    </div>
    <ul className="flex flex-col gap-4 pl-1">
      {items.map((item, i) => (
        <li key={i} className="text-purple-300 hover:underline cursor-pointer">{item}</li>
      ))}
    </ul>
  </div>
);

export default ResourceBlock;