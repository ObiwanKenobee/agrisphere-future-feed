
import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="text-4xl font-bold text-agri-primary flex items-center gap-2">
            <span className="text-3xl">🌿</span>
            <span>AgriSphere</span>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
