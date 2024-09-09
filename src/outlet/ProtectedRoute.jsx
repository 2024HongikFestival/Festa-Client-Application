import { Navigate, Outlet } from 'react-router-dom';
import { useAuth, useEvent } from '@/context/AuthProvider';

const LostProtectedRoute = () => {
  const { getLostAccessToken } = useAuth();
  const hasLostToken = getLostAccessToken();

  if (!hasLostToken) {
    return <Navigate to="/lost-and-found" replace />;
  }

  return <Outlet />;
};

const EventProtectedRoute = () => {
  const { getEventAccessToken } = useEvent();
  const hasEventToken = getEventAccessToken();

  if (!hasEventToken) {
    return <Navigate to="/event" replace />;
  }

  return <Outlet />;
};

export { LostProtectedRoute, EventProtectedRoute };
