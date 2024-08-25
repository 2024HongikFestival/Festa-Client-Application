import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from '../context/AuthProvider';

const ProtectedRoute = () => {
  const { accessToken } = useAuth();

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default ProtectedRoute;
