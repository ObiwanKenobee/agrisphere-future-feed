
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-10 z-0"></div>
      <div className="hero-gradient absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-4xl md:text-5xl">🌿</span>
            <span className="text-4xl md:text-5xl ml-2">🌍</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-agri-primary mb-4">
            Welcome to AgriSphere
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-agri-secondary mb-6">
            Where Innovation Meets the Soil
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Inspired by Kenya's bold vision in the Galana Kulalu project, AgriSphere helps farmers and policymakers grow more with less — less water, less waste, and fewer worries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-agri-primary hover:bg-agri-dark text-white px-8 py-6 text-lg rounded-full"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="border-agri-secondary text-agri-secondary hover:bg-agri-light px-8 py-6 text-lg rounded-full"
              onClick={scrollToFeatures}
            >
              Learn More
              <ArrowDown className="ml-2 h-4 w-4 animate-bounce-light" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
