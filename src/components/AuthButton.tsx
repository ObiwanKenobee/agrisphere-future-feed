
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const AuthButton: React.FC = () => {
  const { session, user, signOut } = useAuth();
  const navigate = useNavigate();

  if (session && user) {
    return (
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/dashboard')}
          className="hover:bg-agri-primary hover:text-white"
        >
          Dashboard
        </Button>
        <Button 
          variant="outline" 
          onClick={() => signOut()}
        >
          Log out
        </Button>
      </div>
    );
  }

  return (
    <Link to="/auth">
      <Button className="bg-agri-primary hover:bg-agri-dark text-white">
        Sign In
      </Button>
    </Link>
  );
};

export default AuthButton;
