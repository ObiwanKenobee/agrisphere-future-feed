
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplets, AlertCircle } from 'lucide-react';

const mockSensorData = [
  { id: 'sensor-1', name: 'Field 1 - North', moisture: 42, status: 'optimal' },
  { id: 'sensor-2', name: 'Field 1 - South', moisture: 38, status: 'optimal' },
  { id: 'sensor-3', name: 'Field 2 - East', moisture: 26, status: 'low' },
  { id: 'sensor-4', name: 'Field 2 - West', moisture: 31, status: 'normal' },
  { id: 'sensor-5', name: 'Greenhouse 1', moisture: 45, status: 'high' },
];

const FarmerDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Farmer Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor and manage your farm's irrigation system
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Irrigation Control</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center">
                  <div className="mr-4 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Main Field System</p>
                    <p className="text-sm text-gray-500">Last activation: 3 hours ago</p>
                  </div>
                </div>
                <Button>Activate</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center">
                  <div className="mr-4 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Greenhouse System</p>
                    <p className="text-sm text-gray-500">Currently active</p>
                  </div>
                </div>
                <Button variant="destructive">Stop</Button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-2 font-medium">Sensor</th>
                    <th className="text-left pb-2 font-medium">Moisture</th>
                    <th className="text-left pb-2 font-medium">Status</th>
                    <th className="text-left pb-2 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockSensorData.map((sensor) => (
                    <tr key={sensor.id} className="border-b">
                      <td className="py-3">{sensor.name}</td>
                      <td className="py-3">{sensor.moisture}%</td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className={`h-2 w-2 rounded-full mr-2 ${
                            sensor.status === 'optimal' ? 'bg-green-500' :
                            sensor.status === 'normal' ? 'bg-blue-500' :
                            sensor.status === 'low' ? 'bg-amber-500' :
                            'bg-red-500'
                          }`}></div>
                          <span className="capitalize">{sensor.status}</span>
                          {sensor.status === 'low' && (
                            <AlertCircle className="ml-1 h-4 w-4 text-amber-500" />
                          )}
                        </div>
                      </td>
                      <td className="py-3">
                        <Button size="sm" variant={sensor.status === 'low' ? 'default' : 'outline'}>
                          Irrigate
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Water Usage Analytics</CardTitle>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <p className="text-muted-foreground">Water usage graph placeholder</p>
          {/* In a real app, we would render a chart here */}
        </CardContent>
      </Card>
    </div>
  );
};

export default FarmerDashboard;
