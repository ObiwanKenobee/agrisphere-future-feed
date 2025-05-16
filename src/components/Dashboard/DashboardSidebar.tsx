
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import { 
  Home, 
  BarChart2, 
  Droplets, 
  Sprout, 
  Cloud, 
  Users, 
  Settings, 
  LayoutDashboard,
  Calendar
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active: boolean;
  roles?: string[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  to, 
  active,
  roles 
}) => {
  const { user } = useAuth();
  
  // Hide if user doesn't have the required role
  if (roles && user && !roles.includes(user.role)) {
    return null;
  }

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
        active
          ? "bg-agri-primary text-white"
          : "text-gray-700 hover:text-agri-primary hover:bg-green-50"
      )}
    >
      <div className="mr-3">{icon}</div>
      <span>{label}</span>
    </Link>
  );
};

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  
  // Determine active path
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="hidden md:flex md:flex-col md:w-64 md:bg-white md:shadow">
      <div className="h-16 flex items-center px-6">
        <div className="flex-shrink-0 flex items-center">
          <div className="text-xl font-bold text-agri-primary flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span>AgriSphere</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
        <nav className="flex-1 px-3 space-y-1">
          <SidebarItem
            to="/dashboard"
            icon={<Home size={20} />}
            label="Overview"
            active={isActive('/dashboard')}
          />
          
          <div className="pt-4 pb-2">
            <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Farm Management
            </div>
          </div>
          
          <SidebarItem
            to="/dashboard/irrigation"
            icon={<Droplets size={20} />}
            label="Irrigation"
            active={isActive('/dashboard/irrigation')}
            roles={['farmer', 'admin']}
          />
          
          <SidebarItem
            to="/dashboard/crops"
            icon={<Sprout size={20} />}
            label="Crops & Soil"
            active={isActive('/dashboard/crops')}
          />
          
          <SidebarItem
            to="/dashboard/weather"
            icon={<Cloud size={20} />}
            label="Weather"
            active={isActive('/dashboard/weather')}
          />
          
          <SidebarItem
            to="/dashboard/calendar"
            icon={<Calendar size={20} />}
            label="Planting Calendar"
            active={isActive('/dashboard/calendar')}
          />
          
          <div className="pt-4 pb-2">
            <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Analytics
            </div>
          </div>
          
          <SidebarItem
            to="/dashboard/analytics"
            icon={<BarChart2 size={20} />}
            label="Performance"
            active={isActive('/dashboard/analytics')}
          />
          
          <div className="pt-4 pb-2">
            <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Administration
            </div>
          </div>
          
          <SidebarItem
            to="/dashboard/users"
            icon={<Users size={20} />}
            label="User Management"
            active={isActive('/dashboard/users')}
            roles={['admin']}
          />
          
          <SidebarItem
            to="/dashboard/planning"
            icon={<LayoutDashboard size={20} />}
            label="Resource Planning"
            active={isActive('/dashboard/planning')}
            roles={['planner', 'admin']}
          />
          
          <SidebarItem
            to="/dashboard/settings"
            icon={<Settings size={20} />}
            label="Settings"
            active={isActive('/dashboard/settings')}
          />
        </nav>
      </div>
    </div>
  );
};

export default DashboardSidebar;
