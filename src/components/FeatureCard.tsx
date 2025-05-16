
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full feature-card-gradient overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center text-center h-full">
        <div className="mb-4 text-4xl text-agri-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-agri-primary">
          {title}
        </h3>
        <p className="text-gray-700">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
