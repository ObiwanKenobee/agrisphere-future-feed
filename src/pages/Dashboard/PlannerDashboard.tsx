
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PlannerDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Resource Planning</h1>
        <p className="text-muted-foreground">
          Manage and allocate resources across farming operations
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Planting Schedule</CardTitle>
            <CardDescription>Upcoming planting activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                <div>
                  <p className="font-medium">Maize - Field 3</p>
                  <p className="text-sm text-muted-foreground">July 25 - August 5</p>
                </div>
                <Button variant="outline">Edit</Button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-100">
                <div>
                  <p className="font-medium">Soybeans - Field 2</p>
                  <p className="text-sm text-muted-foreground">August 10 - August 18</p>
                </div>
                <Button variant="outline">Edit</Button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                <div>
                  <p className="font-medium">Wheat - Fields 4 & 5</p>
                  <p className="text-sm text-muted-foreground">August 20 - September 5</p>
                </div>
                <Button variant="outline">Edit</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Resource Allocation</CardTitle>
            <CardDescription>Current distribution of resources</CardDescription>
          </CardHeader>
          <CardContent className="h-72 flex items-center justify-center">
            <p className="text-muted-foreground">Resource allocation chart placeholder</p>
            {/* In a real app, we would render a chart here */}
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Water Resource Planning</CardTitle>
          <CardDescription>Projected water needs and allocation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Water Usage by Crop Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white border rounded-lg">
                  <p className="text-sm text-muted-foreground">Maize</p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-2xl font-semibold">12,500</span>
                    <span className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded">Gallons/Acre</span>
                  </div>
                </div>
                
                <div className="p-4 bg-white border rounded-lg">
                  <p className="text-sm text-muted-foreground">Soybeans</p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-2xl font-semibold">9,200</span>
                    <span className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded">Gallons/Acre</span>
                  </div>
                </div>
                
                <div className="p-4 bg-white border rounded-lg">
                  <p className="text-sm text-muted-foreground">Wheat</p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-2xl font-semibold">7,800</span>
                    <span className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded">Gallons/Acre</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Projected Water Needs</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-2 font-medium">Month</th>
                    <th className="text-right pb-2 font-medium">Projected Need</th>
                    <th className="text-right pb-2 font-medium">Available Supply</th>
                    <th className="text-right pb-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3">July</td>
                    <td className="py-3 text-right">1.2M gallons</td>
                    <td className="py-3 text-right">1.5M gallons</td>
                    <td className="py-3 text-right">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Sufficient
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">August</td>
                    <td className="py-3 text-right">1.8M gallons</td>
                    <td className="py-3 text-right">1.7M gallons</td>
                    <td className="py-3 text-right">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        Shortage Risk
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">September</td>
                    <td className="py-3 text-right">1.4M gallons</td>
                    <td className="py-3 text-right">1.9M gallons</td>
                    <td className="py-3 text-right">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Sufficient
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlannerDashboard;
