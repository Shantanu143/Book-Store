
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider.jsx';
import { Spinner } from 'flowbite-react';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  if (user) {
    return <>{children}</>;
  }

  return (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
