import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="max-w-2xl mx-auto px-4 py-28 text-center space-y-6">
      <div className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-theme">
        ERROR 404
      </div>
      <h1 className="text-4xl font-extrabold text-canvas-text tracking-tight">
        Page Not Found
      </h1>
      <p className="text-base text-muted-theme max-w-md mx-auto leading-relaxed">
        The requested URL was not found on this developer portfolio. Please return to the homepage or explore recent case studies.
      </p>

      <div className="pt-4 flex items-center justify-center gap-4">
        <Button
          variant="primary"
          size="md"
          onClick={() => navigate('/')}
          icon={<Home className="w-4 h-4" />}
          iconPosition="left"
        >
          Return to Home
        </Button>
        <Button
          variant="secondary"
          size="md"
          onClick={() => navigate('/work')}
          icon={<ArrowLeft className="w-4 h-4" />}
          iconPosition="left"
        >
          View Work
        </Button>
      </div>
    </div>
  );
};
