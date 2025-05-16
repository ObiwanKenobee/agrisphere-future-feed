
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const mockFarms = [
  { id: 1, name: 'Green Valley Farm', owner: 'John Smith', size: '120 acres', efficiency: 87 },
  { id: 2, name: 'Sunrise Plantation', owner: 'Maria Garcia', size: '85 acres', efficiency: 92 },
  { id: 3, name: 'Oakridge Agricultural', owner: 'Robert Chen', size: '210 acres', efficiency: 78 },
  { id: 4, name: 'Sierra Farms', owner: 'Sarah Johnson', size: '65 acres', efficiency: 90 },
];

const mockAlerts = [
  { id: 1, farm: 'Oakridge Agricultural', alert: 'Irrigation system malfunction in Block 3', severity: 'high' },
  { id: 2, farm: 'Sunrise Plantation', alert: 'Water pump pressure below normal', severity: 'medium' },
  { id: 3, farm: 'Green Valley Farm', alert: 'Scheduled maintenance due in 3 days', severity: 'low' },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor and manage all farms in your network
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Farms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              4 new farms this month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Sensors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">328</div>
            <p className="text-xs text-muted-foreground">
              98.5% uptime
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Water Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.8M</div>
            <p className="text-xs text-muted-foreground">
              Gallons saved this season
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">System Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              2 high priority
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Farm Overview</CardTitle>
            <CardDescription>Summary of all managed farms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-2 font-medium">Farm Name</th>
                    <th className="text-left pb-2 font-medium">Owner</th>
                    <th className="text-left pb-2 font-medium">Size</th>
                    <th className="text-left pb-2 font-medium">Efficiency</th>
                    <th className="text-left pb-2 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockFarms.map((farm) => (
                    <tr key={farm.id} className="border-b">
                      <td className="py-3">{farm.name}</td>
                      <td className="py-3">{farm.owner}</td>
                      <td className="py-3">{farm.size}</td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                            <div 
                              className={`h-full rounded-full ${
                                farm.efficiency > 90 ? 'bg-green-500' : 
                                farm.efficiency > 80 ? 'bg-blue-500' : 
                                'bg-amber-500'
                              }`}
                              style={{ width: `${farm.efficiency}%` }}
                            ></div>
                          </div>
                          <span>{farm.efficiency}%</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <Button size="sm" variant="outline">View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Active Alerts</CardTitle>
            <CardDescription>System issues requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAlerts.map((alert) => (
                <div 
                  key={alert.id}
                  className={`p-3 rounded-lg border ${
                    alert.severity === 'high' ? 'bg-red-50 border-red-200' : 
                    alert.severity === 'medium' ? 'bg-amber-50 border-amber-200' : 
                    'bg-blue-50 border-blue-200'
                  }`}
                >
                  <p className={`text-sm font-medium ${
                    alert.severity === 'high' ? 'text-red-800' : 
                    alert.severity === 'medium' ? 'text-amber-800' : 
                    'text-blue-800'
                  }`}>
                    {alert.farm}
                  </p>
                  <p className="text-xs mt-1">{alert.alert}</p>
                  <div className="flex justify-end mt-2">
                    <Button 
                      size="sm"
                      variant={alert.severity === 'high' ? 'destructive' : 'outline'}
                    >
                      Resolve
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>System Performance</CardTitle>
          <CardDescription>Network and sensor uptime analytics</CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <p className="text-muted-foreground">Performance analytics graph placeholder</p>
          {/* In a real app, we would render a chart here */}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
