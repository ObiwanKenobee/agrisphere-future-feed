
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import TestimonialSection from '@/components/TestimonialSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import SeoSchema from '@/components/SeoSchema';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AgriSphere | Smart Irrigation & Food Security Platform</title>
        <meta name="description" content="AgriSphere helps farmers and policymakers grow more with less — less water, less waste, and fewer worries. Smart irrigation management inspired by Kenya's Galana Kulalu project." />
        <link rel="canonical" href="https://agrisphere.io" />
      </Helmet>
      <SeoSchema type="website" />
      <SeoSchema type="organization" />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
