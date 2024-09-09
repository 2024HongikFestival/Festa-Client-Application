import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';

const ProtectedRoute = () => {
  const { getAccessToken } = useAuth();
  const hasToken = getAccessToken();

  if (!hasToken) {
    return <Navigate to="/lost-and-found" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
