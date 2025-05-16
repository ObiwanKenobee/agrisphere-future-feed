
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) {
        toast({
          title: "Reset failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        setIsSubmitted(true);
      }
    } catch (error) {
      toast({
        title: "Reset failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="pt-6 flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center mb-4">Check your inbox</h1>
          <p className="text-center text-gray-600 mb-6">
            We've sent a password reset link to <span className="font-medium">{email}</span>. Please check your email.
          </p>
          <div className="w-full border-t border-gray-200 mt-6 pt-4">
            <p className="text-center text-sm">
              <Link to="/auth" className="text-agri-primary hover:underline">
                Return to login
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <h1 className="text-2xl font-bold text-center mb-2">Forgot Password</h1>
        <p className="text-center text-gray-600 mb-6">
          Enter your email and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</> : 'Send Reset Link'}
          </Button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              <Link to="/auth" className="text-agri-primary hover:underline">
                Back to login
              </Link>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ForgotPassword;
