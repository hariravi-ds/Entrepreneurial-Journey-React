import React from 'react';

const Opportunities = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <OpportunityCard
        title="Marketing for Startups"
        description="Reserve your place for the free intro session 5/7/25. Learn key hacks to your success!"
        tags={['Research', 'Strategy', 'Planning', 'Target Audience']}
      />
      <OpportunityCard
        title="Effective Leadership"
        description="5 Session Course – weekly – starting 5/9/25"
        steps={[1, 2, 3, 4, 5]}
      />
      <OpportunityCard
        title="Accurate Projections"
        description="Course starting 5/12/25"
        highlights={['Revenue Forecasts', 'Expenses', 'Profitability']}
        icon="💰"
      />
    </div>
  );
};

const OpportunityCard = ({ title, description, tags, steps, highlights, icon }) => (
  <div className="p-4 rounded-2xl shadow-lg flex flex-col gap-3" style={{ backgroundColor: 'var(--card-fill)' }}>
    <h3 className="text-lg font-semibold italic" style={{ color: 'var(--text-primary)' }}>{title}</h3>
    <div className="bg-[#4B3A79] rounded-xl p-4 text-white flex gap-4 items-center">
      <div className="text-4xl">
        {icon && <span>{icon}</span>}
      </div>
      <div>
        <p className="text-sm mb-2">{description}</p>
        {tags && <div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="text-xs px-2 py-1 rounded bg-[#34295C]">{tag}</span>)}</div>}
        {steps && <div className="flex gap-1 mt-2">{steps.map((s) => <span key={s} className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-sm">{s}</span>)}</div>}
        {highlights && (
          <ul className="text-sm list-disc list-inside text-gray-200">
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

export default Opportunities;