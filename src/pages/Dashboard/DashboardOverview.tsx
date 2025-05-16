
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Droplets, Sprout, CloudSun, TrendingUp } from 'lucide-react';

const DashboardOverview: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome to your AgriSphere {user?.role} dashboard
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Water Usage</CardTitle>
            <Droplets className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86%</div>
            <p className="text-xs text-muted-foreground">
              Efficiency rating (14% better than target)
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Crop Health</CardTitle>
            <Sprout className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Good</div>
            <p className="text-xs text-muted-foreground">
              Based on latest sensor readings
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Weather Forecast</CardTitle>
            <CloudSun className="h-5 w-5 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Sunny</div>
            <p className="text-xs text-muted-foreground">
              Next 24 hours: 28°C / 18°C
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Yield Prediction</CardTitle>
            <TrendingUp className="h-5 w-5 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12%</div>
            <p className="text-xs text-muted-foreground">
              Compared to previous season
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your farm's recent operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Irrigation system activated</p>
                  <p className="text-xs text-gray-500">Today, 08:23 AM</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Soil moisture sensors calibrated</p>
                  <p className="text-xs text-gray-500">Yesterday, 04:17 PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Weather alert: Light rain expected</p>
                  <p className="text-xs text-gray-500">Jul 15, 2023, 10:42 AM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Smart Recommendations</CardTitle>
            <CardDescription>AI-driven insights for your farm</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                <p className="text-sm text-green-800 font-medium">Consider reducing irrigation in Field 3</p>
                <p className="text-xs text-green-600 mt-1">Soil moisture levels are 15% above optimal range</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-800 font-medium">Optimal planting time approaching</p>
                <p className="text-xs text-blue-600 mt-1">Climate conditions will be ideal for maize in 5 days</p>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                <p className="text-sm text-amber-800 font-medium">Nutrient deficiency detected</p>
                <p className="text-xs text-amber-600 mt-1">Consider applying phosphorus supplement to sector B</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
