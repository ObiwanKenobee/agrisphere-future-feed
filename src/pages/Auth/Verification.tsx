
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Verification = () => {
  return (
    <Card>
      <CardContent className="pt-6 flex flex-col items-center">
        <div className="p-4 rounded-full bg-green-100 mb-4">
          <Mail className="h-12 w-12 text-agri-primary" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">Check your inbox</h1>
        <p className="text-center text-gray-600 mb-6">
          We've sent you a verification link to your email address. Please click the link to verify your account.
        </p>
        <p className="text-sm text-gray-500 text-center">
          Didn't receive an email? Check your spam folder or{' '}
          <Link to="/auth/signup" className="text-agri-primary hover:underline">
            try again
          </Link>
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
};

export default Verification;
