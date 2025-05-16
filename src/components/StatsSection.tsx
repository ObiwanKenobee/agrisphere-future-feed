
import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { value: '40%', label: 'Water Saved' },
    { value: '25%', label: 'Yield Increase' },
    { value: '1000+', label: 'Farms Supported' },
    { value: '50K+', label: 'Hectares Managed' }
  ];

  return (
    <section className="stats-gradient py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-agri-primary mb-2">
                {stat.value}
              </div>
              <p className="text-lg text-gray-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
