
import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-agri-primary text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's feed the future, together.
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join the community of innovative farmers, policymakers, and agricultural experts who are reshaping food production for a sustainable tomorrow.
        </p>
        <Button 
          size="lg"
          className="bg-white text-agri-primary hover:bg-agri-light hover:text-agri-dark px-8 py-6 text-lg rounded-full"
        >
          Start Your Journey
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
