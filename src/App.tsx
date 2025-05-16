
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "@/hooks/useAuth";
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import AuthLayout from "@/pages/Auth/AuthLayout";
import Verification from "@/pages/Auth/Verification";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import ResetPassword from "@/pages/Auth/ResetPassword";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import DashboardOverview from "@/pages/Dashboard/DashboardOverview";
import FarmerDashboard from "@/pages/Dashboard/FarmerDashboard";
import AdminDashboard from "@/pages/Dashboard/AdminDashboard";
import PlannerDashboard from "@/pages/Dashboard/PlannerDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Index />} />

              {/* Auth Routes */}
              <Route path="/auth" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="verification" element={<Verification />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="reset-password" element={<ResetPassword />} />
              </Route>

              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardOverview />} />
                <Route path="farmer" element={<FarmerDashboard />} />
                <Route path="admin" element={<AdminDashboard />} />
                <Route path="planning" element={<PlannerDashboard />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
