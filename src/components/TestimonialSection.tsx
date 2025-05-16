
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "AgriSphere has transformed how we manage our irrigation system. We've reduced water usage by 35% while seeing better yields.",
      author: "David Kamau",
      role: "Farm Owner, Nakuru"
    },
    {
      quote: "The real-time data insights have helped us make crucial decisions about planting and harvesting times. The ROI has been remarkable.",
      author: "Sarah Odhiambo",
      role: "Agricultural Consultant"
    }
  ];

  return (
    <section className="py-20 bg-agri-lighter">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agri-primary mb-4">
            Voices from the Field
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from farmers and agricultural experts who have transformed their operations with AgriSphere.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <p className="text-gray-700 text-lg mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-agri-primary">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
