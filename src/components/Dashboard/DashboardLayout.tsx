
import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

const DashboardLayout: React.FC = () => {
  const { session, user, loading } = useAuth();
  const location = useLocation();

  // Show loading state
  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-agri-primary"></div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!session || !user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />
        
        {/* Content area */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
