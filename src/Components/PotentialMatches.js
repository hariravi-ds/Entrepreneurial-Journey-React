import React from 'react';
import { Link } from 'react-router-dom';

const PotentialMatches = () => {
  const people = [
    { name: 'Matija C.', role: 'Software Engineer' },
    { name: 'Sarah Q.', role: 'Business Development' },
    { name: 'Jessy Y.', role: 'UX Designer' },
    { name: 'James B.', role: 'Accounting Professional' },
    { name: 'Anna J.', role: 'Project Manager' }
  ];

  return (
    <div className="p-4 rounded-lg shadow-lg mb-6" style={{ backgroundColor: 'var(--card-fill)' }}>
      <div className="grid grid-cols-5 gap-4">
        {people.map((person) => (
          <div className="text-center" key={person.name}>
            <div className="w-16 h-16 rounded-full bg-gray-500 mx-auto mb-2"></div>
            <p style={{ color: 'var(--text-primary)' }}>{person.name}</p>
            <p style={{ color: 'var(--text-secondary)' }}>{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PotentialMatches;