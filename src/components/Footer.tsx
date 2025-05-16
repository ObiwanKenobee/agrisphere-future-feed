
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-agri-primary mb-4">AgriSphere</h3>
            <p className="text-gray-600">
              Sustainable irrigation management solutions inspired by Kenya's Galana Kulalu project.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-agri-primary mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-agri-secondary">Smart Irrigation</a></li>
              <li><a href="#" className="hover:text-agri-secondary">Climate Adaptation</a></li>
              <li><a href="#" className="hover:text-agri-secondary">Data Analytics</a></li>
              <li><a href="#" className="hover:text-agri-secondary">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-agri-primary mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-agri-secondary">Case Studies</a></li>
              <li><a href="#" className="hover:text-agri-secondary">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-agri-secondary">Blog</a></li>
              <li><a href="#" className="hover:text-agri-secondary">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-agri-primary mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-agri-secondary">Contact Us</a></li>
              <li><a href="#" className="hover:text-agri-secondary">Support</a></li>
              <li><a href="#" className="hover:text-agri-secondary">Partners</a></li>
              <li><a href="#" className="hover:text-agri-secondary">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AgriSphere. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-agri-primary">Terms</a>
            <a href="#" className="text-gray-500 hover:text-agri-primary">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-agri-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
