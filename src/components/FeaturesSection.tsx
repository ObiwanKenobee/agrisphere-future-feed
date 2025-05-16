
import React from 'react';
import FeatureCard from './FeatureCard';
import { CloudRain, Leaf, ChartLine } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <CloudRain className="h-12 w-12" />,
      title: "Smart Irrigation",
      description: "AI-powered irrigation systems that save up to 40% water while improving crop yield through precise moisture control and scheduling."
    },
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Climate Resilience",
      description: "Weather forecasting and adaptive growing plans to help farmers prepare for changing climate conditions and extreme weather events."
    },
    {
      icon: <ChartLine className="h-12 w-12" />,
      title: "Digital Insights",
      description: "Real-time monitoring and analytics dashboard with actionable intelligence on crop health, resource usage, and yield projections."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agri-primary mb-4">
            Technology-Driven Agriculture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our innovative solutions combine cutting-edge technology with agricultural expertise to create sustainable farming practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
